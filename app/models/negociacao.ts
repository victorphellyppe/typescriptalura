export class Negociacao {
    

    constructor(
        public readonly _data: Date,
        public readonly  _quantidade:number,
        public readonly _valor: number){}

    get data(): Date{
        return this._data;
    }

    get quantidade(): number{
        return this._quantidade;
    }

    get valor(): number{
        return this._valor;
    }

    get volume(): number{
        return this._quantidade * this._valor;
    }

    public static criaDe(dateString:string, quantidadeString:string, valorString:string): Negociacao{
        const exp = /-/g;
        const date = new Date(dateString.replace(exp, ','));
        const quantidade = parseInt(quantidadeString);
        const valor = parseFloat(valorString);
        return new Negociacao(date,quantidade, valor);
    }
}