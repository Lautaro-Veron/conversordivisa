let convert = document.getElementById("convert");
let cantidad = document.getElementById("cantidad");
let divisa = document.getElementById("divisa");
let resultado = document.getElementById("resultado");
let modo = document.getElementById("modo");
let contenedor = document.getElementById("contenedor");
divisa.addEventListener("change" , (e) => {
    console.log(e.target.value);
});

modo.addEventListener("change" , () => {
    contenedor.classList.toggle("noche");
});


let convertilos = () => {
    let valor = 0;
    console.log("soy convertilos");
    if(divisa.value == "usd") {
        valor = 392;
        moneda = "usd";
    }else {
        valor = 230;
        moneda = "eur";
    }
    
    let elegida = parseInt(divisa.value);
    let cuanto = parseInt(cantidad.value);
    let result = cuanto * valor;
    resultado.innerHTML = cuanto + " " + moneda + " son:" + result + "pesos";
    resultado.style.color = "red"; // Establece el color del texto en rojo
    resultado.style.fontSize = "24px"; // Establece el tamaño de fuente en 24px
};
convert.addEventListener("click" , convertilos);


let saludadora = (nombre, apellido) => {
    console.log("Saludos,", nombre, "tu apellido es:", apellido);
};