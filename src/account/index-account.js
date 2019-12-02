import { html, css } from 'lit-element'
import { UtilComp } from '../util/util-comp.js'
import CardServices from '../util/card-services.js'

import '../components/table-comp.js'
import './accounts-catalog.js'
import '../components/modal-comp.js'

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
            accounts: { type: Array },
            cardServices: { type: Object }
        }
    }

    constructor() {
        super()
        // this.account = 'index-account'
        this.accountTableTitle = 'Cuentas/Tarjetas'
        this.accountColumns = [
            { id: 1, name: 'No. Trajeta' }, 
            { id: 2, name: 'Vencimiento' }
        ],
        this.accounts = []
        this.cardServices = new CardServices()
        this.getCards()
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
                <br/>
                <img 
                    alt="nueva tarjeta" 
                    src="../assets/img/add.png"
                    @click=${this.openModal}
                />
                <!--
                    <button @click=${this.openModal}>showModal</button>-->
                    <modal-comp 
                        id="genericModal"
                        backdropDismiss="true"
                    >
                        <span>este es un modal</span>
                        <button @click=${this.closeModal}>Close</button>
                        <button @click=${this.continueModal}>Continue</button>
                    </modal-comp>
                
            </div>
            <div class="card inComplete">
                <h3>Catálogo de servicios</h3>
                <accounts-catalog></accounts-catalog>
            </div>
            
        `
    }

    closeModal() {
        const modal = this.shadowRoot.getElementById('genericModal')
        modal.close()
    }

    continueModal() {
        console.log('ejecutando servicio...')
    }

    getCards() {
        let params = undefined
        let auth = localStorage.getItem('token')
        this.cardServices.getAllCards(params, auth).then((response) => {
            if(response) {
                let accounts = []
                response.data.map((tarjeta) => {
                    let newObject = { 
                        number: tarjeta.cardsNumber, 
                        expirationDate: tarjeta.expirationDate 
                    }
                    accounts.push(newObject)
                })
                this.accounts = accounts
            } else {
                alert('Error en getCards')
            }
        }).catch(error => alert('Ha ocurrido un problema', error) )
    }

    openModal() {
        const modal = this.shadowRoot.getElementById('genericModal')
        modal.open()
    }

}

customElements.define('index-account', Account)