<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Menú Principal</title>
    <link rel="stylesheet" href="css/programa.css">
</head>
<body>
    <!-- Incluye el menú de navegación desde un archivo PHP externo -->
    <?php include 'php/programa_index/programa.php'; ?>
    <h1>Menú Principal</h1>
    <button onclick="location.href='./php/registro/registro.php'">Registrarse</button>
    <button onclick="location.href='inicio_sesion.php'">Iniciar Sesión</button>

    <!-- Carga el archivo JavaScript para la funcionalidad del formulario -->
    <script src="js/programa.js"></script>
</body>
</html>
