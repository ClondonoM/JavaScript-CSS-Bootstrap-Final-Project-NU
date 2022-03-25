function validar(formulario) {
	//Expresion regular del correo
	var re =
		/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	var validacion = false;

	if (!re.test(registro.correo.value)) {
		document.getElementById("errorEmail").innerHTML = "invalid email";
		validacion = false;
	} else {
		document.getElementById("errorEmail").style.display = "none";
		validacion = true;
	}

	if (registro.contrasena.value.trim().length < 8) {
		document.getElementById("errorContrasena").innerHTML =
			"invalid password, minimum 8 characters";
		validacion = false;
	} else {
		document.getElementById("errorContrasena").style.display = "none";
		validacion = true;
	}

	if (validacion == true) {
		alert("logged in!");
	}
}
