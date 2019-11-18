import { html, css } from 'lit-element'
import { UtilComp } from '../util/util-comp'

class ModalComp extends UtilComp {
    
    static get styles() {
        return [
            super.styles,
            css`
                
            `
        ]
    }

    static get properties() {
        return {
            modalComp: { type: String }
        }
    }

    constructor() {
        super()
        this.modalComp = 'modal-comp'
    }

    render() {
        return html`
            <h1>${this.modalComp} works!</h1>
            
        `
    }

}

customElements.define('modal-comp', ModalComp)