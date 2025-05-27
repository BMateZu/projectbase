/*let salario = Number(prompt("Digite seu salario:"))
if(salario < 500) {
    let reajuste = Number(15/100 * salario + salario)
    alert("Seu reajuste é" +reajuste )
}
else if(salario >= 500 && salario <= 1000)  {
    let reajuste = Number(10/100 * salario + salario)
    alert("Seu reajuste é" +reajuste)
}
else{
    let reajuste = Number(5/100 * salario + salario)
    alert("Seu reajuste é" +reajuste)
}
*/

/*let idade = Number(prompt("Digite sua idade:"))
if(idade <= 12) {
    alert("Recomendavel conteúdo infantil")
}
else if(idade >=12 && idade <=17){
    alert("Recomendavel conteúdo teen")
}
else if(idade >=18 && idade <=60){
    alert("Recomendavel conteúdo adulto")
}
else{
    alert("Recomendavel conteúdo senior")
}*/

let pontuacao = Number(prompt("Digite sua pontuação"))
if(pontuacao < 1000){
    alert("Você não possui bônus")
}
else if(pontuacao = 1000) {
    alert("Sua pontuação mais o bônus é"+(pontuacao + 100),"seu nível é novato")
}
else if(pontuacao <= 1001 && pontuacao >=5000) {
    alert("Sua pontuação mais o bônus é"+(pontuacao + 500),"seu nível é aprendiz")
}
else if(pontuacao <= 5001 && pontuacao >=10000) {
    alert("Sua pontuacao mais o bônus é"+(pontuacao + 1000),"seu nível é expert")
}
else{
    alert("Sua pontuação mais o bônus é"+(pontuacao + 2000),"seu nível é Mestre")
}