import { LitElement, html } from '@polymer/lit-element'

class NameComp extends LitElement {
    
    static get properties() {
        return {
            nameComp: { type: String }
        }
    }

    constructor() {
        super()
        this.nameComp = 'name-comp'
    }

    render() {
        return html`
            <h1>${this.nameComp} works!</h1>
        `
    }

}

customElements.define('name-comp', NameComp)