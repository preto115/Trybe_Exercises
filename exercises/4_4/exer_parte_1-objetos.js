//bloco 4_4
//exercicio 3, acessando propriedades dentro de um objeto
// mostrando todas as propriedades dod objeto:
/*
Saída no console:
_______________
personagem
origem
nota
recorrente
_____________
*/

 let info = {
personagem: "Margarida",
origem: "Pato Donald",
nota: "Namorada do personagem do principal nos quadrinhos do Pato Donald"
};

info.recorrente = "Sim";

for(chave in info){
    console.log(info[chave]);
}

