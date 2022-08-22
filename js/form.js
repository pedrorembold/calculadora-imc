var botaoAdicionarPaciente = document.querySelector("#adicionar-paciente")
botaoAdicionarPaciente.addEventListener("click", function(event){
    event.preventDefault();
    
    var form = document.querySelector("#form-adiciona");

    var paciente = obtemInformacoesDoForm(form);
    

    var erros = validaPaciente(paciente);



    if(erros.length > 0 ){
        exibeMensagensDeErro(erros)

        return;
    }

    
    adicionaPacianteNaTabela(paciente);
    

    form.reset();
    var mensagensErro = document.querySelector("#mostra-erros")
    mensagensErro.innerHTML = "";
});

function adicionaPacianteNaTabela(paciente) {
    var pacienteTr = montaTr(paciente);
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);
}


function exibeMensagensDeErro(erros){
    var ul = document.querySelector("#mostra-erros");
    ul.innerHTML = "";

    erros.forEach(function(erro){
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    })
}



function obtemInformacoesDoForm(form){
var paciente = {
    nome: form.nome.value,
    peso: form.peso.value,
    altura: form.altura.value,
    gordura: form.gordura.value,
    imc: calculaImc(form.peso.value, form.altura.value)
}
    return paciente;
}

function montaTr(paciente){
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));


    return pacienteTr 
}

function montaTd(dado, classe) {
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);

    return td;
}

function validaPaciente(paciente){
    var erros = [];

    if(paciente.nome.length == 0){erros.push("O campo Nome não pode ser vazio.")}
    if(!validaPeso(paciente.peso)) erros.push ("Peso inválido.");
    if(paciente.peso.length == 0){erros.push("O campo Peso não pode ser vazio.")}
    if(!validaAltura(paciente.altura)) erros.push("Altura inválida.");
    if(paciente.altura.length == 0){erros.push("O campo Altura não pode ser vazio.")}
    if(paciente.gordura.length == 0){erros.push("O campo Gordura não pode estar vazio")}
    
    return erros;
}


