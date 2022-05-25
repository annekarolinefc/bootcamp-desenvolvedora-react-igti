//Mecanismo responsável pela herança de propriedades em objetos!

function Retangulo(altura, largura){
    this.altura = altura;
    this.largura = largura;
    this.area = function(){
        return this.altura * this.largura
    }
    return `Altura: ${altura} | Largura: ${largura} | Area: ${area}`
}

var r1 = new Retangulo(3, 4);
var r2 = new Retangulo(7, 2);

function RetanguloV2(altura, largura){
    this.altura = altura;
    this.largura = largura;
}

RetanguloV2.prototype.area = function(){
    return this.altura * this.largura
}
var r3 = new RetanguloV2(3, 4);
var r4 = new RetanguloV2(7, 2);