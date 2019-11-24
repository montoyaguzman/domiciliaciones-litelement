import { html, css } from 'lit-element'
import { UtilComp } from '../util/util-comp'

class ModalComp extends UtilComp {
    static get properties() {
        return {
            backdropDismiss:{ type: String }
        };
    }

    static get styles() {
        return css`
        :host {
            display: block;
        }

        #modal, #overlay {
            display: none;
        }

        #overlay {
            opacity: 1;
            position: absolute;
            z-index: 0;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            background: rgba(0,0,0,.5)
        }

        #modal {
            position: absolute;
            left: 0;
            right: 0;
            margin: auto;
            top: 30%;
            width: 50%;
            z-index: 1;
            padding: 1em;
            background: white;
            border-radius: 10px;
        }
        `
    }

    constructor(){
        super()
        this.backdropDismiss = 'true'
    }

    render() {
        return html`
        <div id="overlay" @click=${this.overlayClicked}></div>
        <div id="modal">
            <slot></slot>
        </div>
        `
    }

    open(){
        const modal = this.shadowRoot.getElementById('modal')
        const overlay =this.shadowRoot.getElementById('overlay')

        modal.style.display = 'block'
        overlay.style.display = 'block'
    }

    close(){
        const modal = this.shadowRoot.getElementById('modal')
        const overlay =this.shadowRoot.getElementById('overlay')

        modal.style.display = 'none'
        overlay.style.display = 'none'
    }

    overlayClicked(){
        if(this.backdropDismiss === 'true') {
            this.close()
        }
        return
    }

}

window.customElements.define("modal-comp", ModalComp);