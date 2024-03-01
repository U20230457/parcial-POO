let numerovoleto = document.getElementById("numerovoleto");
let precio = document.getElementById("precio");
let estado = document.getElementById("estado");

let nombre = document.getElementById("nombre").value
let dui = document.getElementById("dui").value
let edad = document.getElementById("edad").value
let telefono = document.getElementById("telefono").value
let voleto = document.getElementById("voleto").value

function validarEdad(){
    let edad = document.getElementById("edad").value
    if (edad < 17) {
        alert`Losiento Nose Pueden hacer ventas a menores de edad`
    }
}

    function calcularIva(precioBoleto) {
        let iva = precioBoleto * 0.13;
        let costoVoleteria = precioBoleto * 0.05;
        let precioFinal = precioBoleto + iva + costoVoleteria;
        return precioFinal; 
}