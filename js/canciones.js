var peticion = new XMLHttpRequest();
var datos;
var canciones;
var index_canciones = "";

$(document).ready(function () {
	peticion.open("GET", "./datos.json", false);
	peticion.send();

	datos = JSON.parse(peticion.response);

	canciones = datos.canciones;

	for (var i = 0; i < canciones.length; i++) {
		index_canciones += "<div class='col-sm-4'>";
		index_canciones += "<div class='card' style='width: 18rem;'>";
		index_canciones += "<img src='imagenes/icon_";
		index_canciones += canciones[i].icono;
		index_canciones += ".svg' class='card-img-top'>";
		index_canciones += "<div class='card-body'>";
		index_canciones += "<h5 class='card-title'>";
		index_canciones += canciones[i].nombre;
		index_canciones += "</h5>";
		index_canciones += "<audio src='canciones/";
		index_canciones += canciones[i].ruta;
		index_canciones += "'";
		index_canciones += "controls></audio>";
		index_canciones += "</div>";
		index_canciones += "</div>";
		index_canciones += "</div>";
	}

	document.getElementById("canciones").innerHTML = index_canciones;
});
