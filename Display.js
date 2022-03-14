class Display {
    constructor(displaValorAnterior, displaValorActual){
        this.displaValorActual = displaValorActual;
        this.displaValorAnterior = displaValorAnterior;
        this.calculadora = new Calculadora();
        this.valorActual = '';
        this.valorAnterior = ''; 
    }

    agregarNumero(numero) {
        if(numero === '.' && this.valorActual.includes('.')) return
        this.valorActual = this.valorActual.toString() + numero.toString();
        this.imprimirValores();
    }

    imprimirValores() {
        this.displaValorActual.textContent = this.valorActual;
        this.displaValorAnterior.textContent = this.valorAnterior;
    }

}