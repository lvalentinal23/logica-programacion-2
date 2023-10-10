const button = document.querySelector("#button");
button.addEventListener("click", function(){
    let Celsius = parseFloat(document.getElementById("temperatura").value);

    if (typeof Celsius !== 'number' || isNaN(Celsius)) {
        alert("Digite un valor válido");
    } else {
        let resultadoF = document.getElementById("resultadoF");
        let resultadoK = document.getElementById("resultadoK");
    
        resultadoF = ((Celsius * 9/5) + 32);
        resultadoK = (Celsius + 273.15);
        
        resultadoF = "Grados Farenheit: " + resultadoF.toFixed(2);
        resultadoK = "Grados Kelvin: " + resultadoK.toFixed(2);
    
        console.log("Grados Farenheit: " + resultadoF);
        console.log("Grados Kelvin: " + resultadoK);   
    }
});
