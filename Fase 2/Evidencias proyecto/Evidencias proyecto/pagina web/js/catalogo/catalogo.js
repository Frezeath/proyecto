// Función para cambiar la cantidad en el input
function cambiarCantidad(button, delta) {
    const input = button.parentNode.querySelector('input[name="cantidad"]');
    let cantidad = parseInt(input.value);
    cantidad = isNaN(cantidad) ? 1 : cantidad + delta;
    if (cantidad < 1) cantidad = 1;
    input.value = cantidad;
}

// Función para agregar el producto al carrito
function agregarAlCarrito(event, productoId) {
    event.preventDefault();

    const form = event.target;
    const cantidad = form.querySelector('input[name="cantidad"]').value;

    fetch('../carrito/agregarcarrito.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: `producto_id=${productoId}&cantidad=${cantidad}`
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert('Producto agregado al carrito');
        } else {
            alert(data.message || 'Hubo un problema al agregar el producto');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Hubo un problema con la solicitud');
        
    });
}

function cambiarCantidad(button, delta) {
    const input = button.parentElement.querySelector('input[name="cantidad"]');
    const newValue = parseInt(input.value) + delta;
    if (newValue >= 1) {
        input.value = newValue;
    }
}
// JavaScript para manejar el contador en el botón
function agregarProducto(button) {
    let count = parseInt(button.getAttribute("data-count")) || 0;
    count++;
    button.setAttribute("data-count", count);
    button.textContent = count;
}
