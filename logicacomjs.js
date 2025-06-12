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

/* let pontuacao = Number(prompt("Digite sua pontuação"))
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
} */
/* let planobasico = 25;
let planopremiun = 40;
let planoultra = 60;
let telastresquatro = 5;
let telasmaisdequatro = 7.50;

let tipoassinatura = (prompt("Qual assinatura você deseja"))
let quantitelas = prompt("Digite quantas telas você terá:")
if(tipoassinatura == "básico"){
    if(quantitelas>=3 && quantitelas<=4){
        alert("O preço será " +(planobasico+telastresquatro))
    }
      else if(quantitelas>=4){
        alert("O preço será " +(planobasico+telasmaisdequatro))
    }
    else{
        alert("O preço será " +planobasico)
    }
}  
else if(tipoassinatura == "premium"){
    if(quantitelas>=3 && quantitelas<=4){
        alert("O preço será " +(planopremiun+telastresquatro))
    }
      else if(quantitelas>=4){
        alert("O preço será " +(planopremiun+telasmaisdequatro))
    }
    else{
        alert("O preço será " +planopremiun)
    }
}  
else {
    if(quantitelas>=3 && quantitelas<=4){
        alert("O preço será " +(planoultra+telastresquatro))
    }
      else if(quantitelas>=4){
        alert("O preço será " +(planoultra+telasmaisdequatro))
    }
    else{
        alert("O preço será " +ultra)
    }
} 
    *//*
let daysOFweek = ["Raquel", "Maraisa",80,40,10]; //iniciando um array 
console.log(daysOFweek[1]) //ver por índice 
console.log(daysOFweek.length) // ver quantos itens tem esse array
let nomedoaluno = prompt("Digite o nome do novo aluno: ")//Adiciona no Array com push e prompt 
daysOFweek.unshift(nomedoaluno) //Adionado ao fim do Array 
daysOFweek.push("Miguel", "Alysson", "Arthur", "Nayline")
daysOFweek.unshift("João")
daysOFweek.pop()
daysOFweek.shift()
daysOFweek.sort()
daysOFweek.reverse()
alert("Atualmente os alunos da escola são: "+daysOFweek) //Usando alert e uma array
alert(daysOFweek.indexOf("Arthur"))*/
//sem parametro
/*function saudar(){
    alert ("Desejo uma boa navegação no nosso site!")
}
saudar()*/

//Com return e Paraâmetro

/*function dobrarNumero(numero){
    return numero * 2 
}
let resultado = dobrarNumero(888)
alert ("O calculo do dobro do número"+resultado)*/
//Com Parametro
/*function Cumprimentar(nome){
    alert("Olá, "+nome+" como está seu dia")
}
let nomedoaluno = prompt("Digite o seu nome jovem: ")
Cumprimentar(nomedoaluno)*/
//Recursiva
/*function contagemRegressiva(numero){
    console.log(numero)
    if(numero ===0){
        console.log("chegou");
        return;
    }
    contagemRegressiva(numero-1)
}
contagemRegressiva(10)*/

