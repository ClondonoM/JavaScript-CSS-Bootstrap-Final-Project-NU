var peticion = new XMLHttpRequest();
var datos;
var canciones;
var top_top = new Array();
var top_1;
var top_2;
var top_3;

$(document).ready(function () {
	peticion.open("GET", "./datos.json", false);
	peticion.send();
	datos = JSON.parse(peticion.response);
	canciones = datos.canciones;
	top_1 = canciones[0];

	for (var i = 0; i < canciones.length; i++) {
		if (top_1.reproducciones < canciones[i].reproducciones) {
			top_1 = canciones[i];
		}
	}

	top_top.push(top_1);
	canciones.splice(canciones.indexOf(top_1), 1);

	top_2 = canciones[0];

	for (var i = 0; i < canciones.length; i++) {
		if (top_2.reproducciones < canciones[i].reproducciones) {
			top_2 = canciones[i];
		}
	}

	top_top.push(top_2);
	canciones.splice(canciones.indexOf(top_2), 1);

	top_3 = canciones[0];

	for (var i = 0; i < canciones.length; i++) {
		if (top_3.reproducciones < canciones[i].reproducciones) {
			top_3 = canciones[i];
		}
	}

	top_top.push(top_3);
	canciones.splice(canciones.indexOf(top_3), 1);

	document.getElementById("nombre_top_1").innerHTML = top_top[0].nombre;
	document.getElementById("ruta_top_1").innerHTML =
		"<audio src='canciones/" + top_top[0].ruta + "'" + " controls></audio>";

	document.getElementById("nombre_top_2").innerHTML = top_top[1].nombre;
	document.getElementById("ruta_top_2").innerHTML =
		"<audio src='canciones/" + top_top[1].ruta + "'" + " controls></audio>";

	document.getElementById("nombre_top_3").innerHTML = top_top[2].nombre;
	document.getElementById("ruta_top_3").innerHTML =
		"<audio src='canciones/" + top_top[2].ruta + "'" + " controls></audio>";
});
