 abstract class Veículo{
    marca: string;
    modelo: string;

    constructor(_marca: string, _modelo: string){
        this.marca = _marca;
        this.modelo = _modelo;

    }

    Apresentar(){
        console.log(` a marca é ${this.marca}`)
        console.log(` o modelo é ${this.modelo}`)   
    }
}
 
class Carro extends Veículo{
   Qtd_Portas: number;

   constructor(_marca: string, _modelo: string, _Qtd_Portas: number){
    super(_marca, _modelo);
    this.Qtd_Portas = _Qtd_Portas;
   }

}

class Moto extends Veículo{
   Cilindradas: number;

   constructor(_marca: string, _modelo: string, _Cilindradas: number){
    super(_marca, _modelo);
    this.Cilindradas = _Cilindradas
   }
}

let carro = new Carro('fiat','uno',4)
carro.Apresentar();

let moto = new Moto('Honda', 'Biz' , 97)
moto.Apresentar();