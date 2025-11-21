let queryString = location.search;
let params = new URLSearchParams(queryString);
let termino = params.get("buscar");
let tituloBusqueda = document.querySelector(".Titulo_seccion_tutoriales");
let caja = document.querySelector(".Article_clases_1");
tituloBusqueda.innerText = `Resultados de búsqueda para: "${termino}"`;

fetch(`https://dummyjson.com/products/search?q=${termino}`)
.then(function(respuesta){
    return respuesta.json();
})
.then(function(data){
    if (data.products.length === 0){
        caja.innerHTML =
        `<p class="Texto_1">No hay resultados para: ${termino}</p>`;
    } else {
        let html = "";
        for (let i = 0; i < data.products.length; i++){
            let p = data.products[i];
            html +=
            '<div class="Article_1">' +
                '<img class="Imagenes_1" src="' + p.images[0] + '">' +
                '<h3 class="Sub-titulo_1">' + p.title + '</h3>' +
                '<p class="Texto_1">' + p.description + '</p>' +
                '<a class="Boton_1" href="./product.html?id=' + p.id + '">COMPRAR</a>' +
            '</div>';
        }
        caja.innerHTML = html;
    }
});