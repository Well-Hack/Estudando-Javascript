/* Exercicio 40

*Crie uma classe conta bancaria;

*Com as propriedades de saldo na conta correte, saldo na conta
poupança e juros da poupança;

*Crie os métodos de depósitos e saque, também um método para transferir
dinheiro da poupança para a corrente;

*Além disso crie uma conta especial que herda da conta normal;

*Na conta especial os juros são dobrados da conta normal;

BEM DIFICIL
*/

class Conta {
    constructor(saldocc, saldocp, juros){
        this.saldocc = saldocc;
        this.saldocp = saldocp;
        this.juros = juros;
    }

    deposito(valor){
        this.saldocc += valor;
    }

    saque(valor){
        this.saldocc -= valor;
    }

    transferenciacp(valor){
        this.saldocc -= valor;
        this.saldocp += valor;
    }
    transferenciacc(valor){
        this.saldocc += valor;
        this.saldocp -= valor;
    }

    jurosdeaniversariocc(valor){
        this.saldocp -= valor;
        this.saldocc += valor;
    }

    jurosdeaniversario(){
        let juros = (this.saldocp * this.juros) / 100
        this.saldocp += juros;
    }


}


class Conta_Especial extends Conta{
    constructor(saldocc, saldocp, juros){
        super(saldocc, saldocp, juros*2)
    }
}

let conta = new Conta(1000, 5000, 1);

console.log(conta)

conta.saque(500);

console.log(conta);

conta.deposito(5000);

console.log(conta)

conta.transferenciacp(3000);

console.log(conta)

conta.jurosdeaniversario();

console.log(conta)

let conta2 = new Conta_Especial(10000, 50000, 1)

console.log(conta2)

conta2.saque(5000);

console.log(conta2);

conta2.jurosdeaniversario();

console.log(conta2)