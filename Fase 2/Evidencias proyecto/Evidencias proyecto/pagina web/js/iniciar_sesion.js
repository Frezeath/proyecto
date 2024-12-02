document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevenir que el formulario se envíe de manera normal

    const username = document.getElementById('usuario_cliente').value;
    const password = document.getElementById('contrasena_cliente').value;

    const loginData = {
        username: username,
        password: password
    };

    fetch('login.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(loginData)
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            window.location.href = 'dashboard.php'; 
        } else {
            document.getElementById('error-message').textContent = data.error;
        }
    })
    .catch(error => console.error('Error:', error));
});
