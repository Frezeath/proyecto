/* 
Sitio Web Creado por ITred Spa.
Direccion: Guido Reni #4190
Pedro Aguirre  Cerda - Santiago - Chile
contacto@itred.cl o itred.spa@gmail.com
https://www.itred.cl
Creado, Programado y Diseñado por ITred Spa.
BPPJ 
*/



/* --------------------------------------------------------------------------------------------------------------
    -------------------------------------- Inicio ITred Spa datosfacturacion .JS --------------------------------------
    ------------------------------------------------------------------------------------------------------------- */

//  FUNCIÓN: GENERAR NUMERO DE PEDIDO}

    // descripción: función para generar un número aleatorio de pedido y asignarlo a un elemento específico.

    function generarNumeroPedido() {
        // genera un número aleatorio entre 1000 y 9999
        const numeroPedido = Math.floor(Math.random() * 9000) + 1000;
        // asigna el número generado al elemento con id 'numero-pedido'
        document.getElementById('numero-pedido').textContent = numeroPedido;
    }

//  FUNCIÓN: GENERAR FECHA ACTUAL

    // descripción: función para obtener la fecha actual y formatearla.
    function generarFechaActual() {
        // obtiene la fecha actual
        const hoy = new Date();
        // formatea la fecha como día de mes, nombre del mes y año
        const opciones = { year: 'numeric', month: 'long', day: 'numeric' };
        const fechaFormateada = hoy.toLocaleDateString('es-ES', opciones);
        // asigna la fecha al elemento con id 'fecha-pedido'
        document.getElementById('fecha-pedido').textContent = fechaFormateada;
    }

// TITULO: ONLOAD

    // descripción: llama a las funciones generarNumeroPedido y generarFechaActual cuando se cargue la página.
    window.onload = function() {
        generarNumeroPedido();
        generarFechaActual();
    };

/* --------------------------------------------------------------------------------------------------------------
    ---------------------------------------- FIN ITred Spa datosfacturacion .JS ---------------------------------------
    ------------------------------------------------------------------------------------------------------------- */


/*
Sitio Web Creado por ITred Spa.
Direccion: Guido Reni #4190
Pedro Aguirre  Cerda - Santiago - Chile
contacto@itred.cl o itred.spa@gmail.com
https://www.itred.cl
Creado, Programado y Diseñado por ITred Spa.
BPPJ
*/

