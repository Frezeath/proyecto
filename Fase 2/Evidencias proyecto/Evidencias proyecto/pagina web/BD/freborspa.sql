CREATE DATABASE IF NOT EXISTS Frebor;
USE Frebor;

-- Eliminar la tabla si existe antes de crearla
DROP TABLE IF EXISTS Clientes;
CREATE TABLE Clientes (
    id_cliente INT AUTO_INCREMENT PRIMARY KEY,
    nombre_cliente VARCHAR(100) NOT NULL,
    apellido_cliente VARCHAR(100) NOT NULL,
    email_cliente VARCHAR(100) NOT NULL,
    contrasena_cliente VARCHAR(255) NOT NULL,  -- Cambiado aquí
    telefono_cliente VARCHAR(15),
    direccion_cliente VARCHAR(255),
    fecha_registro_cliente DATETIME DEFAULT CURRENT_TIMESTAMP
);


DROP TABLE IF EXISTS Proveedores;
CREATE TABLE Proveedores (
    id_proveedor INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    contacto VARCHAR(100),
    telefono VARCHAR(15),
    email VARCHAR(100) UNIQUE,
    direccion VARCHAR(255)
);

DROP TABLE IF EXISTS Categorias;
CREATE TABLE Categorias (
    id_categoria INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    descripcion TEXT
);

DROP TABLE IF EXISTS Productos;
CREATE TABLE Productos (
    id_producto INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    descripcion TEXT,
    precio DECIMAL(10, 2) NOT NULL,
    stock INT NOT NULL,
    id_categoria INT,
    FOREIGN KEY (id_categoria) REFERENCES Categorias(id_categoria)
);

DROP TABLE IF EXISTS Ordenes;
CREATE TABLE Ordenes (
    id_orden INT AUTO_INCREMENT PRIMARY KEY,
    id_cliente INT,
    fecha_orden DATETIME DEFAULT CURRENT_TIMESTAMP,
    total DECIMAL(10, 2) NOT NULL,
    estado ENUM('Pendiente', 'Completada', 'Cancelada') NOT NULL,
    FOREIGN KEY (id_cliente) REFERENCES Clientes(id_cliente)
);

DROP TABLE IF EXISTS DetallesOrden;
CREATE TABLE DetallesOrden (
    id_detalle INT AUTO_INCREMENT PRIMARY KEY,
    id_orden INT,
    id_producto INT,
    cantidad INT NOT NULL,
    precio_unitario DECIMAL(10, 2) NOT NULL,
    FOREIGN KEY (id_orden) REFERENCES Ordenes(id_orden),
    FOREIGN KEY (id_producto) REFERENCES Productos(id_producto)
);

DROP TABLE IF EXISTS Pagos;
CREATE TABLE Pagos (
    id_pago INT AUTO_INCREMENT PRIMARY KEY,
    id_orden INT,
    fecha_pago DATETIME DEFAULT CURRENT_TIMESTAMP,
    monto DECIMAL(10, 2) NOT NULL,
    metodo_pago VARCHAR(50),
    FOREIGN KEY (id_orden) REFERENCES Ordenes(id_orden)
);

DROP TABLE IF EXISTS Envios;
CREATE TABLE Envios (
    id_envio INT AUTO_INCREMENT PRIMARY KEY,
    id_orden INT,
    direccion_envio VARCHAR(255) NOT NULL,
    fecha_envio DATETIME,
    estado_envio ENUM('Pendiente', 'Enviado', 'Entregado', 'Devuelto') NOT NULL,
    FOREIGN KEY (id_orden) REFERENCES Ordenes(id_orden)
);

DROP TABLE IF EXISTS Devoluciones;
CREATE TABLE Devoluciones (
    id_devolucion INT AUTO_INCREMENT PRIMARY KEY,
    id_orden INT,
    fecha_devolucion DATETIME DEFAULT CURRENT_TIMESTAMP,
    motivo TEXT,
    estado ENUM('Solicitada', 'Aprobada', 'Rechazada') NOT NULL,
    FOREIGN KEY (id_orden) REFERENCES Ordenes(id_orden)
);

DROP TABLE IF EXISTS Inventarios;
CREATE TABLE Inventarios (
    id_inventario INT AUTO_INCREMENT PRIMARY KEY,
    id_producto INT,
    cantidad INT NOT NULL,
    fecha_actualizacion DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (id_producto) REFERENCES Productos(id_producto)
);

