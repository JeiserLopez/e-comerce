import { clientService } from "../services/client-service.js";

const formulario = document.querySelector("[data-form]");

formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();
    const nombre = document.querySelector("[data-nombre]").value;
    const email = document.querySelector("[data-email]").value;
    const password = document.querySelector("[data-password]").value;
    console.log(nombre,email,password);
    clientService.crearClientes(nombre,email,password).then(respuesta =>{
        window.location.href = "registroConcluido.html";
    }).catch (err => console.log(err));
});