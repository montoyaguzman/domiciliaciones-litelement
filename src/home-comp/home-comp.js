import { UtilComp } from '../util/util-comp'
import { html, css } from 'lit-element'

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

}

customElements.define('home-comp', HomeComp)