DROP TABLE IF EXISTS Usuarios;
CREATE TABLE Usuarios (
    id_usuario INT AUTO_INCREMENT PRIMARY KEY,
    nombre_usuario VARCHAR(100) NOT NULL UNIQUE,
    contraseña VARCHAR(255) NOT NULL,
    rol ENUM('Admin', 'Empleado') NOT NULL,
    estado ENUM('Activo', 'Inactivo') NOT NULL
);

DROP TABLE IF EXISTS Roles;
CREATE TABLE Roles (
    id_rol INT AUTO_INCREMENT PRIMARY KEY,
    nombre_rol VARCHAR(100) NOT NULL,
    descripcion TEXT
);

DROP TABLE IF EXISTS HistorialPrecios;
CREATE TABLE HistorialPrecios (
    id_historial INT AUTO_INCREMENT PRIMARY KEY,
    id_producto INT,
    precio DECIMAL(10, 2) NOT NULL,
    fecha_inicio DATETIME NOT NULL,
    fecha_fin DATETIME,
    FOREIGN KEY (id_producto) REFERENCES Productos(id_producto)
);

DROP TABLE IF EXISTS Promociones;
CREATE TABLE Promociones (
    id_promocion INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    descripcion TEXT,
    descuento DECIMAL(5, 2) NOT NULL,
    fecha_inicio DATETIME NOT NULL,
    fecha_fin DATETIME NOT NULL
);

DROP TABLE IF EXISTS MetodosPago;
CREATE TABLE MetodosPago (
    id_metodo INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    descripcion TEXT
);

DROP TABLE IF EXISTS HistorialCompras;
CREATE TABLE HistorialCompras (
    id_historial INT AUTO_INCREMENT PRIMARY KEY,
    id_cliente INT,
    id_producto INT,
    fecha_compra DATETIME DEFAULT CURRENT_TIMESTAMP,
    cantidad INT NOT NULL,
    FOREIGN KEY (id_cliente) REFERENCES Clientes(id_cliente),
    FOREIGN KEY (id_producto) REFERENCES Productos(id_producto)
);

DROP TABLE IF EXISTS FeedbackClientes;
CREATE TABLE FeedbackClientes (
    id_feedback INT AUTO_INCREMENT PRIMARY KEY,
    id_cliente INT,
    id_producto INT,
    calificacion INT CHECK(calificacion BETWEEN 1 AND 5),
    comentario TEXT,
    fecha_feedback DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (id_cliente) REFERENCES Clientes(id_cliente),
    FOREIGN KEY (id_producto) REFERENCES Productos(id_producto)
);

DROP TABLE IF EXISTS DireccionesEnvio;
CREATE TABLE DireccionesEnvio (
    id_direccion INT AUTO_INCREMENT PRIMARY KEY,
    id_cliente INT,
    direccion VARCHAR(255) NOT NULL,
    ciudad VARCHAR(100),
    estado VARCHAR(100),
    codigo_postal VARCHAR(10),
    FOREIGN KEY (id_cliente) REFERENCES Clientes(id_cliente)
);

DROP TABLE IF EXISTS Configuraciones;
CREATE TABLE Configuraciones (
    id_configuracion INT AUTO_INCREMENT PRIMARY KEY,
    clave VARCHAR(100) NOT NULL,
    valor TEXT NOT NULL
);

DROP TABLE IF EXISTS Seguridad;
CREATE TABLE Seguridad (
    id_seguridad INT AUTO_INCREMENT PRIMARY KEY,
    id_usuario INT,
    ultima_conexion DATETIME,
    ip VARCHAR(15),
    FOREIGN KEY (id_usuario) REFERENCES Usuarios(id_usuario)
);

DROP TABLE IF EXISTS ActividadesUsuario;
CREATE TABLE ActividadesUsuario (
    id_actividad INT AUTO_INCREMENT PRIMARY KEY,
    id_usuario INT,
    descripcion TEXT,
    fecha DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (id_usuario) REFERENCES Usuarios(id_usuario)
);

DROP TABLE IF EXISTS Wishlist;
CREATE TABLE Wishlist (
    id_wishlist INT AUTO_INCREMENT PRIMARY KEY,
    id_cliente INT,
    id_producto INT,
    fecha_agregado DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (id_cliente) REFERENCES Clientes(id_cliente),
    FOREIGN KEY (id_producto) REFERENCES Productos(id_producto)
);

DROP TABLE IF EXISTS Carritos;
CREATE TABLE Carritos (
    id_carrito INT AUTO_INCREMENT PRIMARY KEY,
    id_cliente INT,
    fecha_creacion DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (id_cliente) REFERENCES Clientes(id_cliente)
);

