import { clientService } from "../services/client-service.js";

const formulario = document.querySelector("[data-login]");

const obtenerInfo = async () =>{
    const url = new URL(window.location);
    const email =  url.searchParams.get("email");
    const passw =  url.searchParams.get("password");

    //if(email == null  || passw == null){
      //  window.location.href = "error.html";
   // }

    try{
        const perfil = await clientService.detalleCliente(email,passw);
        if (perfil){
           const nombre = perfil[0].nombre;
           window.location.href = "../index.html";
        }
        else{
            throw new Error();
            window.location.href = "../html/error.html"
        }
        
    }catch(error){
        console.log("Catch error", error)
    }

}

obtenerInfo();