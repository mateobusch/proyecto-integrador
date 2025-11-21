let queryString = location.search;
let queryObj = new URLSearchParams(queryString);
let categoriaId = queryObj.get("id");


if (categoriaId == null) {
    categoriaId = "mens-shirts";
}

let contenedor = document.querySelector(".Seccion_1_category");


contenedor.innerHTML = "";

let url = "https://dummyjson.com/products/category/" + categoriaId;

fetch(url)
.then(function(response) {
    return response.json();
})
.then(function(data) {

    let productos = data.products;
    let html = "";

    for (let i = 0; i < productos.length; i++) {

        let producto = productos[i];

        html +=
        '<article class="Article_1">' +
            '<img class="Imagenes_1" src="' + producto.thumbnail + '" alt="Imagen">' +
            '<h3 class="Sub-titulo_1">' + producto.title + '</h3>' +
            '<p class="Texto_1">' + producto.description + '</p>' +
            '<h4 class="Precio">€' + producto.price + '</h4>' +
            '<a class="Boton_1" href="./product.html?id=' + producto.id + '">COMPRAR</a>' +
        '</article>';
    }

    contenedor.innerHTML = html;
    contenedor.style.height="auto"
})
.catch(function(error){
    console.log("Error cargando productos", error);
    contenedor.innerHTML = "<p>Error al cargar la categoría.</p>";
});
