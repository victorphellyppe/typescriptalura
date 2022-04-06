import { Negociacoes } from './../models/negociacoes.js';
export class NegociacoesView {
    private elemento: HTMLElement;
    constructor(seletor:string){

        this.elemento = document.querySelector(seletor)
    }
    template(modelo: Negociacoes): string {
        return `
            <table class="table table-hover table-borderd">
                <thead>
                    <tr>
                        <th>DATA</th>
                        <th>QUANTIDADE</th>
                        <th>VALOR</th>
                    </tr>    
                </thead>

                <tbody>
                    ${ modelo.listaNegociacoes().map(negociacao => {
                        return ` 
                            <tr>
                                <td> ${ new Intl.DateTimeFormat()
                                    .format(negociacao.data) }  </td>
                                <td> ${negociacao.quantidade}  </td>
                                <td> ${negociacao.valor}  </td>
                            </tr>
                        `;
                    }).join('')}
                </tbody>
            </table>
        `;
    }


    updateView(modelo: Negociacoes): void{
        const template = this.template(modelo);
        console.log(template);
        this.elemento.innerHTML = template;
    }
}