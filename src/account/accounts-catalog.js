import { html, css } from 'lit-element'
import { UtilComp } from '../util/util-comp.js'

class AccountsCatalog extends UtilComp {

    static get styles() {
        return [
            super.styles,
            css`
                :host {
                    display: flex;
                    width: 100%
                }

                .catalog {
                    display: flex;
                    flex-direction: column;
                    width: 100%;
                }

                .row {
                    display: flex;
                    flex-direction: row;
                    width: 100%;
                }
                
                .item {
                    width: 20%;
                    padding: 20px;
                    text-align: center;
                }

            `
        ]
    }
    
    
    static get properties() {
        return {
            // accountsCatalog: { type: String }
        }
    }

    constructor() {
        super()
        // this.accountsCatalog = 'accounts-catalog'
    }

    render() {
        return html`
            <!-- <h1>${this.user} works!</h1> -->
            <div class="catalog">
                <div class="row">
                    <div class="item">
                        <img alt="service" src="../assets/img/service.png"/>
                        <br/>
                        <span>Servicio</span>
                    </div>
                    <div class="item">
                        <img alt="service" src="../assets/img/service.png"/>
                        <br/>
                        <span>Servicio</span>
                    </div>
                    <div class="item">
                        <img alt="service" src="../assets/img/service.png"/>
                        <br/>
                        <span>Servicio</span>
                    </div>
                    <div class="item">
                        <img alt="service" src="../assets/img/service.png"/>
                        <br/>
                        <span>Servicio</span>
                    </div>
                    <div class="item">
                        <img alt="service" src="../assets/img/service.png"/>
                        <br/>
                        <span>Servicio</span>
                    </div>
                </div>
                <div class="row">
                    <div class="item">
                        <img alt="service" src="../assets/img/service.png"/>
                        <br/>
                        <span>Servicio</span>
                    </div>
                    <div class="item">
                        <img alt="service" src="../assets/img/service.png"/>
                        <br/>
                        <span>Servicio</span>
                    </div>
                    <div class="item">
                        <img alt="service" src="../assets/img/service.png"/>
                        <br/>
                        <span>Servicio</span>
                    </div>
                    <div class="item">
                        <img alt="service" src="../assets/img/service.png"/>
                        <br/>
                        <span>Servicio</span>
                    </div>
                    <div class="item">
                        <img alt="service" src="../assets/img/service.png"/>
                        <br/>
                        <span>Servicio</span>
                    </div>
                </div>
            </div>
            
        `
    }

}

customElements.define('accounts-catalog', AccountsCatalog)