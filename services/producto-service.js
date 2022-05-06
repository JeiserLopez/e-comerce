
const listaProductos = () => {
      return fetch("http://localhost:3000/productos").then(respuesta =>{
      return respuesta.json();
      });
    };

    
    const crearProductos = (categoria,rutaImg,nombreProducto,precioProducto,descripcion) =>{
      console.log(categoria,rutaImg,nombreProducto,precioProducto,descripcion);
     // rutaImg = subirImagen();
      //alert(rutaImg.value);
      return fetch("http://localhost:3000/productos", {
        method: "post",
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify({
          id: uuid.v4(),
          rutaImg,
          nombreProducto,
          precioProducto,
          descripcion,
          categoria
        }),
      });
    }

    const subirImagen = () => {
        let data = new FormData(); 
        let entry = document.getElementById("foto").files[0];
        data.append("file",entry) ;
        alert(data);
        alert('doupload'+ entry.name+data);
        return fetch('../imagenes/uploads/' + encodeURIComponent(entry.name), {method:'POST',body:data});
    }
    
    const eliminarProductos = (id) =>
    {
      return fetch(`http://localhost:3000/productos/${id}`, {
        method: "DELETE"
      });
    };

    const detalleProducto = (id) => {
      console.log(`http://localhost:3000/productos/${id}`);
      return fetch(`http://localhost:3000/productos/${id}`).then((respuesta) =>
       respuesta.json());
    };

    const detalleProductoCategoria = (categoria) => {
      console.log(`http://localhost:3000/productos/?categoria=${categoria}`);
      return fetch(`http://localhost:3000/productos/?categoria=${categoria}`).then((respuesta) =>
       respuesta.json());
    };
    
    
    const actualizarProductos = (nombre,email,id) =>{
      return fetch(`http://localhost:3000/productos/${id}`,{
              method: "PUT",
              headers: {
                "Content-Type": "application/json"
              },
              body:JSON.stringify({
                nombre,
                email
              })
            }).then((respuesta) => respuesta)
               .catch(err => window.location.href = "error.html");
            };
    
    export const productoService = {
      listaProductos,
      crearProductos,
      eliminarProductos,
      detalleProducto,
      actualizarProductos,
      detalleProductoCategoria
    }
    