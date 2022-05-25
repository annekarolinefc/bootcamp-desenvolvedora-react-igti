function Retangulo(altura, largura){
    this.altura = altura;
    this.largura = largura;
    this.area = function(){
        return this.altura * this.largura
    }
    return `Altura: ${altura} | Largura: ${largura} | Area: ${area}`
}

//INSTANCIANDO O OBJETO
const ret = Retangulo(10,20)
console.log(ret)
