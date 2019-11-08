import { LitElement, html, css } from 'lit-element'

class HomeComp extends LitElement {
    
    static get styles() {
        return [
            css`
                :host { 
                    display: block;
                    border: 1px solid black;
                }
            `
        ]
    }

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