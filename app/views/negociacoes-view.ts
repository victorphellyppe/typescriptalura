import { Negociacoes } from './../models/negociacoes.js';
import { View } from './view.js';
export class NegociacoesView extends View<Negociacoes> {
    
    protected template(modelo: Negociacoes): string {
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
                                <td> ${ this.formatar(negociacao.data)}  </td>
                                <td> ${negociacao.quantidade}  </td>
                                <td> ${negociacao.valor}  </td>
                            </tr>
                        `;
                    }).join('')}
                </tbody>
            </table>
        `;
    }


    public updateView(modelo: Negociacoes): void{
        const template = this.template(modelo);
        console.log(template);
        this.elemento.innerHTML = template;
    }

    private formatar(data: Date): string{
        return new Intl.DateTimeFormat().format(data)
    }
}