/* 
--------------------------------------------------------------------------------------------------------------
    -------------------------------------- ITRED SPA HEADER SCRIPT --------------------------------------
    -------------------------------------------------------------------------------------------------------------
    Sitio Web Creado por ITred Spa.
    Dirección: Guido Reni #4190, Pedro Aguirre Cerda - Santiago - Chile
    Contacto: contacto@itred.cl o itred.spa@gmail.com
    Sitio Web: https://www.itred.cl
    Creado, Programado y Diseñado por ITred Spa.
    BPPJ
--------------------------------------------------------------------------------------------------------------
*/

// TITULO: CLICK

    // descripción: oculta el menú desplegable si se hace clic fuera de él.
    document.addEventListener('click', function (e) {
        const dropdown = document.querySelector('.dropdown-menu');
        const toggle = document.querySelector('.dropdown-toggle');

        if (!toggle.contains(e.target) && !dropdown.contains(e.target)) {
            dropdown.style.display = 'none'; // oculta el menú si se hace clic afuera
        }
    });

 // EVENTO: MOUSEENTER

    // descripción: muestra el menú desplegable al pasar el mouse sobre el elemento.
    document.querySelector('.dropdown-toggle').addEventListener('mouseenter', function () {
        document.querySelector('.dropdown-menu').style.display = 'block'; // muestra el menú al pasar el mouse
    });

// EVENTO: MOUSELEAVE
    // descripción: oculta el menú desplegable al salir el mouse del elemento.
    document.querySelector('.dropdown-toggle').addEventListener('mouseleave', function () {
        document.querySelector('.dropdown-menu').style.display = 'none'; // oculta el menú al salir el mouse
    });

/* 
--------------------------------------------------------------------------------------------------------------
    ---------------------------------------- FIN ITRED SPA HEADER SCRIPT ----------------------------------------
    -------------------------------------------------------------------------------------------------------------
    Sitio Web Creado por ITred Spa.
    Dirección: Guido Reni #4190, Pedro Aguirre Cerda - Santiago - Chile
    Contacto: contacto@itred.cl o itred.spa@gmail.com
    Sitio Web: https://www.itred.cl
    Creado, Programado y Diseñado por ITred Spa.
    BPPJ
--------------------------------------------------------------------------------------------------------------
*/
