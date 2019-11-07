import { LitElement, html } from '@polymer/lit-element'

class NotFound extends LitElement {
    
    static get properties() {
        return {
            notFound: { type: String }
        }
    }

    constructor() {
        super()
        this.notFound = 'not-found'
    }

    render() {
        return html`
            <h1>${this.notFound} works!</h1>
        `
    }

}

customElements.define('not-found', NotFound)