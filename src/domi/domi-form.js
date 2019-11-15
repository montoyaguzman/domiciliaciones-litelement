import { html, css } from 'lit-element'
import { UtilComp } from '../util/util-comp.js'

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
            domiForm: { type: String },
            domi: { type: Object }
        }
    }

    constructor() {
        super()
        // this.domiForm = 'domi-form'
        this.domi = {
            serviceAlias: '',
            description: '',
            reference: '',
            paymentDay: '',
            IsPeriodic: '', 
            periodicity: '',
            amount:'',
            card:''
        }
    }

    render() {
        return html`
            <!-- <h3>${this.domiForm} works!</h3> -->
            <div class="card inComplete">
                <h3>Registro de domiciliaciones</h3>
                <div class="row">
                    <input 
                        type="text" 
                        id="serviceAlias" 
                        name="serviceAlias"
                        .value=${this.domi.serviceAlias} 
                        @change=${e => { this.domi.serviceAlias = e.currentTarget.value } } 
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
                        id="paymentDay" 
                        name="paymentDay" 
                        .value=${this.domi.paymentDay} 
                        @change=${e => { this.domi.paymentDay = e.currentTarget.value } }  
                        placeholder="fecha de pago"
                    >
                </div>
                <div class="row">
                    <input 
                        type="text" 
                        id="isPeriodic" 
                        name="isPeriodic" 
                        .value=${this.domi.isPeriodic} 
                        @change=${e => { this.domi.isPeriodic = e.currentTarget.value } }  
                        placeholder="es periodica"
                    >
                </div>
                <div class="row">
                    <input 
                        type="text" 
                        id="periodicity" 
                        name="periodicity"
                        .value=${this.domi.periodicity} 
                        @change=${e => { this.domi.periodicity = e.currentTarget.value } }   
                        placeholder="periodicidad"
                    >
                </div>
                <div class="row">
                    <input 
                        type="text" 
                        id="amount" 
                        name="amount" 
                        .value=${this.domi.amount} 
                        @change=${e => { this.domi.amount = e.currentTarget.value } }   
                        placeholder="cantidad"
                    >
                </div>
                <div class="row">
                    <input 
                        type="text" 
                        id="card" 
                        name="card" 
                        .value=${this.domi.card} 
                        @change=${e => { this.domi.card = e.currentTarget.value } }   
                        placeholder="no. tarjeta"
                    >
                </div>
                <div class="row">
                    <button @click=${this.saveDomi}>Guardar</button>
                </div>
            </div>
        `
    }

    cleanForm() {
        this.shadowRoot.getElementById('serviceAlias').value = ''
        this.shadowRoot.getElementById('description').value = ''
        this.shadowRoot.getElementById('reference').value = ''
        this.shadowRoot.getElementById('paymentDay').value = ''
        this.shadowRoot.getElementById('periodicity').value = ''
        this.shadowRoot.getElementById('paymentDay').value = ''
        this.shadowRoot.getElementById('amount').value = ''
        this.shadowRoot.getElementById('card').value = ''
    }

    cleanDomiObj() {
        this.domi = {
            serviceAlias: '',
            description: '',
            reference: '',
            paymentDay: '',
            IsPeriodic: '', 
            periodicity: '',
            amount: '',
            card: ''
        }
    }

    saveDomi() {
        services.execPost('domi', null, this.domi).then((response) => {
            if(response && response.code === 200) {
                alert('registro exitoso!')
                this.cleanDomiObj()
                this.cleanForm()
            } else {
                alert('error en registro')
            }
        })
    }

}

customElements.define('domi-form', DomiForm)