import { Negociacao } from "./negociacao.js";

export class Negociacoes {
    private negociacoes: Array<Negociacao> = [];

    adicionaNegociacao(negociacao: Negociacao): void{
        this.negociacoes.push(negociacao);
    };

    listaNegociacoes(): ReadonlyArray<Negociacao>{
        return this.negociacoes;
    }
}



