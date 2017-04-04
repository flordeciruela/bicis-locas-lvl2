//Obteniendo el valor de los elementos del document:
var name = document.getElementById('name');
var lastname = document.getElementById('lastname');
var email = document.getElementById('input-email');
var password = document.getElementById('input-password');
var selector = document.getElementById("select");
var div = document.getElementsByClassName('input-box');
var spans = document.getElementsByTagName('span');

function validateForm(){
//tooltip
	var vUsernames = /^([A-ZÁ-Ú]{1}[a-zá-úA-ZÁ-Ú]+[\s]*)+$/g;
	var vEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

    if(!vUsernames.test(name.value)) { //Validando nombre:
			var spanName = document.createElement("span");
			spanName.innerHTML= "Ingrese nombre (sólo letras y primera letra mayúscula)";
			div[0].appendChild(spanName);
  	}

		if(!vUsernames.test(lastname.value)) { //Validando apellido:
			var spanLName = document.createElement("span");
			spanLName.innerHTML= "Ingrese apellido (sólo letras y primera letra mayúscula)";
			div[1].appendChild(spanLName);
		}

		if(!vEmail.test(email)) { //Validando email:
			var spanEmail = document.createElement("span");
			spanEmail.innerHTML= "Ingrese un email válido";
			div[2].appendChild(spanEmail);
		}

		if(password.value == "123456" || password.value == "098754" || password.value === "password" ||password.value.length < 6 || password.value.length > 10) {
			var spanPass = document.createElement("span");
			spanPass.innerHTML= "Ingresar contraseña entre 6 a 10 caracteres (no puede ser 123456, 098754 o password)";
			div[3].appendChild(spanPass);
    }

		if(selector.value=="0") { //Validando selector de bicis:
			var spanSelect = document.createElement("span");
			spanSelect.innerHTML= "Seleccionar tipo de bici";
			div[4].appendChild(spanSelect);
    }

		//document.getElementById("form").reset();

}
