let idade = Number(prompt("Insira sua idade"));
let temCNH = prompt("Possui CNH? (sim ou não)");

if(idade >= 18 && temCNH === "sim") {
    alert("Pode dirigir");
} else {
        alert("Não pode dirigir");
}