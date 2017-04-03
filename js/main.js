var name = document.getElementById('name');
var lastname = document.getElementById('lastname');
var email = document.getElementById('input-email');
var password = document.getElementById('input-password');
var selector = document.getElementById('selector');
var div = document.getElementsByClassName('name-container');

function validateForm(){
	/* Escribe tú código aquí */
//Obteniendo el valor de los elementos del document:
//tooltip
//Declarando expresiones regulares :
  var vUsernames = /^([A-ZÁ-Ú]{1}[a-zá-úA-ZÁ-Ú]+[\s]*)+$/g;
  var vEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

    if(!vUsernames.test(name.value)) { //Validando nombre:
        //alert("ERROR: Ingrese nombre (sólo letras y primera letra mayúscula).");
				var span = document.createElement("span");
				span.appendChild(document.createTextNode("ERROR: Ingrese nombre"));
				span.setAttribute("class","input-box");
				div[0].appendChild(document.createTextNode(span));

    } else if(!/^([A-ZÁ-Ú]{1}[a-zá-úA-ZÁ-Ú]+[\s]*)+$/g.test(lastname)) { //Validando apellido:
        alert("ERROR: Ingrese apellido (sólo letras y primera letra mayúscula).");

    } else if(!vEmail.test(email)) { //Validando email:
        alert("ERROR: Ingrese un email válido.");

    } else if(password == "123456" || password == "098754" || password === "password") { //Validando password:
        alert("ERROR: Su contraseña no es segura, no puede ser 123456, 098754 o password!");

    } else if(password.length < 6) { //Mínimo 6 caracteres
        alert("ERROR: Ingrese contraseña (mínimo 6 caracteres).");

    } else if(selector==0) { //Validando selector de bicis:
        alert("ERROR: No ha seleccionado tipo de bici!");

    }else {
        alert("Sus datos se enviaron con éxito!!"); //Si datos son válidos enviar y refrescar:
        document.getElementById('formulario').reset();
    }

}
