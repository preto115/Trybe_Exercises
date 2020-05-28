let fundo = document.getElementById("conteudo");
    let estadoE = document.querySelector("#escuro");
    let estadoC = document.getElementById("claro");

    let fonte = document.getElementById("fonte").value;
    fonte.addEventListener('Selection', alert(fonte));
      
      estadoE.addEventListener('click', mudarCorEscura)
      estadoC.addEventListener('click', mudarCorClara);
    
      function mudarCorClara(event){
        if(event.bubbles == true){
          fundo.className = "claro";
        }
        else fundo.className = "claro"
        //alert("claro");
      }
      function mudarCorEscura(event){
        if(event.bubbles == true){
          fundo.className = "escuro";
        }
        else fundo.className = "claro";
        //alert("escuro");
    }