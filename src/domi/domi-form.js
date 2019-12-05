import { html, css } from 'lit-element'
import { UtilComp } from '../util/util-comp.js'
import DomisServices from '../util/domis-services.js'
import CardServices from '../util/card-services.js'

class DomiForm extends UtilComp {

    static get styles() {
        return [
            super.styles,
            css`
                
            `
        ]
    }
    
    static get properties() {
        return {
            domisServices: { type: Object },
            cardServices: { type: Object },
            domiForm: { type: String },
            domi: { type: Object },
            statusOption: { type: Array },
            cards: { type: Array }
        }
    }

    constructor() {
        super()
        // this.domiForm = 'domi-form'
        this.domisServices = new DomisServices()
        this.cardServices = new CardServices()
        this.domi = {
            idCard: '',
            idAgreement: '',
            alias: '',
            description: '',
            reference: '',
            paymentDate: '',
            status: ''
        }
        this.cards = []
        this.statusOption = [
            { id: 1, name: 'activo' },
            { id: 2, name: 'inactivo' }
        ]
        this.serviceCatalog = [
            { id: '1123456781234567812345678', name: 'Telmex', img:'telmex' },
            { id: '2123456781234567812345678', name: 'CFE', img:'cfe' },
            { id: '3123456791234567912345679', name: 'Liverpool', img:'liverpool' },
            { id: '4123456791234567912345679', name: 'Amex', img:'amex' }
        ]
        this.getCards()
    }

    render() {
        return html`
            <!-- <h3>${this.domiForm} works!</h3> -->
            <div class="card inComplete">
                <h3>Registro de domiciliaciones</h3>
                <div class="row">
                    <select id="cards" name="cards" @change=${this.setCard}>
                        ${this.cards.map(card => html`
                            <option .value=${card.id} 
                            >
                                ${card.id}
                            </option>`)}
                    </select>
                </div>
                <div class="row">
                    <select id="agreement" name="agreement" @change=${this.setAgreement}>
                        ${this.serviceCatalog.map(service => html`<option value=${service.id}>${service.name}</option>`)}
                    </select>
                </div>
                <div class="row">
                    <input 
                        type="text" 
                        id="alias" 
                        name="alias"
                        .value=${this.domi.alias} 
                        @change=${e => { this.domi.alias = e.currentTarget.value } } 
                        placeholder="alias del servicio"
                    >
                </div>
                <div class="row">
                    <input 
                        type="text" 
                        id="description" 
                        name="description"
                        .value=${this.domi.description} 
                        @change=${e => { this.domi.description = e.currentTarget.value } }  
                        placeholder="descripcion"
                    >
                </div>
                <div class="row">
                    <input 
                        type="text" 
                        id="reference" 
                        name="reference" 
                        .value=${this.domi.reference} 
                        @change=${e => { this.domi.reference = e.currentTarget.value } }  
                        placeholder="referencia"
                    >
                </div>
                <div class="row">
                    <input 
                        type="text" 
                        id="paymentDate" 
                        name="paymentDate" 
                        .value=${this.domi.paymentDate} 
                        @change=${e => { this.domi.paymentDate = e.currentTarget.value } }  
                        placeholder="fecha de pago"
                    >
                </div>
                <div class="row">
                    <select id="status" name="status" @change=${this.setStatus}>
                        ${this.statusOption.map(option => html`<option>${option.name}</option>`)}
                    </select>
                </div>
                <br/>
                <br/>
                <div class="row">
                    <button 
                        class="button-success pure-button" 
                        @click=${this.saveDomi}>Guardar</button>
                </div>
            </div>
        `
    }

    cleanForm() {
        this.shadowRoot.getElementById('alias').value = ''
        this.shadowRoot.getElementById('description').value = ''
        this.shadowRoot.getElementById('reference').value = ''
        this.shadowRoot.getElementById('paymentDate').value = ''
        // this.shadowRoot.getElementById('periodicity').value = ''
        this.shadowRoot.getElementById('paymentDate').value = ''
        // this.shadowRoot.getElementById('amount').value = ''
        // this.shadowRoot.getElementById('card').value = ''
    }

    cleanDomiObj() {
        this.domi = {
            alias: '',
            description: '',
            reference: '',
            paymentDate: '',
            IsPeriodic: '', 
            periodicity: '',
            amount: '',
            card: ''
        }
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

    saveDomi() {
        let params = undefined
        let auth = localStorage.getItem('token')
        this.domisServices.createDomi(params, this.domi, auth).then((response) => {
            if(response) {
                alert('registro exitoso!')
                this.cleanDomiObj()
                this.cleanForm()
            } else {
                alert('error en registro')
            }
        })
        
    }

    setAgreement() {
        let idAgreement = this.shadowRoot.querySelector('#agreement').value
        this.domi.idAgreement = idAgreement
    }

    setCard() {
        let idCard = this.shadowRoot.querySelector('#cards').value
        this.domi.idCard = idCard
    }

    setStatus() {
        let status = this.shadowRoot.querySelector('#status').value
        console.log(status)
        this.domi.status = status
    }

}

customElements.define('domi-form', DomiForm)