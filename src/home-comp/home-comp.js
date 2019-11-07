import { LitElement, html } from '@polymer/lit-element'

class HomeComp extends LitElement {
    
    static get properties() {
        return {
            nameComp: { type: String }
        }
    }

    constructor() {
        super()
        this.homeComp = 'home-comp'
    }

    render() {
        return html`
            <h1>${this.homeComp} works!</h1>
        `
    }

}

customElements.define('home-comp', HomeComp)