import { html, css } from 'lit-element'
import { UtilComp } from '../util/util-comp'

class NotFound extends UtilComp {
    
    static get styles() {
        return [
            super.styles,
            css`
                
            `
        ]
    }

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