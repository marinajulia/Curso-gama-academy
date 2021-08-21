class bombaCombustivel{
	constructor(valorGasolina, capacidade, qtdGasolina){
		this.valorGasolina = valorGasolina;
		this.capacidade = capacidade;
		this.qtdGasolina = capacidade;
	}

	ajustarValor(novoValor){
		if(novoValor>0 && typeof(novoValor) == 'number'){
			this.valorGasolina = novoValor;
		}
		else{
			console.log("Valor negativo");
		}
	}

	encheBomba(){
		// this.qtdGasolina = 20;
		if(this.qtdGasolina == this.capacidade){
			console.log("A bomba já está cheia");
		}else{
			this.qtdGasolina == this.capacidade;
			console.log("A bomba foi enchida");
		}
	}

	abastecerCarro(litros){
		if(this.qtdGasolina >= litros){
			this.qtdGasolina -= litros;
			console.log(`Abastecido com sucesso e você vai pagar ${litros*this.valorGasolina}`);
		}else{
			console.log(`Não temos o combustível suficiente`);
		}
	}
}

const bomba1 = new bombaCombustivel(10, 50);

// console.log(bomba1.valorGasolina);

// bomba1.ajustarValor(-2);

// console.log(bomba1.valorGasolina);

// bomba1.encheBomba();

bomba1.abastecerCarro(20);
bomba1.ajustarValor(10);
bomba1.abastecerCarro(20);
bomba1.abastecerCarro(20);
bomba1.encheBomba();
bomba1.abastecerCarro(20);