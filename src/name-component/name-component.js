import { LitElement, html } from '@polymer/lit-element'

class NameApp extends LitElement {
    
    static get properties() {
        return {
            nameComponent: { type: String }
        }
    }

    constructor() {
        super()
        this.nameComponent = 'nameComponent'
    }

    render() {
        return html`
            <h1>${this.nameComponent} works!</h1>
        `
    }

}

customElements.define('name-app', NameApp)