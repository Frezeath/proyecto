/* 
--------------------------------------------------------------------------------------------------------------
    -------------------------------------- ITRED SPA DESCRIPCION PRODUCTO SCRIPT --------------------------------------
    -------------------------------------------------------------------------------------------------------------
    Sitio Web Creado por ITred Spa.
    Dirección: Guido Reni #4190, Pedro Aguirre Cerda - Santiago - Chile
    Contacto: contacto@itred.cl o itred.spa@gmail.com
    Sitio Web: https://www.itred.cl
    Creado, Programado y Diseñado por ITred Spa.
    BPPJ
--------------------------------------------------------------------------------------------------------------
*/

// TITULO: MOVER CARRUSEL

// Descripción: Función para mover el carrusel de productos en la dirección especificada.
    // Función para cambiar la imagen principal al hacer clic en una miniatura
    document.addEventListener("DOMContentLoaded", function() {
        document.querySelectorAll('.galeria-miniaturas img').forEach(img => {
            img.addEventListener('click', function() {
                document.getElementById("imagen-principal").src = this.src;
            });
        });
    });

    function openTab(event, tabName) {
        // Ocultar todos los contenidos de las pestañas
        var tabContents = document.getElementsByClassName("tab-content");
        for (var i = 0; i < tabContents.length; i++) {
            tabContents[i].style.display = "none";
            tabContents[i].classList.remove("active");
        }
    
        // Remover la clase "active" de todas las pestañas
        var tabs = document.getElementsByClassName("tab");
        for (var i = 0; i < tabs.length; i++) {
            tabs[i].classList.remove("active");
        }
    
        // Mostrar el contenido de la pestaña seleccionada y añadir la clase "active"
        document.getElementById(tabName).style.display = "block";
        document.getElementById(tabName).classList.add("active");
        event.currentTarget.classList.add("active");
    }
        //Funcion para la valoraciones//
        document.addEventListener("DOMContentLoaded", function () {
            // Obtener elementos del formulario
            const form = document.querySelector("#valoraciones");
            const ratingStars = document.querySelectorAll(".stars input");
            const reviewInput = document.querySelector("#review");
            const nameInput = document.querySelector("#name");
            const emailInput = document.querySelector("#email");
            const rememberCheckbox = document.querySelector("#remember");
        
            // Cargar datos guardados en el almacenamiento local si están disponibles
            if (localStorage.getItem("savedName")) {
                nameInput.value = localStorage.getItem("savedName");
            }
            if (localStorage.getItem("savedEmail")) {
                emailInput.value = localStorage.getItem("savedEmail");
            }
        
            // Manejar el envío del formulario
            form.addEventListener("submit", function (event) {
                event.preventDefault(); // Evitar el envío por defecto
        
                // Validación básica
                const selectedRating = Array.from(ratingStars).some(star => star.checked);
                if (!selectedRating) {
                    alert("Por favor, selecciona una puntuación.");
                    return;
                }
                if (reviewInput.value.trim() === "") {
                    alert("Por favor, escribe una valoración.");
                    return;
                }
                if (nameInput.value.trim() === "") {
                    alert("Por favor, ingresa tu nombre.");
                    return;
                }
                if (emailInput.value.trim() === "") {
                    alert("Por favor, ingresa tu correo electrónico.");
                    return;
                }
        
                // Guardar los datos si se selecciona "Guardar"
                if (rememberCheckbox.checked) {
                    localStorage.setItem("savedName", nameInput.value);
                    localStorage.setItem("savedEmail", emailInput.value);
                } else {
                    localStorage.removeItem("savedName");
                    localStorage.removeItem("savedEmail");
                }
        
                // Mostrar un mensaje de confirmación (simulación de envío)
                alert("Gracias por tu valoración!");
                
                // Resetear el formulario después del envío
                form.reset();
            });
        });
        
    

    
    

/* 
--------------------------------------------------------------------------------------------------------------
    ---------------------------------------- FIN ITRED SPA DESCRIPCION PRODUCTO SCRIPT ----------------------------------------
    -------------------------------------------------------------------------------------------------------------
    Sitio Web Creado por ITred Spa.
    Dirección: Guido Reni #4190, Pedro Aguirre Cerda - Santiago - Chile
    Contacto: contacto@itred.cl o itred.spa@gmail.com
    Sitio Web: https://www.itred.cl
    Creado, Programado y Diseñado por ITred Spa.
    BPPJ
--------------------------------------------------------------------------------------------------------------
*/
