let queryString = location.search;
let params = new URLSearchParams(queryString);
let idProducto = params.get("id");
fetch(`https://dummyjson.com/products/${idProducto}`)
.then(function(response) {
  return response.json()
})
.then(function(data) {
  console.log(data);
  let tituloImg = document.querySelector(".Seccion_1_product");
  let descripcion = document.querySelector(".Seccion_2_product");
  let info = document.querySelector(".Seccion_3_product");
  let reviews = document.querySelector(".Seccion_4_product")
  tituloImg.innerHTML=`<article>
                    <h1 class="Titulo_category">${data.title}</h1>
                    <img class="Imagen_product" src="${data.images[0]}" alt="Imagen">
                </article>`
  descripcion.innerHTML=`<div class="Info_producto">
                        <p class="Informacion_camiseta">${data.description}, </p>
                    </div>`
  let producto_5 = ""
    for (let i = 0; i < data.reviews.length; i++) {
        producto_5 += `<article class="Article_1">
                    
                        <p>Rating: ${data.reviews[i].rating}</p>
                        <p>Comment: ${data.reviews[i].comment}</p>
                        <p>Date: ${data.reviews[i].date}</p>
                        <p>Username: ${data.reviews[i].reviewerName}</p>
                    
                </article>`}    
  reviews.innerHTML=producto_5
                    
 
  info.innerHTML=`<div class ="Precio_producto">
                        <h2 class="Precio_barcelona">€${data.price}</h2>
                    </div>
                    <article class="Conjunto_de_botones">
                        <div class="Boton_producto">
                            <a class="Boton_3" href="#">COMPRAR</a>
                        </div>
                        <div class="Boton_producto">
                            <a class="Boton_3" href="./category.html?id=${data.category}">${data.category}</a>
                        </div>
                        <p class="Precio_barcelona">Queda ${data.stock} unidades en stock</p>
                        <p class="Informacion_camiseta">Lista de Tags</p>
                            <li class="Informacion_camiseta">${data.tags[0]}</li>
                            <li class="Informacion_camiseta">${data.tags[1]}</li>`
})
