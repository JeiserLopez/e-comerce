
const listaProductos = () => {
      return fetch("http://localhost:3000/perfil").then(respuesta =>{
          return respuesta.json();
      });
    };
    
    const crearProductos = (rutaImg,nombreProducto,precio,descripcion) =>{
      console.log(rutaImg,nombreProducto,precio,descripcion);
      return fetch("http://localhost:3000/productos", {
        method: "post",
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify({
          id: uuid.v4(),
          rutaImg,
          nombreProducto,
          precio,
          descripcion
        }),
      });
    }
    
    const eliminarProductos = (id) =>
    {
      return fetch(`http://localhost:3000/perfil/${id}`, {
        method: "DELETE"
      });
    };
    
    const detalleProductos = (email,passw) => {
      //return fetch("http://localhost:3000/perfil").then((respuesta) =>
      console.log(`http://localhost:3000/perfil/?email=${email}&password=${passw}`);
      return fetch(`http://localhost:3000/perfil/?email=${email}&password=${passw}`).then((respuesta) =>
      respuesta.json());
    };
    
    const actualizarProductos = (nombre,email,id) =>{
      return fetch(`http://localhost:3000/perfil/${id}`,{
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
      detalleProductos,
      actualizarProductos,
    }
    