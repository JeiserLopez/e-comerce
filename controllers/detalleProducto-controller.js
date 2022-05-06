import { productoService } from "../services/producto-service.js";

    let dataElementImg;
    let dataElementDetalle;

const crearNuevaProducto = (categoria,rutaImg, nombreProducto,precioProducto,descripcion,id) => { 
    //console.log(categoria);
    const linea = document.createElement("img");
    linea.setAttribute("src", rutaImg);
    linea.classList.add("img-list");
    if(sessionStorage.getItem("nombreUsuario") != null){
          const btnEliminar = document.createElement("button");
        btnEliminar.setAttribute("id", id);
        btnEliminar.innerText = "Eliminar";
        btnEliminar.classList.add("simple-button-crud","simple-button--delete");

        const btnEditar = document.createElement("a");
        btnEditar.setAttribute("href",`../html/editar_producto.html?id=${id}`);
        btnEditar.innerText = "Editar";
        btnEditar.classList.add("simple-button-crud","simple-button--edit");


        const divImgBtn = document.createElement("div");
        divImgBtn.appendChild(linea);
        divImgBtn.appendChild(btnEliminar);
        divImgBtn.appendChild(btnEditar);

        const btn = divImgBtn.querySelector("button");
        console.log(btn);
        btn.addEventListener("click", () => {
          const idbtn = btn.id;
          alert(idbtn);
          productoService.eliminarProductos(idbtn).then(respuesta =>{
            window.location.href = "../html/eliminacionConcluida.html";
        }).catch (err => window.location.href = "../html/error.html");

        });
        return divImgBtn;
    }
    else{
      return linea;
    }
    

  };
  
productoService.listaProductos()
  .then((data) => {
    data.forEach(({categoria,rutaImg,nombreProducto,precioProducto,descripcion,id}) => {
      const nuevaLinea = crearNuevaProducto(categoria,rutaImg,nombreProducto,precioProducto,descripcion,id);
      //divPadre.appendChild(nuevaLinea);
      console.log(sessionStorage.getItem("nombreUsuario"));
      if (categoria == "StarWars"){
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
        link.setAttribute("href",`html/verDetalleProducto.html?id=${id}&categoria=${categoria}`);
        link.setAttribute("id",id);
        link.innerHTML = "Ver Producto "
        link.classList.add("link-prod");

        divDetalle.appendChild(parrafo);
        divDetalle.appendChild(precio);
        divDetalle.appendChild(link);

        divpadre1.appendChild(divDetalle);

        divpadre.appendChild(nuevaLinea);
      }

      if (categoria == "Consolas"){
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
        link.setAttribute("href",`html/verDetalleProducto.html?id=${id}&categoria=${categoria}`);
        link.setAttribute("id",id);
        link.innerHTML = "Ver Producto "
        link.classList.add("link-prod");

        divDetalle.appendChild(parrafo);
        divDetalle.appendChild(precio);
        divDetalle.appendChild(link);

        divpadre1.appendChild(divDetalle);

        divpadre.appendChild(nuevaLinea);
      }

      if (categoria == "Diversos"){
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
        link.setAttribute("href",`html/verDetalleProducto.html?id=${id}&categoria=${categoria}`);
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