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
            dataList: { type: Array }
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
    }

    render() {
        return html`
            <h1>${this.homeComp} works!</h1>
            
            <modal-comp></modal-comp>
            <filter-comp></filter-comp>
            <table-comp 
                .nameColumns=${this.nameColumns}
                .dataList=${this.dataList}
                >
            </table-comp>

        `
    }

}

customElements.define('home-comp', HomeComp)