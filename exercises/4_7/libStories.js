let botao = document.querySelector("#lib-button");
let historia = botao.addEventListener('click', makeMadLib);
document.querySelector("#story").innerHTML = historia;

function makeMadLib(){
let noun = document.querySelector("#noun").value;
let adj = document.querySelector("#adjective").value;
let name = document.querySelector("#person").value;

let texto = name + " gostava muito do seu " + noun+" "+adj;
document.querySelector("#story").innerHTML = texto;
return texto;

}