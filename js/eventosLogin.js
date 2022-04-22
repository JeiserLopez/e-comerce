const input = document.querySelector("#emailLogin");
    input.addEventListener("click", () => {
        console.log("prueba");
        input.classList.add("escribiendo");
    });

    input.addEventListener("blur", () => {
        if (input.value == ""){
            console.log("vacio");
            input.classList.add("vacio"); 
        }
        else{
            console.log("lleno");
            input.classList.add("lleno"); 
        }
    });

    const input1 = document.querySelector("#passLogin");
    input1.addEventListener("click", () => {
        console.log("prueba");
        input1.classList.add("escribiendo");
    });

    input1.addEventListener("blur", () => {
        if (input1.value == ""){
            console.log("vacio");
            input1.classList.add("vacio"); 
        }
        else{
            console.log("lleno");
            input1.classList.add("lleno"); 
        }
    });

