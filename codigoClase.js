function Producto(nombre, precio, stock){
    this.nombre = nombre
    this.precio = precio
    this.stock = stock
    this.sumarStock = function (cantidad){ this.stock += cantidad}
}

const productoA = new Producto("Mesa", 1000, 10)
const productoB = new Producto("Silla", 500, 100)
const productoC = new Producto("Lampara", 100, 1000)
const productoD = new Producto("Lapices", 5, 10000)
const productoE = new Producto("Ventana", 100, 1000)
const productoF = new Producto("PC", 5, 10000)

let listaProductos = [productoA, productoB, productoC, productoD, productoE, productoF]

let nombresProductos = listaProductos.map((producto) => producto.nombre)


let cantidadCompras = prompt("Ingrese la cantidad de productos distintos que quiere comprar: ")

let precioTotal = 0;

function calculoPrecio(cantidad, precio){
    precioTotal += cantidad * precio
}

function calculoStock(cantidad, producto){
    if(producto.stock >= cantidad){
        calculoPrecio(cantidad, producto.precio)
        alert("El precio total es de: $" + (cantidad * producto.precio))
    }
    else{
        alert("No disponemos de esa cantidad en stock. Nuestro stock actual es de: " + stock + " unidades")
    }
}



for(let i = 0; i < cantidadCompras; i++){
    let compra1 = prompt("Ingrese el nombre del producto que quiere comprar: \n" + nombresProductos.join("\n ")).toLowerCase()
    let cantidad1 = prompt("Ingrese la cantidad del producto que quiere comprar:")

    if(compra1 == productoA.nombre.toLowerCase()){
        calculoStock(cantidad1, productoA)
    }
    else if(compra1 == "Silla"){
        calculoStock(cantidad1, productoB)
    }
    else if(compra1 == "Lampara"){
        calculoStock(cantidad1, productoC)
    }
    else if(compra1 == "Lapices"){
        calculoStock(cantidad1, productoD)
    }
    else{
        alert("No tenemos ese producto")
   }
}

alert("Este es el precio total final con impuestos de tu compra: " + precioTotal)