let quearyString = location.search;
let quearyStringObj = new URLSearchParams(quearyString);

let resultado = quearyStringObj.get("buscar")
console.log(resultado)
fetch(`https://dummyjson.com/products/search?q=${resultado}`)
.then(function(response) {
  return response.json()
})
.then(function(data) {
  console.log(data);
  let tituloBusqueda = document.querySelector(".Titulo_seccion_tutoriales")
  tituloBusqueda.innerText = `Resultado Busqueda: "${resultado}"`
  let secundaria = document.querySelector(".Seccion_secundaria")
  if (data.products.length == 0){
    tituloBusqueda.innerText = `No se han encontrado resultados.`
  }
  else{
    let producto = ""
    for (let i = 0; i < 10; i++) {
        console.log(data.products[i]);
        let perfiles = data.products[i]
        producto += `<article class="Article_1">
                    <img class="Imagenes_1" src="${data.products[i].images[0]}" alt="Imagen">
                    <h3 class="Sub-titulo_1">${data.products[i].title}</h3>
                    <p class="Texto_1">${data.products[i].description}</p>
                    <a class="Boton_1" href="./category.html">VER MAS</a>
                </article>`
    }
aleatorias.innerHTML= producto
  }
})
.catch(function(error) {
  console.log("Error: " + error);
})
