import { html, css } from 'lit-element'
import { UtilComp } from '../util/util-comp'

import '../components/modal-comp.js'
import '../components/filter-comp.js'
import '../components/table-comp.js'

class HomeComp extends UtilComp {
    
    static get styles() {
        return [
            super.styles,
            css`
                
            `
        ]
    }

    static get properties() {
        return {
            nameComp: { type: String },
            nameColumns: { type: Array },
            dataList: { type: Array },
            selectOptions: { type: Array }
        }
    }

    constructor() {
        super()
        this.homeComp = 'home-comp'
        this.nameColumns = [
            { id: 1, name: 'nombre' },
            { id: 2, name: 'app' }
        ],
        this.dataList = [
            { name: 'jose', app: 'montoya' },
            { name: 'charly', app: 'rodriguez' }
        ]
        this.selectOptions = [
            { id: 1, description: 'option one' },
            { id: 2, description: 'option two' }
        ]
    }

    render() {
        return html`
            <h1>${this.homeComp} works!</h1>
            <!--
            Modal works!
            <button @click=${this.openModal}>showModal</button>
            <modal-comp 
                id="genericModal"
                backdropDismiss="true"
            >
                <span>este es un modal</span>
                <button @click=${this.closeModal}>Close</button>
                <button @click=${this.continueModal}>Continue</button>
            </modal-comp>

            <filter-comp
                .selectOptions=${this.selectOptions}
            >
            </filter-comp>
            <table-comp 
                .nameColumns=${this.nameColumns}
                .dataList=${this.dataList}
                >
            </table-comp>
            -->
        `
    }

    openModal() {
        const modal = this.shadowRoot.getElementById('genericModal')
        modal.open()
    }

    closeModal() {
        const modal = this.shadowRoot.getElementById('genericModal')
        modal.close()
    }

    continueModal(){
        // sentences
        console.log('ejecutando servicio...')
    }

}

customElements.define('home-comp', HomeComp)