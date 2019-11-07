import { LitElement, html } from '@polymer/lit-element'

class NameLastname extends LitElement {
    
    static get properties() {
        return {
            nameLastname: { type: String }
        }
    }

    constructor() {
        super()
        this.nameLastname = 'name-lastname'
    }

    render() {
        return html`
            <h1>${this.nameLastname} works!</h1>
        `
    }

}

customElements.define('name-lastname', NameLastname)