import { UtilComp } from '../util/util-comp'
import { html, css } from 'lit-element'

class FooterComp extends UtilComp {

    static get styles() {
        return [
            super.styles,
            css`
                .footer {
                    position: fixed;
                    left: 0;
                    bottom: 0;
                    width: 100%;
                    height: 5rem;
                    background-color: #072146;
                    color: #ffffff;
                    text-align: center;
                }
            `
        ]
    }
    
    static get properties() {
        return {
            // footerComp: { type: String }
        }
    }

    constructor() {
        super()
        // this.footerComp = 'footer-comp'
    }

    render() {
        return html`
            <!--<h1>${this.footerComp} works!</h1> -->
            <div class="footer">
                Domiciliaciones
                <br/>
                Contacto 55 11 22 33 44 66
            </div>
        `
    }

}

customElements.define('footer-comp', FooterComp)