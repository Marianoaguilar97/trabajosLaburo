function Viaje(nombre, lugares, precio) {
    this.nombre = nombre
    this.lugares = lugares
    this.precio = precio
    this.lugaresOcupados = function (cantidad) {this.lugares -= cantidad}
}

/* me gustaria que el objeto tenga la propiedad fecha, pero no la puse porque cuando le pida al usuario no se como validar
lo que pone ya que el texto tendria numeros y fechas, ej 10 de julio */

const viajeA = new Viaje("caribe", 20, 300000)
const viajeB = new Viaje("roma", 35, 380000)
const viajeC = new Viaje("paris", 40, 270000)
const viajeD = new Viaje("berlin", 23, 420000)

const listaViajes = [viajeA, viajeB, viajeC, viajeD]
let precioTotal = 0;

let carrito = parseInt(prompt("Ingrese la cantidad de paquetes que desea comprar: "))
    while ((isNaN(carrito)) || carrito < 1) {
        carrito = parseInt(prompt("Debe de ingresar un numero, los numeros menores a 1 o las letras no son validos"))
}

function calculoPrecio(cantidad, precio){
    precioTotal += cantidad * precio
}

function carritoCompra(cantidad, viaje){
        calculoPrecio(cantidad, viaje.precio)
        alert("el precio es de: $" + precioTotal)
}

let nombreViaje = []

function nombrarViajes() {
    for(const viaje of listaViajes){
        nombreViaje.push(viaje.nombre)
    }
}

nombrarViajes()

for(let i = 0; i < carrito; i ++){

    /* me gustaria que el while de compra se pueda hacer llamando a todo el array de una, no por cada 1 de los objetos
    como estoy haciendo ahora */
    let compra = prompt("Ingrese el paquete de lo que desea comprar: \n " + nombreViaje.join ("\n ")).toLowerCase()
        while ((compra != viajeA.nombre) && (compra != viajeB.nombre) && (compra != viajeC.nombre) && (compra != viajeD.nombre))  {
        compra = prompt("Sus unicas opciones de ingreso son: \n"  + nombreViaje.join ("\n ")).toLowerCase()
        }
        /*while (viaje.lugares < cantidad) {
        parseInt(prompt("no tenemos la cantidad deseada, la cantidad disponible es de " + viaje.lugares))
        
        let cantidad = parseInt(prompt("ingrese la cantidad de lugares que desea comprar"))
        while (((isNaN(cantidad)) || cantidad < 1)){
        cantidad = parseInt(prompt("Debe de ingresar un numero, los numeros menores a 1 o las letras no son validos"))
        }
       while (viajeA.lugares < cantidad) {
            cantidad= parseInt(prompt("no tenemos la cantidad deseada, la cantidad disponible es de " + viajeA.lugares))*/
    if (compra == viajeA.nombre){
        let cantidad = parseInt(prompt("ingrese la cantidad de paquetes que desea comprar"))
            while (((isNaN(cantidad)) || cantidad < 1)){
                cantidad = parseInt(prompt("Debe de ingresar un numero, los numeros menores a 1 o las letras no son validos"))
            }
            while (viajeA.lugares < cantidad) {
                cantidad= parseInt(prompt("no tenemos la cantidad deseada, la cantidad disponible es de " + viajeA.lugares))
            }
        carritoCompra(cantidad, viajeA)
    }
    else if (compra == viajeB.nombre) {
        carritoCompra(cantidad, viajeB)
    }
    else if (compra == viajeC.nombre) {
        carritoCompra(cantidad, viajeC)
    }
    else if (compra == viajeD.nombre) {
        carritoCompra(cantidad, viajeD)
    }
    else{
        alert("no tenemos ese paquete")
    }
}
alert("Este es precio total de su compra $ " + precioTotal)