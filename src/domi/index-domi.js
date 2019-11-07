import { LitElement, html } from '@polymer/lit-element'

import './domi-form.js'
import './domi-table.js'

class Domi extends LitElement {
    
    static get properties() {
        return {
            domi: { type: String }
        }
    }

    constructor() {
        super()
        this.domi = 'index-domi'
    }

    render() {
        return html`
            <h2>${this.domi} works!</h2>
            <domi-form></domi-form>
            <domi-table></domi-table>
        `
    }

}

customElements.define('index-domi', Domi)