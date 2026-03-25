let renda = Number(prompt("Digite sua renda:"));
// ! simbolo de negação
// isNaN: is not number (verifica se Não é um número)
if(!isNaN(renda)){    
    if (renda >= 3000){      
        let nomeLimpo = prompt("Nome limpo? (sim ou nao)");
        if (nomeLimpo === "sim") {
            alert("Financiamento aprovado");
        } else {
            alert("Nome negativo");
        }
    } else {
        alert("Renda insuficiente");
    }
}