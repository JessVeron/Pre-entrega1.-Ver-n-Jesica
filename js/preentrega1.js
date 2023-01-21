let nombreUsuario = prompt ("Ingresa tu nombre por favor");

if (nombreUsuario === ""){
   alert ("No ingresaste el nombre de usuario");
        while (nombreUsuario === "") {
                nombreUsuario= prompt ("Por favor ingresa un nombre válido");
                alert ("Hola " + nombreUsuario +" voy a ayudarte con tu compra");
    }
}
else {
    alert ("Hola " + nombreUsuario +" voy a ayudarte con tu compra");
}

let precio = 0;
function calcularPrecio (costo, cantidad ){
    console.log(precio);
    precio = costo * cantidad;
    return precio 
}

let costoTotal = 0;
function sumaPrecios(costo, precio){
  costoTotal= costo + precio;
  return costoTotal
}

let costo = parseInt(prompt ("Por favor ingresa el costo del libro"))
let cantidad = parseInt(prompt ("Por favor ingresa la cantidad de volumenes"))

do {
    calcularPrecio(costo, cantidad);
    alert ( "El costo de tus libros es de " + precio)
    costo = parseInt(prompt ("Ingresar otro costo o escribe salir para terminar"))
    sumaPrecios (costo, precio)
    alert ( "El costo de tus libros es de " + costoTotal)
    break;
} while (costo != "salir")
