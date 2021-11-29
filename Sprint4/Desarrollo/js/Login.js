


//Function para validar espacion en blanco en login
function ValidarLogin(){
    var correo= document.getElementById("mail").value;
    var contrasena=document.getElementById("password").value;

    if((correo==="")||(contrasena==="")){
        alert("Debe ingresar su correo y contraseña para poder iniciar sesion");

    }
    else{
        alert("Bienvenido");
    }
    
    


    

   
}