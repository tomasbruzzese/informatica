//Datos
const nombre = "mary";
const clave = "1234";
//Capturamos la información del DOM
let nomIng = document.getElementById("usuario");
let claveIng = document.getElementById("contraseña");
let boton = document.getElementById("btn-ingresar");
//Escuchamos el evento
boton.addEventListener ("click",function(){
    alert(nomIng.value);
});