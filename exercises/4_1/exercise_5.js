// programa que verifica os tres valores e retorna se é um triangulo valido ou nao e se algum valor for invalido retorna erro do exercicio_5

let anguloA= false, anguloB= 135, anguloC= 23;

if((typeof anguloA == "number" && typeof anguloB == "number"&& typeof anguloC == "number")){
    if (( anguloA + anguloB + anguloC) == 180 ){
        console.log("eh triangulo");
    }else console.log("nao é triangulo")
    
}

else  console.log("Valor inválido");