import { LitElement, html } from 'lit-element'

class InfoComp extends LitElement {
    
    static get properties() {
        return {
            infoComp: { type: String }
        }
    }

    constructor() {
        super()
        this.infoComp = 'info-comp'
    }

    render() {
        return html`
            <h1>${this.infoComp} works!</h1>
        `
    }

}

customElements.define('info-comp', InfoComp)