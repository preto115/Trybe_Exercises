let ehPrimo = "";
let num =21;
let x = 0;
for( i = 2; i < num; i++){
    if( i % 2 != 0){
        if( num % i == 0){
            ehPrimo += i + " ";
            x += 1;

        }
    }

}
if( ehPrimo === ""){
    console.log(`O numero ${num} é primo`);
}
else console.log(`O numero ${num} é divisível por ${ehPrimo}`);
