

//Función para cargar el menú
    function cargarMenu() 
    {
        fetch('/menu.html')
            .then(response => response.text())
            .then(data => {
                // Insertar el contenido del menú en el contenedor
                document.getElementById('menuContainer').innerHTML = data;
            })
            .catch(error => {
                console.error('Error al cargar el menú:', error);
            });
    }

    // Llamar a la función para cargar el menú cuando la página cargue
    window.addEventListener('DOMContentLoaded', cargarMenu);






    
//Función para cargar el footer
function cargarfooter() 
{
    fetch('/footer.html')
        .then(response => response.text())
        .then(data => {
            // Insertar el contenido del menú en el contenedor
            document.getElementById('footerContainer').innerHTML = data;
        })
        .catch(error => {
            console.error('Error al cargar el footer:', error);
        });
}

// Llamar a la función para cargar el menú cuando la página cargue
window.addEventListener('DOMContentLoaded', cargarfooter);







//cargar paginas al momento de hacer click en menu

function cargarPagina(url) {
    fetch(url)
    .then(response => response.text())
    .then(html => {
        document.getElementById('contenido').innerHTML = html;
    })
    .catch(error => console.error('Error al cargar la página:', error));
}

