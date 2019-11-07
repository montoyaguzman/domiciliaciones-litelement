import { LitElement, html } from '@polymer/lit-element'

class DomiTable extends LitElement {
    
    static get properties() {
        return {
            domiTable: { type: String }
        }
    }

    constructor() {
        super()
        this.domiTable = 'domi-table'
    }

    render() {
        return html`
            <h3>${this.domiTable} works!</h3>
        `
    }

}

customElements.define('domi-table', DomiTable)