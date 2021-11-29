
function ValidaRegistro(){
    alert("Debe inghresar los datos completos para poder registrarse");
    var nombre = document.getElementById("nombre").Value;
    var apellido = document.getElementById("apellido").Value;
    var identificacion = document.getElementById("identificacion").Value;
    var telefono = document.getElementById("telefono").Value;
    var contrasena = document.getElementById("contrasena").Value;
    var confirmacontra = document.getElementById("confirmacontra").Value;
    var mail = document.getElementById("mail").Value;
    var fecha = document.getElementById("fecha").Value;
    var sexo = document.getElementById("sexo").Value;

    if(nombre===""){
        alert("Debe ingresar su nombre");
    }
    else if(apellido===""){
        alert("Debe ingresar su apellido");
    }
    else if(identificacion===""){
        alert("Debe ingresar su identificacion");
    }
    else if(telefono===""){
        alert("Debe ingresar su telefono");
    }
    else if(contrasena===""){
        alert("Debe ingresar su contrasena");
    }
    else if(confirmacontra===""){
        alert("Debe confirmar su contraseña");
    }
    else if(mail===""){
        alert("Debe ingresar su correo electronico");
    }
    else if(fecha===""){
        alert("Debe ingresar su fecha de nacimiento");
    }
    else if(sexo===""){
        alert("Debe ingresar su sexo");
    }
    else{
        alert("Bienvenido");
    }




    
   
    

}