class Display {
    constructor(displaValorAnterior, displaValorActual){
        this.displaValorActual = displaValorActual;
        this.displaValorAnterior = displaValorAnterior;
        this.calculadora = new Calculadora();
        this.tipoOperacion = undefined;
        this.valorActual = '';
        this.valorAnterior = ''; 
    }

    borrarTodo() {
        this.valorActual = '';
        this.valorAnterior = '';
        this.tipoOperacion = undefined;
        this.imprimirValores();
    }
    
    borrar() {
        this.valorActual =  this.valorActual.toString().slice(0, -1);
        this.imprimirValores();
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