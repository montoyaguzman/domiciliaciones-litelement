import { LitElement, html } from '@polymer/lit-element'



class Util extends LitElement {
    
    static get properties() {
        return {
            util: { type: String }
        }
    }

    constructor() {
        super()
        this.util = 'index-util'
    }

    render() {
        return html`
            <h2>${this.util} works!</h2>

        `
    }

}

customElements.define('index-util', Util)