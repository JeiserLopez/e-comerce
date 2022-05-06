import { productoService } from "../services/producto-service.js";

    let dataElementImg;
    let dataElementDetalle;

    const obtenerInfo = async () =>{
        const url = new URL(window.location);
        const id = url.searchParams.get("id");
        const categoria = url.searchParams.get("categoria");

        if(id == null){
            window.location.href = "error.html";
        }
        
        try{
            //console.log(productoService.detalleProducto(id));
            const detalle = await productoService.detalleProducto(id);
            const categoriaB = await productoService.detalleProductoCategoria(categoria);
            console.log("detalle",categoriaB);
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
                descripcionProducto.classList.add("text-pro1");

                const precioProducto = document.createElement("p");
                precioProducto.innerText = "$"+detalle.precioProducto;
                precioProducto.classList.add("precio-prod");

                divDetalle.appendChild(nombreProducto);
                divDetalle.appendChild(precioProducto);
                divDetalle.appendChild(descripcionProducto);

                div.appendChild(divDetalle);
                console.log(categoriaB);

                const divCategoria = document.querySelector("[data-categoria]");
                const detalleCategoria = document.createElement("p")
                detalleCategoria.classList.add("productos-title");
                detalleCategoria.innerText = categoriaB[0].categoria;
                divCategoria.appendChild(detalleCategoria);

                categoriaB.forEach(detalles => {

                    const divpadre = document.querySelector("[data-producto]");
                    console.log(divpadre);

                    const imagen = document.createElement("img");
                    imagen.classList.add("img-list");
                    imagen.setAttribute("src", "../"+detalles.rutaImg);
                                    
                    const divDetalles = document.createElement("div");
                    divDetalles.classList.add("text-detalle");

                    const parrafo = document.createElement("p");
                    parrafo.classList.add("text-pro");
                    parrafo.textContent = detalles.nombreProducto;
                
                    const precio = document.createElement("p");
                    precio.classList.add("precio-prod");
                    precio.textContent = "$ " + detalles.precioProducto;
                    
                    const link = document.createElement("a");
                    link.setAttribute("href",`verDetalleProducto.html?id=${detalles.id}&categoria=${detalles.categoria}`);
                    link.setAttribute("id",detalles.id);
                    link.innerHTML = "Ver Producto "
                    link.classList.add("link-prod");

                    divDetalles.appendChild(imagen);
                    divDetalles.appendChild(parrafo);
                    divDetalles.appendChild(precio);
                    divDetalles.appendChild(link);

                    divpadre.appendChild(divDetalles);
               });
               

            }
            else{
                throw new Error();
            }
            
        }catch(error){
            console.log("Catch error", error)
        }
    
    }
    
    obtenerInfo();