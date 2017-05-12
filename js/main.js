// Impresion
function mostrarData(){
    var entrada = "<br>Nombre: " + document.getElementById("n").value + "<br>" + "Apellido: " + document.getElementById("a").value + "<br>" + "Correo: " + document.getElementById("e").value + "<br>" + "Dirección: " + document.getElementById("d").value + "<br>" + "Teléfono:"+ document.getElementById("f").value;
    var agregar = document.getElementsByClassName("añadirDato");

    var elec = "<br> Escogiste: " + document.getElementsByClassName("sel").value;
    var agregar2 = document.getElementsByClassName("añadirDato");
    agregar2[0].innerHTML += elec;

    if(document.getElementById("n").value == ""){
    	alert("No puedes dejar el campo vacio!");
    }else if(document.getElementById("a").value == ""){
    	alert("No puedes dejar el campo vacio!");
    }else if(document.getElementById("e").value == ""){
    	alert("No puedes dejar el campo vacio!");
    }else if(document.getElementById("d").value == ""){
    	alert("No puedes dejar el campo vacio!");
    }else if(document.getElementById("f").value == ""){
    	alert("No puedes dejar el campo vacio!");
    }else {
    	agregar[0].innerHTML += entrada;
    }
}
