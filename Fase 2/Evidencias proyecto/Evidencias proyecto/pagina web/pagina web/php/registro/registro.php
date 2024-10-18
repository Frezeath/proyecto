<?php
// Incluir la conexión a la base de datos
include '../php/conexion/conexion.php'; 

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Recoger los datos del formulario
    $nombre = $_POST['nombre'];
    $apellido = $_POST['apellido'];
    $email = $_POST['email'];
    $telefono = $_POST['telefono'];
    $direccion = $_POST['direccion'];
    $contrasena = password_hash($_POST['contrasena'], PASSWORD_DEFAULT); // Hash de la contraseña

    // Insertar en la base de datos
    $sql = "INSERT INTO Clientes (nombre, apellido, email, contrasena, telefono, direccion) VALUES (?, ?, ?, ?, ?, ?)"; // El orden aquí coincide con la tabla
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("ssssss", $nombre, $apellido, $email, $contrasena, $telefono, $direccion); // El orden de los parámetros debe coincidir con el SQL

    if ($stmt->execute()) {
        echo "Registro exitoso.";
    } else {
        echo "Error: " . $stmt->error;
    }

    $stmt->close();
}


?>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Registro de Cliente</title>
</head>
<body>
    <h2>Registro de Cliente</h2>
    <form method="POST" action="">
        <label for="nombre">Nombre:</label>
        <input type="text" id="nombre" name="nombre" required><br>

        <label for="apellido">Apellido:</label>
        <input type="text" id="apellido" name="apellido" required><br>

        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required><br>

        <label for="telefono">Teléfono:</label>
        <input type="text" id="telefono" name="telefono"><br>

        <label for="direccion">Dirección:</label>
        <input type="text" id="direccion" name="direccion"><br>

        <label for="contrasena">Contraseña:</label>
        <input type="password" id="contrasena" name="contrasena" required><br>

        <button type="submit">Registrar</button>
    </form>
</body>
</html>
