import { UtilComp } from '../util/util-comp'
import { html, css } from 'lit-element'

import '../components/modal-comp'
import '../components/footer-comp'

class HomeComp extends UtilComp {
    
    static get styles() {
        return [
            super.styles,
            css`
                
                :host {
                    display: flex;
                    flex-direction: row;
                    height: 28rem;
                    width: 100%;
                }

                #background {
                    width: 100%;
                    height: 28rem;
                }

            `
        ]
    }

    static get properties() {
        return {
            homeComp: { type: String }
        }
    }

    constructor() {
        super()
        this.homeComp = 'home-comp'
        
    }

    render() {
        return html`
            <!-- <h1>${this.homeComp} works!</h1> -->
            <!--
            Modal works!
            <button @click=${this.openModal}>showModal</button>
            <modal-comp 
                id="genericModal"
                backdropDismiss="true"
            >
                <span>este es un modal</span>
                <button @click=${this.closeModal}>Close</button>
                <button @click=${this.continueModal}>Continue</button>
            </modal-comp>
            -->
            
            <div id="background">
                <img 
                    width="100%"
                    height="100%"
                    alt="background" 
                    src="../assets/img/background2.jpg"/>
            </div>
            
            <footer-comp></footer-comp>
        `
    }

    openModal() {
        const modal = this.shadowRoot.getElementById('genericModal')
        modal.open()
    }

    closeModal() {
        const modal = this.shadowRoot.getElementById('genericModal')
        modal.close()
    }

    continueModal(){
        // sentences
        console.log('ejecutando servicio...')
    }

}

customElements.define('home-comp', HomeComp)