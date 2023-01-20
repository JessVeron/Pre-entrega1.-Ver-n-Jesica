

const precioObrasCompletas = 2300
const precioSigloxxi = 800
const precioFreudPaLoPibe = 1655


let entrada =prompt ("¿Querés comprar algo?");
while (entrada != "no") {
    let libroComprar = prompt ("¿Qué libro querés comprar?")
    let cantidad = parseInt(prompt("Ingresa cuántos volúmenes querés comprar"))
    function calcularPrecio (libroComprar , cantidad);
    switch (libroComprar) {
        case "Obras completas":
            precio = precioObrasCompletas * cantidad;
            alert ("El costo de los libros es : " + precio);
            break;
        case "Siglo XXI":
            precio = precioSigloxxi * cantidad;
            alert ("El costo de los libros es : " + precio);
            break;
        case "Freud pa lo pibe":
            numero = precioFreudPaLoPibe;
            alert ("El costo de los libros es : " + numero);
        default:
            alert ("Asegurate de escribir bien los nombres de los libros");
            break; 

    }
   entrada= prompt("Gracias por tu visita")
}





