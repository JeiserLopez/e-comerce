import { productoService } from "../services/producto-service.js";

const formulario = document.querySelector("[data-productos]");

formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();
    const rutaImg = document.querySelector("[data-img]").value;
    const nombreProducto = document.querySelector("[data-nombreP]").value;
    const precio = document.querySelector("[data-precio]").value;
    const descripcion = document.querySelector("[data-descripcion]").value;
    console.log(rutaImg,nombreProducto,precio,descripcion);
    productoService.crearProductos(rutaImg,nombreProducto,precio,descripcion).then(respuesta =>{
        window.location.href = "registroConcluidoProducto.html";
    }).catch (err => console.log(err));
});