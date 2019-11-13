import { LitElement, html, css } from 'lit-element'
import { UtilComp } from '../util/util-comp'

class HomeComp extends UtilComp {
    
    static get styles() {
        return [
            css`
                :host { 
                    display: block;
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