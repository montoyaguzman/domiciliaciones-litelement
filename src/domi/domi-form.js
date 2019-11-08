import { LitElement, html } from 'lit-element'

class DomiForm extends LitElement {
    
    static get properties() {
        return {
            domiForm: { type: String }
        }
    }

    constructor() {
        super()
        this.domiForm = 'domi-form'
    }

    render() {
        return html`
            <h3>${this.domiForm} works!</h3>
        `
    }

}

customElements.define('domi-form', DomiForm)