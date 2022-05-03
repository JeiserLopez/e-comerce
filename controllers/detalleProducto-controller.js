import { productoService } from "../services/producto-service.js";

    let dataElementImg;
    let dataElementDetalle;

const crearNuevaProducto = (categoria,rutaImg, nombreProducto,precioProducto,descripcion,id) => { 
    //console.log(categoria);
    const linea = document.createElement("img");
    linea.setAttribute("src", rutaImg);
    linea.classList.add("img-list");
   // console.log(linea);
    //console.log(dataElementImg);
    //console.log(divpadre);
    //console.log(document.querySelector("["+dataElementImg+"]"));
   // divPadre.appendChild(linea);
 
   /* linea.innerHTML = contenido;
   // const btn = linea.querySelector("button");
    //btn.addEventListener("click", () => {
      const idbtn = btn.id;
      clientService.eliminarCliente(idbtn).then(respuesta =>{
        window.location.href = "eliminacion_concluida.html";
    }).catch (err => window.location.href = "error.html");

    });*/
    //console.log(divpadre);
    return linea;
  };
  
productoService.listaProductos()
  .then((data) => {
    data.forEach(({categoria,rutaImg,nombreProducto,precioProducto,descripcion,id}) => {
      const nuevaLinea = crearNuevaProducto(categoria,rutaImg,nombreProducto,precioProducto,descripcion);
      //divPadre.appendChild(nuevaLinea);
      console.log(id);
      if (categoria == "starwars"){
        dataElementImg = "data-star"
        dataElementDetalle = "data-detalleStar";
        const divpadre = document.querySelector("["+dataElementImg+"]");

        const divpadre1 = document.querySelector("["+dataElementDetalle+"]");
       
        const divDetalle = document.createElement("div");
        divDetalle.classList.add("text-detalle");

        const parrafo = document.createElement("p");
        parrafo.classList.add("text-pro");
        parrafo.textContent = nombreProducto;
    
        const precio = document.createElement("p");
        precio.classList.add("precio-prod");
        precio.textContent = precioProducto;
        
        const link = document.createElement("a");
        link.setAttribute("href",`/html/verDetalleProducto.html?id=${id}&categoria=${categoria}`);
        link.setAttribute("id",id);
        link.innerHTML = "Ver Producto "
        link.classList.add("link-prod");

        divDetalle.appendChild(parrafo);
        divDetalle.appendChild(precio);
        divDetalle.appendChild(link);

        divpadre1.appendChild(divDetalle);

        divpadre.appendChild(nuevaLinea);
      }

      if (categoria == "consolas"){
        dataElementImg = "data-consola"
        dataElementDetalle = "data-detalleConsola";
        const divpadre = document.querySelector("["+dataElementImg+"]");
        console.log(divpadre);
        const divpadre1 = document.querySelector("["+dataElementDetalle+"]");
       
        const divDetalle = document.createElement("div");
        divDetalle.classList.add("text-detalle");

        const parrafo = document.createElement("p");
        parrafo.classList.add("text-pro");
        parrafo.textContent = nombreProducto;
    
        const precio = document.createElement("p");
        precio.classList.add("precio-prod");
        precio.textContent = precioProducto;
        
        const link = document.createElement("a");
        link.setAttribute("href",`/html/verDetalleProducto.html?id=${id}&categoria=${categoria}`);
        link.setAttribute("id",id);
        link.innerHTML = "Ver Producto "
        link.classList.add("link-prod");

        divDetalle.appendChild(parrafo);
        divDetalle.appendChild(precio);
        divDetalle.appendChild(link);

        divpadre1.appendChild(divDetalle);

        divpadre.appendChild(nuevaLinea);
      }

      if (categoria == "diversos"){
        dataElementImg = "data-diversos"
        dataElementDetalle = "data-detallediversos";
        const divpadre = document.querySelector("["+dataElementImg+"]");

        const divpadre1 = document.querySelector("["+dataElementDetalle+"]");
       
        const divDetalle = document.createElement("div");
        divDetalle.classList.add("text-detalle");

        const parrafo = document.createElement("p");
        parrafo.classList.add("text-pro");
        parrafo.textContent = nombreProducto;
    
        const precio = document.createElement("p");
        precio.classList.add("precio-prod");
        precio.textContent = precioProducto;
        
        const link = document.createElement("a");
        link.setAttribute("href",`/html/verDetalleProducto.html?id=${id}&categoria=${categoria}`);
        link.setAttribute("id",id);
        link.innerHTML = "Ver Producto "
        link.classList.add("link-prod");

        divDetalle.appendChild(parrafo);
        divDetalle.appendChild(precio);
        divDetalle.appendChild(link);

        divpadre1.appendChild(divDetalle);

        divpadre.appendChild(nuevaLinea);
      }
     
    });
  })
  .catch((error) => alert("Ocurrió un error"));