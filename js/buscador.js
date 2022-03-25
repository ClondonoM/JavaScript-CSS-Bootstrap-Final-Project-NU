const buscador = document.querySelector("#buscador");
const resultado = document.querySelector("#canciones");

var canciones = [
	{
		nombre: "vive",
		ruta: "uno.mp3",
		reproducciones: 10,
		icono: 4,
	},
	{
		nombre: "invierno",
		ruta: "dos.mp3",
		reproducciones: 30,
		icono: 1,
	},
	{
		nombre: "planeta",
		ruta: "tres.mp3",
		reproducciones: 20,
		icono: 3,
	},
	{
		nombre: "suave",
		ruta: "cuatro.mp3",
		reproducciones: 80,
		icono: 2,
	},
	{
		nombre: "contigo",
		ruta: "cinco.mp3",
		reproducciones: 50,
		icono: 4,
	},
	{
		nombre: "alas",
		ruta: "seis.mp3",
		reproducciones: 70,
		icono: 1,
	},
	{
		nombre: "verde",
		ruta: "siete.mp3",
		reproducciones: 60,
		icono: 3,
	},
	{
		nombre: "nuevamente",
		ruta: "ocho.mp3",
		reproducciones: 90,
		icono: 1,
	},
	{
		nombre: "hoy",
		ruta: "nueve.mp3",
		reproducciones: 40,
		icono: 2,
	},
];

const filtrar = () => {
	resultado.innerHTML = "";
	const texto = buscador.value.toLowerCase();
	let index_texto = "";

	for (let cancion of canciones) {
		let nombre = cancion.nombre.toLowerCase();
		if (nombre.indexOf(texto) !== -1) {
			index_texto += "<div class='col-sm-4'>";
			index_texto += "<div class='card' style='width: 18rem;'>";
			index_texto += "<img src='imagenes/icon_";
			index_texto += cancion.icono;
			index_texto += ".svg' class='card-img-top'>";
			index_texto += "<div class='card-body'>";
			index_texto += "<h5 class='card-title'>";
			index_texto += cancion.nombre;
			index_texto += "</h5>";
			index_texto += "<audio src='canciones/";
			index_texto += cancion.ruta;
			index_texto += "'";
			index_texto += "controls></audio>";
			index_texto += "</div>";
			index_texto += "</div>";
			index_texto += "</div>";

			console.log(index_texto);
		}
	}

	resultado.innerHTML += index_texto;

	if (index_texto === "") {
		resultado.innerHTML +=
			"<p><strong>cancion no encontrada...</strong> </p>";
	}
};

buscador.addEventListener("keyup", filtrar);
