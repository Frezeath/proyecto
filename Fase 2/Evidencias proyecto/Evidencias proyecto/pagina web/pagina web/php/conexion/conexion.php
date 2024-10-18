<?php
// Datos de conexión a la base de datos
$servidor = "localhost";  // Cambia si es necesario (por ejemplo, si usas otro host)
$usuario = "root";         // Tu usuario de MySQL
$contraseña = "";          // Tu contraseña de MySQL
$nombre_base_datos = "Frebor"; // Nombre de la base de datos

// Establecer conexión a la base de datos
$conn = new mysqli($servidor, $usuario, $contraseña, $nombre_base_datos);

// Verificar la conexión
if ($conn->connect_error) {
    die("Error de conexión: " . $conn->connect_error);
}

// Establecer el conjunto de caracteres para evitar problemas de codificación
$conn->set_charset("utf8");

// Aquí puedes agregar más configuraciones si es necesario

// Cerrar conexión al final (opcional, se hace normalmente en el archivo que usa la conexión)
function cerrar_conexion($conn) {
    $conn->close();
}
?>
