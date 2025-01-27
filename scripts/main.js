

/* VARIABLES
1) forma de declararlo
2) nombre con el cual acceder
3) ponerle algun valor
*/

// 1)primera forma que NOO se permite por su flexibilidad
/*
var nickname; = "luli";
console.log(nickname) 
-> var es muy flexible y hace que pueda provocar errores*/

// 2) segunda forma que seria la que vamos a usar casi siempre 
/*
let nickname = "luli";
console.log(nickname);
nicknameD= 2024;
console.log(nicknameD);
nicknameT= true;
console.log(nicknameT);
*/

/*
const year = 2024;
console.log (year)
-> const siosi debe de tener un valor directamente cuando lo pones, ese valor no cambie y si llega a pasar nos va a tirar error

console.log -> "console" es un objeto y es una variable mas dentro de todo el set de elementos que tiene nuestro navegador y el punto "." te da una funcionalidad, el "log" te da una funcion que te muestra algo abajo en modo consola
*/

/*
el alert("holis") -> es una ventanita propia de nuesto navegador que cada vez que se reincie aparece

*/

/*                    CONTROL DE FLUJOS
Valores booleanos -> true o false
pero si ponemos "else" es una estructura opuesta         */

/*
const nombreUsuario = prompt ("¿Cual es tu nombre?");
if (nombreUsuario == "") { 
    alert ("No infresaste tu nombre!");
} else {
    alert ("Hola " + nombreUsuario + " bienvenido!")
} */

/* DOS FORMAS DE DARLE VALOR A UN PRODUCTO
const montoCompra = parseFloat(prompt("Cuanto gasté?"))
debugger
if (montoCompra > 10000) {
    alert ("DESCUENTO DEL 13%");
} else if (montoCompra > 8000) {
    alert ("DESCUENTO DEL 8%");
} else if (montoCompra > 5000) {
    alert ("DESCUENTO DEL 3%") ;
} else {
    alert ("NO TIENES DESCUENTOS");
}  */

/*  const numero = parseInt(prompt("ingresa un numero"));
//const limite = "19";

// esto es mayor > que esto otro
// esto es menor < que esto otro
const esmayoraotronumero = numero > 19//limite;

if(esmayoraotronumero) {
    alert ("el valor que ingresaste es mayor a " + 19 //AQUI PODEMOS REEMPLAZAR EL NUMERO POR UNA CONSTANTE limite.toString())
} else {
    alert("El valor ingresado no es mayor a " + 19)
}  */

/*  const esUsuario = true;
if (esUsuario){
    //añadir funcionalidad para registrar contactos
}

if (esUsuario){
    //añadir funcionalidad para listar auditorias
} */

//aplicacion del operador logico AMD (&&)

/*  const nombreusuario = prompt ("Nombre del usurario");
    const contrasena = prompt("contraseña");

    //()&&() es una proposicion compuesta o molecular - - > tiene dos preguntas logicas por separado
    
if ((nombreusuario != "") && (contrasena !=="")) {
    alert("Puedes ingresar al sistema");
} else {
    alert("NO puedes ingresar al sistema");
} */

// poniendo "trim" lo que hacemos es sacar todos los espacios ej: si pongo "l  u  l  i" me lo va a juntar igual y me lo va a dejar como "luli"
// "toLowerCase" convierte todos los caracteres en minuscula 
// "toUpperCase" convierte todos los caracteres en mayuscula
/*    if (nombreIngresado.trim().toLowerCase() == "luli") {
    alert ("El nombre ingresado es luli");
} else {
    alert("El nombre ingresado NO es luli");
}  */

    class Producto {
        //INICIALIZACIÓN
        nombre= "fernet" ;
        descripcion = "" ;
        categoria = " " ;
        marca = "" ;
        precioUnitario = " " ;
        codigoProducto = " " ;
        stock = 0 ;

        //CONSTRUCTOR DE LA CLASE
        constructor (nombre, precioUnitario) {
            this.nombre = nombre.trim();
            this.precioUnitario = precioUnitario;
            this.codigoProducto = "000000100";
            this.stock = 10;
        }

        //DEFINICION DE FUNCIONES (METODOS FUERA DE LA CLASE)
        toString() {
            
        }
    }