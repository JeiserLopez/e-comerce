import { valida } from "./validaciones.js";

const inputs = document.querySelectorAll("input");

inputs.forEach((input) => {
  input.addEventListener("blur", (input) => {
    valida(input.target);
  });
});

var data;
 
$(document).ready(function() {
	$.ajax({
		url: "../db.json",
		data: "nocache=" + Math.random(),
		type: "GET",
		dataType: "json",
		success: function(source){
			data = source;
			//mostrarJSON();
		},
		error: function(data){
			alert("ERROR");
		}
	});							
});
