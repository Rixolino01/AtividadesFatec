const int a = prompt("Informe o salario a ser alterado: ");
const int b = prompt("informe o valor em porcentagem a ser corrigido: ");

let salário = (a*(b/100))+a;

document.write(salário);