class Retangulo{
    constructor(altura, largura){
        this.altura = altura;
        this.largura = largura;
    }

    area(){
        return this.altura * this.largura;
    }
}

var r1 = new Retangulo(1,4)
var r2 = new Retangulo(3,8)

console.log(r1)
console.log(r2)

//HERANÇA
class Quadrado extends Retangulo{
    constructor(dimensao){
        super(dimensao, dimensao)
    }
    imprimirNome(){
        console.log('Quadrado')
    }
}

var r3 = new Quadrado(3);
console.log(r3)
console.log(r3.imprimirNome())