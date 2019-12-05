import { LitElement, html } from 'lit-element'
import { UtilComp } from '../util/util-comp.js'

import './domi-form.js'
import './domi-table.js'

class Domi extends UtilComp {
    
    static get properties() {
        return {
            domi: { type: String }
        }
    }

    constructor() {
        super()
        // this.domi = 'index-domi'
    }

    render() {
        return html`
            <!-- <h2>${this.domi} works!</h2> -->
            <domi-form></domi-form>
            <domi-table></domi-table>
        `
    }

}

customElements.define('index-domi', Domi)