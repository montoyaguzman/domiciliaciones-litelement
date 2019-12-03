import { html, css } from 'lit-element'
import { UtilComp } from '../util/util-comp.js'
import CardServices from '../util/card-services.js'

import '../components/table-comp.js'
import './cards-catalog.js'
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
            cards: { type: Array },
            cardServices: { type: Object },
            card: { type: Object },
            serviceCatalog: { type: Array },
            actionsCards: { type: Array }
        }
    }

    constructor() {
        super()
        // this.account = 'index-account'
        this.accountTableTitle = 'Cuentas/Tarjetas'
        this.accountColumns = [
            { id: 0, name: 'Id' },
            { id: 1, name: 'No. Trajeta' }, 
            { id: 2, name: 'Vencimiento' }
        ]
        this.actionsCards = [
            { id: 1, name: 'edita', action: 'edit' },
            { id: 2, name: 'elimina', action: 'delete' }
        ]
        this.cards = []
        this.card = {
            cardsNumber: '',
            expirationDate: '',
            ccv: ''
        }
        this.serviceCatalog = []
        this.cardServices = new CardServices()
        this.getCards()
        this.getCatalog()

        document.addEventListener('exec-event', (e) => {
            let id = parseInt(e.detail.id)
            let action = parseInt(e.detail.action)
            action === 'edit'
                ? this.editCard(id)
                : this.deleteCard(id)
        })
    }

    render() {
        return html`
            <!-- <h1>${this.user} works!</h1> -->
            <div class="card inComplete">
                <table-comp
                    .tableTitle=${this.accountTableTitle} 
                    .nameColumns=${this.accountColumns}
                    .dataList=${this.cards}
                    .actionsList=${this.actionsCards}
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
                <cards-catalog
                    .serviceCatalog=${this.serviceCatalog}
                ></cards-catalog>
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
        let auth = localStorage.getItem('token') || ''
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

    editCard(id) {
        console.log('llamando de edicion', id)

    }

    deleteCard(id) {
        let urlParameter = this.cards[id].id
        let params = undefined
        let auth = localStorage.getItem('token') || ''
        this.cardServices.deleteCard(params, urlParameter, auth).then((response) => {
            if(response) {
                alert('Eliminacion exitosa')
            } else {
                alert('Error en getCards')
            }
        }).catch(error => alert('Ha ocurrido un problema', error) )
    }

    getCards() {
        let params = undefined
        let auth = localStorage.getItem('token') || ''
        this.cardServices.getAllCards(params, auth).then((response) => {
            if(response) {
                let cards = []
                response.data.map((tarjeta) => {
                    let newObject = { 
                        id: tarjeta._id,
                        number: tarjeta.cardsNumber, 
                        expirationDate: tarjeta.expirationDate 
                    }
                    cards.push(newObject)
                })
                this.cards = cards
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
        let auth = localStorage.getItem('token') || ''
        this.cardServices.getAllCards(params, auth).then((response) => {
            if(response) {
                let cards = []
                response.data.map((tarjeta) => {
                    let newObject = { 
                        number: tarjeta.cardsNumber, 
                        expirationDate: tarjeta.expirationDate 
                    }
                    cards.push(newObject)
                })
                this.cards = cards
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