function validar(cpf) {
    cpf = cpf.replace(/[^\d]+/g,"");

    if(cpf.length !== 11 || /^(\d)\1+$/.test(cpf)){
        return false;
    }

    let soma = 0;
    let resto;

    //validação do 1º DV
    for(let i = 1; i <= 9; i++){
     soma += parseInt(cpf.substring(i - 1, i)) * (11 - i);
    }

    resto = (soma*10) % 11;

    if(resto === 10 || resto === 11){
        resto = 0;
    }

    if(resto !== parseInt(cpf.substring(9, 10))){
        return false;
    }

    //Validação do 2º DV
    soma = 0;
    for(let i = 1; 1 <= 10; i++){
        soma += parseInt(cpf.substring(i - 1, i)) * (12-i);

    }

    resto = (soma * 10) %11;
    if(resto === 10 || resto === 11){
        resto = 0;
    }

    if(resto !== parseInt(cpf.substring(10,11))){
        return false;
    }

    return true;
    

}

document.getElementById("cpfForm").addEventListener("submit", function(e){
    e.preventDefault();
    const cpfInput = document.querySelector("#cpf").value;
    const massageDiv = document.querySelector("#message");

    if(validar(cpfInput )){
        massageDiv.textContent = "CPF válido";
        massageDiv.className = "message sucess";
    }else{
        massageDiv.textContent = "CPF Iválido";
        massageDiv.className = "message error";
    }

    massageDiv.style.display = "block";

});