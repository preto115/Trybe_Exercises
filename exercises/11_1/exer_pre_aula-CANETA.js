class Pen {
  
  constructor(point, color, ink = 100) {
    this.point = point;
    this.color = color;
    this.ink = ink;
  }
  
  loseInk(quant) {
    this.ink -= quant;
    //if (this.ink <= 0) return `a tinha acabou!`;
  }
/*
  sign() {
    this.loseInk(10);
    return `'I've signed a text with a ${this.color} pen. charge: ${this.ink}%'`;
  }*/
  wroteText(texto){
    let str = texto.split('').length
    if (str > this.ink){
      texto = texto.slice(0, this.ink);
    }
    this.loseInk(str);
    return `${texto} ${this.ink > 0 ? `${this.ink}% de carga.`:'/... Opss! A tinta acabou.'}`
  }
}
/*
const myPen = new Pen (0.7, 'black');
console.log(myPen) // Pen { point: 0.7, color: 'black', ink: 100 }

const redPen = new Pen (1, 'red', 80);
console.log(redPen); // Pen { point: 1, color: 'red', ink: 80 }
const pinkPen = new Pen (0.5, 'pink', 50);
console.log(pinkPen.ink); // Pen { point: 0.5, color: 'pink', ink: 50 }
console.log(myPen.sign()); // 'I've signed a text with a black pen. charge: 90%'
*/
const purplePen = new Pen (0.4, 'purple', 60);
console.log(purplePen.wroteText('Elisangelo Alves Ferreira é muito lindo! chuchu blz tamo indo devagar.'));