DROP TABLE IF EXISTS DetallesCarrito;
CREATE TABLE DetallesCarrito (
    id_detalle_carrito INT AUTO_INCREMENT PRIMARY KEY,
    id_carrito INT,
    id_producto INT,
    cantidad INT NOT NULL,
    FOREIGN KEY (id_carrito) REFERENCES Carritos(id_carrito),
    FOREIGN KEY (id_producto) REFERENCES Productos(id_producto)
);

DROP TABLE IF EXISTS Cupones;
CREATE TABLE Cupones (
    id_cupon INT AUTO_INCREMENT PRIMARY KEY,
    codigo VARCHAR(100) NOT NULL UNIQUE,
    descuento DECIMAL(5, 2) NOT NULL,
    fecha_expiracion DATETIME NOT NULL
);

DROP TABLE IF EXISTS Subcategorias;
CREATE TABLE Subcategorias (
    id_subcategoria INT AUTO_INCREMENT PRIMARY KEY,
    id_categoria INT,
    nombre VARCHAR(100) NOT NULL,
    descripcion TEXT,
    FOREIGN KEY (id_categoria) REFERENCES Categorias(id_categoria)
);

DROP TABLE IF EXISTS MetodosEnvio;
CREATE TABLE MetodosEnvio (
    id_metodo_envio INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    costo DECIMAL(10, 2) NOT NULL,
    tiempo_estimado VARCHAR(100) NOT NULL
);

DROP TABLE IF EXISTS Etiquetas;
CREATE TABLE Etiquetas (
    id_etiqueta INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL
);

DROP TABLE IF EXISTS ProductoEtiquetas;
CREATE TABLE ProductoEtiquetas (
    id_producto INT,
    id_etiqueta INT,
    PRIMARY KEY (id_producto, id_etiqueta),
    FOREIGN KEY (id_producto) REFERENCES Productos(id_producto),
    FOREIGN KEY (id_etiqueta) REFERENCES Etiquetas(id_etiqueta)
);

DROP TABLE IF EXISTS Notificaciones;
CREATE TABLE Notificaciones (
    id_notificacion INT AUTO_INCREMENT PRIMARY KEY,
    id_usuario INT,
    mensaje TEXT,
    fecha DATETIME DEFAULT CURRENT_TIMESTAMP,
    leido BOOLEAN DEFAULT FALSE,
    FOREIGN KEY (id_usuario) REFERENCES Usuarios(id_usuario)
);

-- Insertar en Clientes
INSERT INTO Clientes (nombre_cliente, apellido_cliente, email_cliente, telefono_cliente, direccion_cliente) VALUES
('Juan', 'Pérez', 'juan.perez@gmail.com', '123456789', 'Calle Falsa 123'),
('María', 'González', 'maria.gonzalez@gmail.com', '987654321', 'Av. Siempre Viva 456'),
('Carlos', 'López', 'carlos.lopez@gmail.com', '456123789', 'Pasaje Oculto 789'),
('Ana', 'Martínez', 'ana.martinez@gmail.com', '321654987', 'Camino Secreto 321'),
('Pedro', 'Hernández', 'pedro.hernandez@gmail.com', '789456123', 'Plaza Mayor 101');

-- Insertar en Proveedores
INSERT INTO Proveedores (nombre, contacto, telefono, email, direccion) VALUES
('Proveedor A', 'Contacto A', '111111111', 'proveedorA@correo.com', 'Calle A 123'),
('Proveedor B', 'Contacto B', '222222222', 'proveedorB@correo.com', 'Calle B 456'),
('Proveedor C', 'Contacto C', '333333333', 'proveedorC@correo.com', 'Calle C 789'),
('Proveedor D', 'Contacto D', '444444444', 'proveedorD@correo.com', 'Calle D 101'),
('Proveedor E', 'Contacto E', '555555555', 'proveedorE@correo.com', 'Calle E 202');

-- Insertar en Categorías
INSERT INTO Categorias (nombre, descripcion) VALUES
('Electrónica', 'Productos electrónicos'),
('Ropa', 'Prendas de vestir'),
('Hogar', 'Artículos para el hogar'),
('Juguetes', 'Juguetes para niños'),
('Libros', 'Libros y literatura');

-- Insertar en Productos
INSERT INTO Productos (nombre, descripcion, precio, stock, id_categoria) VALUES
('Televisor', 'Televisor de 50 pulgadas', 500.00, 10, 1),
('Camiseta', 'Camiseta de algodón', 15.00, 100, 2),
('Silla', 'Silla de oficina ergonómica', 80.00, 50, 3),
('Muñeca', 'Muñeca de trapo', 25.00, 30, 4),
('Libro de historia', 'Libro de historia contemporánea', 35.00, 20, 5);

