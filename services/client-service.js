
const listaClientes = () => {
      return fetch("http://localhost:3000/perfil").then(respuesta =>{
          return respuesta.json();
      });
    };
    
    const crearClientes = (nombre,email,password) =>{
      console.log(nombre,email,password);
      return fetch("http://localhost:3000/perfil", {
        method: "post",
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify({
          nombre,
          email,
          password,
          id: uuid.v4()
        }),
      });
    }
    
    const eliminarCliente = (id) =>
    {
      return fetch(`http://localhost:3000/perfil/${id}`, {
        method: "DELETE"
      });
    };
    
    const detalleCliente = (email,passw) => {
      //return fetch("http://localhost:3000/perfil").then((respuesta) =>
      console.log(`http://localhost:3000/perfil/?email=${email}&password=${passw}`);
      return fetch(`http://localhost:3000/perfil/?email=${email}&password=${passw}`).then((respuesta) =>
      respuesta.json());
    };
    
    const actualizarCliente = (nombre,email,id) =>{
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
    
    export const clientService = {
      listaClientes,
      crearClientes,
      eliminarCliente,
      detalleCliente,
      actualizarCliente,
    }
    