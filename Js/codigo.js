


//cargar paginas al momento de hacer click en menu

function cargarPagina(url) {
    fetch(url)
    .then(response => response.text())
    .then(html => {document.getElementById('contenido').innerHTML = html;})
    .catch(error => console.error('Error al cargar la página:', error));
}

