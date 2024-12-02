/* 
--------------------------------------------------------------------------------------------------------------
    -------------------------------------- ITRED SPA CART SCRIPT --------------------------------------
    -------------------------------------------------------------------------------------------------------------
    Sitio Web Creado por ITred Spa.
    Dirección: Guido Reni #4190, Pedro Aguirre Cerda - Santiago - Chile
    Contacto: contacto@itred.cl o itred.spa@gmail.com
    Sitio Web: https://www.itred.cl
    Creado, Programado y Diseñado por ITred Spa.
    BPPJ
--------------------------------------------------------------------------------------------------------------
*/
// TITULO: PROCESAR VENTA

    // Obtener los valores de los campos del formulario
    function procesarVenta() {
        var nombre = document.getElementById('billingName').value;
        var apellido = document.getElementById('apellido').value;
        var comuna = document.getElementById('billingCommune').value;
        var direccion = document.getElementById('billingAddress').value;
        var telefono = document.getElementById('billingPhone').value;
        var email = document.getElementById('billingEmail').value;
        var paymentMethod = document.getElementById('paymentMethod').value;

        // Validar que todos los campos obligatorios estén llenos
        if (!nombre || !apellido || !comuna || !direccion || !telefono || !email) {
            alert("Por favor, completa todos los campos obligatorios.");
            return; // Evitar el envío del formulario
        }

        // Si el método de pago es transferencia bancaria, redirigir a la página de transferencia
        if (paymentMethod === 'bank_transfer') {
            // Cambiar la acción del formulario para redirigir a transferencia bancaria
            document.getElementById('billingForm').action = '../facturacion/datosfacturacion.php'; // Ajusta esta URL según sea necesario
            document.getElementById('billingForm').submit(); // Envía el formulario
        } else {
            // Si el método de pago es Flow, redirigir a la página de Flow
            document.getElementById('billingForm').action = '../flow/examples/payments/create.php';
            document.getElementById('billingForm').submit(); // Envía el formulario
        }
        }

/*--------------------------------------------------------------------------------------------------------------
    ---------------------------------------- FIN ITRED SPA CART SCRIPT ----------------------------------------
    -------------------------------------------------------------------------------------------------------------
    Sitio Web Creado por ITred Spa
    Dirección: Guido Reni #4190, Pedro Aguirre Cerda - Santiago - Chile
    Contacto: contacto@itred.cl o itred.spa@gmail.com
    Sitio Web: https://www.itred.cl
    Creado, Programado y Diseñado por ITred Spa.
    BPPJ
/*--------------------------------------------------------------------------------------------------------------*/
