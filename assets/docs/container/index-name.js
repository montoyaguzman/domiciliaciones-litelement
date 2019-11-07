import { LitElement, html } from '@polymer/lit-element'

class Name extends LitElement {
    
    static get properties() {
        return {
            name: { type: String }
        }
    }

    constructor() {
        super()
        this.name = 'index-name'
    }

    render() {
        return html`
            <h1>${this.name} works!</h1>
        `
    }

}

customElements.define('index-name', Name)