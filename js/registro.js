function validar(formulario) {
	var re =
		/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	var validacion = false;

	if (!re.test(registro.correo.value)) {
		document.getElementById("errorEmail").innerHTML = "Email invalido";
		validacion = false;
	} else {
		document.getElementById("errorEmail").style.display = "none";
		validacion = true;
	}

	if (registro.contrasena.value.trim().length < 8) {
		document.getElementById("errorContrasena").innerHTML =
			"Contraseña invalida, minimo 8 caracteres";
		validacion = false;
	} else {
		document.getElementById("errorContrasena").style.display = "none";
		validacion = true;
	}

	if (registro.contrasena.value != registro.conf_contrasena.value) {
		document.getElementById("errorConfContrasena").innerHTML =
			"Confirmacion de contraseña no coincide";

		validacion = false;
	} else {
		document.getElementById("errorConfContrasena").style.display = "none";
		validacion = true;
	}

	if (registro.genero_musical.value == "seleccione") {
		document.getElementById("errorGenero").innerHTML =
			"Debes seleccionar un genero";
		validacion = false;
	} else {
		document.getElementById("errorGenero").style.display = "none";
		validacion = true;
	}

	if (!document.querySelector('input[name="edad"]:checked')) {
		document.getElementById("errorEdad").innerHTML =
			"Debes seleccionar un rango de edad";
		validacion = false;
	} else {
		document.getElementById("errorEdad").style.display = "none";
		validacion = true;
	}

	if (!document.querySelector('input[name="condiciones"]:checked')) {
		document.getElementById("errorTerminos").innerHTML =
			"Debes aceptar los terminos y condiciones";
		validacion = false;
	} else {
		document.getElementById("errorTerminos").style.display = "none";
		validacion = true;
	}

	console.log(validacion);
	if (validacion == true) {
		alert("Haz logrado tu registro con exito!");
	}
}
