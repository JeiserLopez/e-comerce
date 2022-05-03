import { productoService } from "../services/producto-service.js";

    let dataElementImg;
    let dataElementDetalle;

    const obtenerInfo = async () =>{
        const url = new URL(window.location);
        const id = url.searchParams.get("id");
    
        if(id == null){
            window.location.href = "error.html";
        }
        
        try{
            //console.log(productoService.detalleProducto(id));
            const detalle = await productoService.detalleProducto(id);
            //console.log("detalle",detalle);
            if (detalle.nombreProducto && detalle.descripcion){
               const div = document.getElementById("div-principal");
               const img = document.createElement("img");
               img.setAttribute("src","../"+detalle.rutaImg);
               img.classList.add("img-detalle");
               div.appendChild(img);

               const nombreProducto = document.createElement("p");
                nombreProducto.innerHTML = detalle.nombreProducto;
                nombreProducto.classList.add("form__label");
                const divDetalle = document.getElementById("prin-detalle");
                divDetalle.classList.add("detalles");

                const descripcionProducto = document.createElement("p");
                descripcionProducto.innerText = detalle.descripcion;
                descripcionProducto.classList.add("text-pro");

                const precioProducto = document.createElement("p");
                precioProducto.innerText = "$"+detalle.precioProducto;
                precioProducto.classList.add("precio-prod");

                divDetalle.appendChild(nombreProducto);
                divDetalle.appendChild(precioProducto);
                divDetalle.appendChild(descripcionProducto);

                div.appendChild(divDetalle);
               console.log(detalle.descripcion);
            }
            else{
                throw new Error();
            }
            
        }catch(error){
            console.log("Catch error", error)
        }
    
    }
    
    obtenerInfo();