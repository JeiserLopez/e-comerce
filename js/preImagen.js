function init() {
    var inputFile = document.getElementById('foto');
    inputFile.addEventListener('change', mostrarImagen, false);
  }
  
  function mostrarImagen(event) {
     
    var file = event.target.files[0];
    var reader = new FileReader();
    reader.onload = function(event1) {
      var img = document.getElementById('imagenPrevisualizacion');
      img.style.visibility = "visible";
      img.src= event1.target.result;
    }
    reader.readAsDataURL(file);
  }
  
  window.addEventListener('load', init, false);