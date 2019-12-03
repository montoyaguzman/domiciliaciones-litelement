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
            cardServices: { type: Object },
            card: { type: Object },
            serviceCatalog: { type: Array }
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
        this.card = {
            cardsNumber: '',
            expirationDate: '',
            ccv: ''
        }
        this.serviceCatalog = []
        this.cardServices = new CardServices()
        this.getCards()
        this.getCatalog()
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
                        <h3>Alta Tarjetas</h3>
                        <div class="row">
                            <input 
                                type="text" 
                                id="cardsNumber" 
                                name="cardsNumber"
                                .value=${this.card.cardsNumber}
                                @change=${e => { this.card.cardsNumber = e.currentTarget.value } }
                                placeholder="numero de tarjeta">
                        </div>
                        <div class="row">
                            <input 
                                type="text" 
                                id="expirationDate" 
                                name="expirationDate"
                                .value=${this.card.expirationDate}
                                @change=${e => { this.card.expirationDate = e.currentTarget.value } }
                                placeholder="vencimiento">
                        </div>
                        <div class="row">
                            <input 
                                type="password" 
                                id="ccv" 
                                name="ccv"
                                .value=${this.card.ccv}
                                @change=${e => { this.card.ccv = e.currentTarget.value } }
                                placeholder="cvv">
                        </div>
                        <button 
                            class="button-cancel pure-button"
                            @click=${this.closeModal}>
                                Close
                            </button>
                        <button
                            class="button-success pure-button" 
                            @click=${this.createCard}>
                            Continue
                        </button>
                    </modal-comp>
                
            </div>
            <div class="card inComplete">
                <h3>Catálogo de servicios</h3>
                <accounts-catalog
                    .serviceCatalog=${this.serviceCatalog}
                ></accounts-catalog>
            </div>
            
        `
    }

    cleanCardForm() {
        this.card = {
            cardsNumber: '',
            expirationDate: '',
            ccv: ''
        }
    }

    cleanCardObject() {
        this.shadowRoot.getElementById('cardsNumber').value = ''
        this.shadowRoot.getElementById('expirationDate').value = ''
        this.shadowRoot.getElementById('ccv').value = ''
    }

    closeModal() {
        const modal = this.shadowRoot.getElementById('genericModal')
        modal.close()
    }

    createCard() {
        let auth = localStorage.getItem('token')
        let params = undefined
        this.cardServices.createCard(params, this.card, auth).then((response) => {
            if(response) {
                alert('Tarjeta registrada')
                this.cleanCardObject()
                this.cleanCardForm()
            } else {
                alert('error en login')
            }
        }).catch(error => alert('Ha ocurrido un problema', error) )
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

    getCatalog() {
        this.serviceCatalog = [
            { id: 1, name: 'Telmex', img:'telmex' },
            { id: 2, name: 'CFE', img:'cfe' },
            { id: 3, name: 'Liverpool', img:'liverpool' },
            { id: 4, name: 'Amex', img:'amex' }
        ]
        /*
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
        */
    }

    openModal() {
        const modal = this.shadowRoot.getElementById('genericModal')
        modal.open()
    }

}

customElements.define('index-account', Account)