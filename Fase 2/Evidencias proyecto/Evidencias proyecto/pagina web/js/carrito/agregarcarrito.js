/* 
--------------------------------------------------------------------------------------------------------------
    -------------------------------------- ITRED ADD TO CART SCRIPT --------------------------------------
    -------------------------------------------------------------------------------------------------------------
    Sitio Web Creado por ITred Spa.
    Dirección: Guido Reni #4190, Pedro Aguirre Cerda - Santiago - Chile
    Contacto: contacto@itred.cl o itred.spa@gmail.com
    Sitio Web: https://www.itred.cl
    Creado, Programado y Diseñado por ITred Spa.
    BPPJ
--------------------------------------------------------------------------------------------------------------
*/

// FUNCIÓN: AGREGARCARRITO

// descripción: función para agregar un producto al carrito de compras.
function agregarcarrito() {

    // **RECOPILACIÓN DE DATOS DEL FORMULARIO**
    
        // crea un objeto FormData para recopilar y enviar los datos del formulario "add-to-cart-form".
        var formData = new FormData(document.getElementById("add-to-cart-form"));
        
    // **SOLICITUD POST PARA AGREGAR AL CARRITO**
    
        // realiza una solicitud a 'agregarcarrito.php' usando fetch para enviar los datos del formulario.
        fetch('../agregarcarrito.php', {
            method: 'POST',        // especifica que el método de la solicitud es POST.
            body: formData         // el cuerpo de la solicitud contiene los datos del formulario.
        })
        .then(response => response.text())   // convierte la respuesta a texto.
        .then(data => {
    
    // **RESPUESTA EXITOSA**
    
            // muestra una alerta al usuario indicando que el producto ha sido agregado al carrito.
            alert("¡Producto agregado al carrito correctamente!");
        })
        .catch(error => {
    
    // **MANEJO DE ERRORES**
    
            // manejo de errores en caso de fallo al agregar el producto al carrito.
            console.error('Error al agregar el producto:', error);
        });
    }
    
    /* 
    --------------------------------------------------------------------------------------------------------------
        ---------------------------------------- FIN ITRED ADD TO CART SCRIPT ----------------------------------------
        -------------------------------------------------------------------------------------------------------------
        Sitio Web Creado por ITred Spa.
        Dirección: Guido Reni #4190, Pedro Aguirre Cerda - Santiago - Chile
        Contacto: contacto@itred.cl o itred.spa@gmail.com
        Sitio Web: https://www.itred.cl
        Creado, Programado y Diseñado por ITred Spa.
        BPPJ
    --------------------------------------------------------------------------------------------------------------
    */
    