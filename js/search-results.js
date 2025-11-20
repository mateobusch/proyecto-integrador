
let queryString = location.search;
let queryParams = new URLSearchParams(queryString);
let termino = queryParams.get("buscar");
console.log("Término buscado:", termino);


let tituloBusqueda = document.querySelector(".Titulo_seccion_tutoriales");
let resultadosCont = document.querySelector(".Article_clases_1");


if (resultadosCont == null) {
  let primeraCard = document.querySelector(".Article_1");
  if (primeraCard != null) {
    resultadosCont = primeraCard.parentElement;
  }
}

console.log("Contenedor resultados FINAL:", resultadosCont);


if (tituloBusqueda != null) {
  tituloBusqueda.innerText =
    'Resultados de búsqueda para: "' + termino + '"';
}

if (resultadosCont == null) {
  console.log("No se encontró contenedor para los resultados");
} else {
  
  resultadosCont.innerHTML =
    "<p class='Texto_1'>Cargando resultados...</p>";
}


fetch("https://dummyjson.com/products/search?q=" + termino)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log("Respuesta de la API:", data);

    if (resultadosCont == null) {
      return; 
    }

    let html = "";

    
    if (data.products.length == 0) {
      html =
        '<p class="Texto_1">No hay resultados para el término: "' +
        termino +
        '"</p>';
    } else {
      
      for (let i = 0; i < data.products.length; i++) {
        let producto = data.products[i];

        html +=
          '<div class="Article_1">' +
          '<img class="Imagenes_1" src="' +
          producto.images[0] +
          '" alt="Imagen">' +
          '<h3 class="Sub-titulo_1">' +
          producto.title +
          "</h3>" +
          '<p class="Texto_1">' +
          producto.description +
          "</p>" +
          '<a class="Boton_1" href="./product.html?id=' +
          producto.id +
          '">COMPRAR</a>' +
          "</div>";
      }
    }

   
    resultadosCont.innerHTML = html;
  })
  .catch(function (error) {
    console.log("Error en fetch:", error);
  });
