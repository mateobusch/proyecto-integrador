fetch('https://dummyjson.com/products')
.then(function(response) {
  return response.json()
})
.then(function(data) {
  console.log(data);
  let category = document.querySelector(".Seccion_1_category")
  let producto_3 = ""
    for (let i = 0; i < 6; i++) {
        console.log(data.products[i]);
        let perfiles = data.products[i]
        producto_3 += `<article class="Article_1">
                    <img class="Imagenes_1" src="${data.products[i].images[0]}" alt="Imagen">
                    <h3 class="Sub-titulo_1">${data.products[i].title}</h3>
                    <p class="Texto_1">${data.products[i].description}</p>
                    <a class="Boton_1" href="./product.html">VER MAS</a>
                </article>`
    }
category.innerHTML= producto_3
})