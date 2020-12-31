class Auto {
    constructor(marca, modelo, puertas, precio) {
      this.marca = marca;
      this.modelo = modelo;
      this.puertas = puertas;
      this.precio = precio;
    }
}
class Moto {
    constructor(marca, modelo, cilindrada, precio) {
      this.marca = marca;
      this.modelo = modelo;
      this.cilindrada = cilindrada;
      this.precio = precio;
    }
}

const yamaha = new Moto("Yamaha", "YBR", "160cc", 80500.50);
const peugeot206 = new Auto("Peugeot", "206", "4", 200000.00);
const peugeot208 = new Auto("Peugeot", "208", "5", 250000.00);
const honda = new Moto("Honda", "Titan", "125cc", 60000.00);

const listaVehiculos = [yamaha, peugeot206, peugeot208, honda];

const obtenerInformacionDeLosvehiculos =(vehiculos) =>{

    for (let i = 0; i < vehiculos.length; i++) {
        let marca = "Marca: " + vehiculos[i].marca;
        let modelo = " // Modelo: " + vehiculos[i].modelo;
        let cilindrada = "";
        let puertas = "";
        let precio = " // Precio: " + currencyFormat(vehiculos[i].precio);

        if(vehiculos[i].cilindrada) {
            cilindrada = " // Cilindrada: " + vehiculos[i].cilindrada;
        }

        if(vehiculos[i].puertas) {
            puertas = " // Puertas: " + vehiculos[i].puertas;
        }


        console.log(marca + modelo + cilindrada + puertas + precio + ".");
    }
}

const calcularMasCaro = (vehiculos) => {

    let precioActual;
    let autoMasCaro;

    for(let i = 0; i < vehiculos.length; i++) {
        if(precioActual){
            if(precioActual < vehiculos[i].precio){
                precioActual = vehiculos[i].precio;
                autoMasCaro = vehiculos[i].marca + " " + vehiculos[i].modelo;
            }
        }
        else{
            precioActual = vehiculos[i].precio;
            autoMasCaro = vehiculos[i].marca + " " + vehiculos[i].modelo;
        }
    }
   
    console.log("Vehículo más caro: ", autoMasCaro);      
}

const calcularMasBarato = (vehiculos) => {

    let precioActual;
    let autoMasBarato;

    for(let i = 0; i < vehiculos.length; i++) {
        if(precioActual){
            if(precioActual > vehiculos[i].precio){
                precioActual = vehiculos[i].precio;
                autoMasBarato = vehiculos[i].marca + " " + vehiculos[i].modelo;
            }
        }
        else{
            precioActual = vehiculos[i].precio;
            autoMasBarato = vehiculos[i].marca + " " + vehiculos[i].modelo;
        }
    }
   
    console.log("Vehículo más barato: ", autoMasBarato);      
}

const obtenerModeloPorLetra = (vehiculos, letra) =>{

    let vehiculoseleccionado;

    for (let i = 0; i < vehiculos.length; i++) {
        let marcaAuto = vehiculos[i].marca;
        if(marcaAuto.includes(letra)) {
            vehiculoseleccionado = vehiculos[i].marca + " " + vehiculos[i].modelo + " " + currencyFormat(vehiculos[i].precio);
        }
    }
    
    console.log("Vehículo que contiene en el modelo la letra '" + letra + "' : " + vehiculoseleccionado);
}

const ordenarMayorAMenorPrecio = (vehiculos) =>{
    let precios = [];

    for (let i = 0; i < vehiculos.length; i++) {
        precios.push(vehiculos[i].precio);        
    }
   
    precios.sort((a,b)=>b-a); 

    console.log("Vehículos ordenados por precio de mayor a menor:");

    for (let i = 0; i < precios.length; i++) {      
        for (let j = 0; j < vehiculos.length; j++) {
             if(precios[i] == vehiculos[j].precio){
                 console.log(vehiculos[j].marca + " " + vehiculos[j].modelo);
             }           
        }
    }    
}

const currencyFormat = (num) => {
    return '$' + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}

obtenerInformacionDeLosvehiculos(listaVehiculos);
console.log("=============================");
calcularMasCaro(listaVehiculos);
calcularMasBarato(listaVehiculos);
obtenerModeloPorLetra(listaVehiculos, "Y");
console.log("=============================");
ordenarMayorAMenorPrecio(listaVehiculos);
