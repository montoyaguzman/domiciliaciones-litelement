import { html, css } from 'lit-element'
import { UtilComp } from '../util/util-comp.js'

import '../components/table-comp.js'
import './accounts-catalog.js'

class Account extends UtilComp {

    static get styles() {
        return [
            super.styles,
            css`
                
            `
        ]
    }
    
    
    static get properties() {
        return {
            // account: { type: String }
            accountTableTitle: { type: String },
            accountColumns: { type: Array },
            accounts: { type: Array }
        }
    }

    constructor() {
        super()
        // this.account = 'index-account'
        this.accountTableTitle = 'Cuentas/Tarjetas'
        this.accountColumns = [
            { id: 1, name: 'Producto' },
            { id: 2, name: 'Terminación' }, 
            { id: 3, name: 'Vencimiento' }, 
            { id: 4, name: 'Celular Vinculado' }
        ],
        this.accounts = [
            { producto: 'Libreton', terminacion: '**** **** **** 4523', vencimiento: '20/24', celular: '5599691234' },
            { producto: 'TDC Gold', terminacion: '**** **** **** 0920', vencimiento: '01/22', celular: '5599691234' }
        ]
    }

    render() {
        return html`
            <!-- <h1>${this.user} works!</h1> -->
            <div class="card inComplete">
                <table-comp
                    .tableTitle=${this.accountTableTitle} 
                    .nameColumns=${this.accountColumns}
                    .dataList=${this.accounts}
                    >
                </table-comp>
            </div>
            <div class="card inComplete">
                <accounts-catalog></accounts-catalog>
            </div>
            
        `
    }

}

customElements.define('index-account', Account)