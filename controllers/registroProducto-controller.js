import { productoService } from "../services/producto-service.js";

const formulario = document.querySelector("[data-productos]");

formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();
    const categoria = document.querySelector("[data-categoria]").value;
    let rutaImg = document.querySelector("[data-img]").value;
    rutaImg = rutaImg.slice(12);
    rutaImg = "imagenes/" + rutaImg;
    const nombreProducto = document.querySelector("[data-nombreP]").value;
    const precioProducto = document.querySelector("[data-precio]").value;
    const descripcion = document.querySelector("[data-descripcion]").value;
    console.log(categoria,rutaImg,nombreProducto,precioProducto,descripcion);
    productoService.crearProductos(categoria,rutaImg,nombreProducto,precioProducto,descripcion).then(respuesta =>{
        window.location.href = "registroConcluidoProducto.html";
    }).catch (err => console.log(err));
});