-- Insertar en Ordenes
INSERT INTO Ordenes (id_cliente, total, estado) VALUES
(1, 520.00, 'Completada'),
(2, 30.00, 'Pendiente'),
(3, 80.00, 'Cancelada'),
(4, 25.00, 'Completada'),
(5, 70.00, 'Pendiente');

-- Insertar en DetallesOrden
INSERT INTO DetallesOrden (id_orden, id_producto, cantidad, precio_unitario) VALUES
(1, 1, 1, 500.00),
(2, 2, 2, 15.00),
(3, 3, 1, 80.00),
(4, 4, 1, 25.00),
(5, 5, 2, 35.00);

-- Insertar en Pagos
INSERT INTO Pagos (id_orden, monto, metodo_pago) VALUES
(1, 520.00, 'Tarjeta de crédito'),
(2, 30.00, 'PayPal'),
(3, 80.00, 'Transferencia bancaria'),
(4, 25.00, 'Efectivo'),
(5, 70.00, 'Tarjeta de débito');

-- Insertar en Envios
INSERT INTO Envios (id_orden, direccion_envio, fecha_envio, estado_envio) VALUES
(1, 'Calle Falsa 123', '2024-10-16 12:00:00', 'Enviado'),
(2, 'Av. Siempre Viva 456', '2024-10-17 14:00:00', 'Pendiente'),
(3, 'Pasaje Oculto 789', '2024-10-18 16:00:00', 'Cancelado'),
(4, 'Camino Secreto 321', '2024-10-19 18:00:00', 'Entregado'),
(5, 'Plaza Mayor 101', '2024-10-20 10:00:00', 'Pendiente');

-- Insertar en Devoluciones
INSERT INTO Devoluciones (id_orden, motivo, estado) VALUES
(1, 'Producto defectuoso', 'Aprobada'),
(2, 'No era lo que esperaba', 'Solicitada'),
(3, 'Pedido duplicado', 'Rechazada'),
(4, 'Error en el envío', 'Aprobada'),
(5, 'Cambio de opinión', 'Solicitada');

-- Insertar en Inventarios
INSERT INTO Inventarios (id_producto, cantidad) VALUES
(1, 10),
(2, 100),
(3, 50),
(4, 30),
(5, 20);

-- Insertar en Usuarios
INSERT INTO Usuarios (nombre_usuario, contraseña, rol, estado) VALUES
('admin', 'admin123', 'Admin', 'Activo'),
('empleado1', 'empleado123', 'Empleado', 'Activo'),
('empleado2', 'empleado456', 'Empleado', 'Activo'),
('empleado3', 'empleado789', 'Empleado', 'Inactivo'),
('admin2', 'admin456', 'Admin', 'Inactivo');

-- Insertar en Roles
INSERT INTO Roles (nombre_rol, descripcion) VALUES
('Admin', 'Administrador con acceso completo'),
('Empleado', 'Empleado con acceso limitado');

-- Insertar en HistorialPrecios
INSERT INTO HistorialPrecios (id_producto, precio, fecha_inicio, fecha_fin) VALUES
(1, 550.00, '2024-01-01 00:00:00', '2024-09-30 23:59:59'),
(2, 20.00, '2024-02-01 00:00:00', '2024-08-31 23:59:59'),
(3, 85.00, '2024-03-01 00:00:00', '2024-07-31 23:59:59'),
(4, 30.00, '2024-04-01 00:00:00', '2024-06-30 23:59:59'),
(5, 40.00, '2024-05-01 00:00:00', '2024-05-31 23:59:59');

-- Insertar en Promociones
INSERT INTO Promociones (nombre, descripcion, descuento, fecha_inicio, fecha_fin) VALUES
('Promo Verano', 'Descuento especial de verano', 10.00, '2024-06-01 00:00:00', '2024-06-30 23:59:59'),
('Promo Invierno', 'Descuento en productos de invierno', 15.00, '2024-12-01 00:00:00', '2024-12-31 23:59:59');

-- Insertar en MetodosPago
INSERT INTO MetodosPago (nombre, descripcion) VALUES
('Tarjeta de crédito', 'Pago mediante tarjeta de crédito'),
('PayPal', 'Pago a través de PayPal'),
('Transferencia bancaria', 'Pago por transferencia bancaria'),
('Efectivo', 'Pago en efectivo'),
('Tarjeta de débito', 'Pago con tarjeta de débito');
