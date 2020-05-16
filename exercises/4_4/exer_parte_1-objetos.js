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
let info3 = {
    personagem: "Tio patinhas",
    origem: "Christimas on Bear Mountain, Dell\'s Four Color Comics",
    nota: "O último MacPatinha",
    recorrente: "Sim"
}
let info2 = {};

/*para inserir mais propriedade num objeto podemos fazer dos seguinte modos

info.recorrente= "Sim"; 
info["recorrente"] = "Sim";

*/
console.log("Bem-vinda, ",info.personagem);

for(chave in info){
  // console.log(chave,":",info[chave]); 
   info2[chave] = info3[chave];
}
for(chave in info2,info){
    if( info[chave] == info2[chave]){
        console.log("Ambos", chave );
    }
    
    else console.log(info[chave]," e ", info2[chave]);

}


