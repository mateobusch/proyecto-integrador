fetch('https://dummyjson.com/products')
.then(function(response) {
  return response.json()
})
.then(function(data) {
  console.log(data);
  let aleatorias = document.querySelector(".Seccion_1")
  let producto_1 = ""
    for (let i = 0; i < 10; i++) {
        console.log(data.products[i]);
        let perfiles = data.products[i]
        producto_1 += `<article class="Article_1">
                    <img class="Imagenes_1" src="${data.products[i].images[0]}" alt="Imagen">
                    <h3 class="Sub-titulo_1">${data.products[i].title}</h3>
                    <p class="Texto_1">${data.products[i].description}</p>
                    <a class="Boton_1" href="./category.html">VER MAS</a>
                </article>`
    }
aleatorias.innerHTML= producto_1
  let mas_vendidas = document.querySelector(".Seccion_2")
  let producto_2 = ""
    for (let i = 10; i < 20; i++) {
        console.log(data.products[i]);
        let perfiles = data.products[i]
        producto_2 += `<article class="Article_1">
                    <img class="Imagenes_1" src="${data.products[i].images[0]}" alt="Imagen">
                    <h3 class="Sub-titulo_1">${data.products[i].title}</h3>
                    <p class="Texto_1">${data.products[i].description}</p>
                    <a class="Boton_1" href="./category.html">VER MAS</a>
                </article>`
    }
mas_vendidas.innerHTML= producto_2
})
.catch(function(error) {
  console.log("Error: " + error);
})
