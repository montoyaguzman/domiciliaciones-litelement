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
            actionsCards: { type: Array },
            cardAux: { type: Object },
        }
    }

    constructor() {
        super()
        // this.account = 'index-account'
        this.accountTableTitle = 'Cuentas/Tarjetas'
        this.accountColumns = [
            { id: 0, name: 'Id' },
            { id: 1, name: 'No. Trajeta' }, 
            { id: 2, name: 'Vencimiento' },
            { id: 2, name: 'Cvv' }
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
        this.cardAux = {}

        document.addEventListener('exec-event', (e) => {
            let id = parseInt(e.detail.id)
            let action = e.detail.action
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
                    @click=${event => this.openModal('genericModal')}
                />
                ${this.generateModal('Alta Tarjetas')}
                ${this.generateModal2('Edición Tarjetas')}
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

    closeModal(id) {
        const modal = this.shadowRoot.getElementById(id)
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
        console.log(id)
        this.cardAux = this.cards[id]
        console.log(this.cardAux)
        this.openModal('genericModal2')
    }

    deleteCard(id) {
        let urlParameter = this.cards[id].idCard
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

    generateModal(title) {
        return html`
            <modal-comp 
                id="genericModal"
                backdropDismiss="true"
            >
            <h3>${title}</h3>
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
                <br/>
                <button 
                class="button-cancel pure-button"
                @click=${event => this.closeModal('genericModal')}>
                    Cancelar
                </button>
                <button
                    class="button-success pure-button" 
                    @click=${this.createCard}>
                        Guardar
                </button>
            </modal-comp>
        `
    }

    generateModal2(title) {
        return html`
            <modal-comp 
                id="genericModal2"
                backdropDismiss="true"
            >
            <h3>${title}</h3>
            <div class="row">
                <input 
                    type="text" 
                    id="cardsNumber" 
                    name="cardsNumber"
                    .value=${this.cardAux.idCard}
                    @change=${e => { this.cardAux.idCard = e.currentTarget.value } }
                    placeholder="numero de tarjeta"
                    readonly
                    >
            </div>
            <div class="row">
                <input 
                    type="text" 
                    id="expirationDate" 
                    name="expirationDate"
                    .value=${this.cardAux.expirationDate}
                    @change=${e => { this.cardAux.expirationDate = e.currentTarget.value } }
                    placeholder="vencimiento">
            </div>
            <div class="row">
                <input 
                    type="password" 
                    id="ccv" 
                    name="ccv"
                    .value=${this.cardAux.ccv}
                    @change=${e => { this.cardAux.ccv = e.currentTarget.value } }
                    placeholder="cvv"
                    readonly
                    >
                </div>
                <br/>
                <button 
                class="button-cancel pure-button"
                @click=${event => this.closeModal('genericModal2')}>
                    Cancelar
                </button>
                <button
                    class="button-success pure-button" 
                    @click=${this.saveEditCard}>
                        Guardar
                </button>
            </modal-comp>
        `
    }

    getCards() {
        let params = undefined
        let auth = localStorage.getItem('token') || ''
        this.cardServices.getAllCards(params, auth).then((response) => {
            if(response) {
                let cards = []
                response.data.map((tarjeta) => {
                    let newObject = { 
                        idCard: tarjeta._id,
                        cardsNumber: tarjeta.cardsNumber, 
                        expirationDate: tarjeta.expirationDate,
                        ccv: tarjeta.ccv 
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
            { id: '1123456781234567812345678', name: 'Telmex', img:'telmex' },
            { id: '2123456781234567812345678', name: 'CFE', img:'cfe' },
            { id: '3123456791234567912345679', name: 'Liverpool', img:'liverpool' },
            { id: '4123456791234567912345679', name: 'Amex', img:'amex' }
        ]
    }

    openModal(id) {
        const modal = this.shadowRoot.getElementById(id)
        modal.open()
    }

    saveEditCard() {
        let params = undefined
        let urlParameter = this.cardAux.idCard
        let cardAux = {
            cardsNumber: this.cardAux.cardsNumber,
            expirationDate: this.cardAux.expirationDate,
            ccv: this.cardAux.ccv
        }
        let auth = localStorage.getItem('token') || ''
        this.cardServices.editCard(params, urlParameter, cardAux, auth).then((response) => {
            if(response) {
                alert('Edición exitosa!')
            } else {
                alert('Error en getCards')
            }
        }).catch(error => alert('Ha ocurrido un problema', error) )
    }

}

customElements.define('index-account', Account)