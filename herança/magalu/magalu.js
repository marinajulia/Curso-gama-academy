let salarioComAjuste;
let valorAumento;
let percentual;
class aumento{
    aumentoSalario(salarioAtual){
        if(salarioAtual <= 280){
            percentual = 20;
            porcentagemS(salarioAtual, percentual);
            valorAumento = aumentoS(salarioAtual, salarioComAjuste);
            
            imprimirValores(salarioAtual, valorAumento, salarioComAjuste, percentual);
        }else if(salarioAtual > 280 && salarioAtual<= 700){
            percentual = 15;
            porcentagemS(salarioAtual, percentual);
            
            valorAumento = aumentoS(salarioAtual, salarioComAjuste);
            imprimirValores(salarioAtual, valorAumento, salarioComAjuste, percentual);
            
        }else if(salarioAtual > 700 && salarioAtual <= 1500){
            percentual = 10;
            porcentagemS(salarioAtual, percentual);
            valorAumento = aumentoS(salarioAtual, salarioComAjuste);
            imprimirValores(salarioAtual, valorAumento, salarioComAjuste, percentual);

        }else if (salarioAtual > 1500){
            percentual = 5;
            porcentagemS(salarioAtual, percentual);
            valorAumento = aumentoS(salarioAtual, salarioComAjuste);
            imprimirValores(salarioAtual, valorAumento, salarioComAjuste, percentual);

        }else{
            console.log("Salário informado inválido");
        }
    }

    imprimirValores(salarioAtual, valorAumento, salarioComAjuste, porcentagem){
        console.log(`O salário antes do ajuste era ${salarioAtual}, 
        seu percentual foi de ${porcentagem}, o aumento total foi de ${valorAumento}, portanto seu novo salário é de ${salarioComAjuste}`);
    }
    aumentoS(salarioAtual, salarioComAjuste){
        valorAumento = salarioAtual - salarioComAjuste;
    }
    porcentagemS(salarioAtual, porcentagem){
        salarioComAjuste = salarioAtual * porcentagem;
    }

}