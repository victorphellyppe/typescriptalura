export class Negociacao {
    constructor(data, qtd, valor) {
        this._data = data;
        this._quantidade = qtd;
        this._valor = valor;
    }
    ;
    get data() {
        return this._data;
    }
    get quantidade() {
        return this._quantidade;
    }
    get valor() {
        return this._valor;
    }
    get volume() {
        return this._quantidade * this._valor;
    }
}
