var pacientes = document.querySelectorAll(".paciente");

for(var i =0; i < pacientes.length; i++){
    
    var paciente = pacientes[i];
    
    var tdPeso = paciente.querySelector(".info-peso"); 
    var peso = tdPeso.textContent;
    var pesoValido = validaPeso(peso);
    
    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;
    var alturaValida = validaAltura(altura);
    
    var tdimc = paciente.querySelector(".info-imc");
    
    if(!pesoValido) {
        tdimc.textContent = "Peso inválido!";
        pesoValido = false;
        paciente.classList.add("paciente-invalido");
    }
    
    if(!alturaValida) { 
        tdimc.textContent = "Altura Inválida!";
        alturaValida = false;
        paciente.classList.add("paciente-invalido");
        
    }
    
    if(pesoValido && alturaValida) {
        var imcCalc = calculaImc(peso,altura);
        tdimc.textContent = imcCalc;
    }
} 

function validaPeso(peso){
    if(peso >= 0 && peso < 1000){
    return true;
    }else{
    return false;
    }
}

function validaAltura(altura){
    if(altura >= 0 && altura <= 3.0){
    return true;
    }else{
    return false;
    }
}

function calculaImc(peso,altura) {

    var imcCalc = 0;
    imcCalc = peso / (altura * altura);
    return imcCalc.toFixed(2)


}