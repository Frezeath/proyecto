<?php
session_start();
$mysqli = new mysqli('localhost', 'root', '', 'sistema_ventas');

if ($mysqli->connect_error) {
    die("Connection failed: " . $mysqli->connect_error);
}
?>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Menú Principal</title>
    <link rel="stylesheet" href="css/index.css">
</head>
<body>

<!-- Contenedor principal -->
<div class="contenedor">
    <h1>
        BIENVENIDOS
            A 
        ALMACENES FREBOR
    </h1>

    <?php
    if (isset($_SESSION['usuario_id'])) {
        echo "<p>Bienvenido, " . htmlspecialchars($_SESSION['usuario_nombre']) . "!</p>";
        echo "<div class='menu-buttons'>";
        echo "<a href='php/catalogo.php' class='btn'>Catálogo</a>";
        echo "<a href='php/carrito.php' class='btn'>Ver Carrito</a>";
        echo "<a href='php/Google-Maps-API-master/index.html' class='btn'>donde estamos</a>";
        echo "<a href='php/logout.php' class='btn'>Cerrar Sesión</a>";
        echo "</div>";
    } else {
        echo "<div class='menu-buttons'>";
        echo "<a href='php/catalogo.php' class='btn'>Catálogo</a>";
        echo "<a href='php/iniciar_sesion.php' class='btn'>Iniciar sesión</a>";
        echo "<a href='php/registrer.php' class='btn'>Crear cuenta</a>";
        echo "<a href='php/Google-Maps-API-master/index.html' class='btn'>donde estamos</a>";
        echo "</div>";
    }
    
    ?>

</div>

</body>
</html>

<?php
$mysqli->close();
?>