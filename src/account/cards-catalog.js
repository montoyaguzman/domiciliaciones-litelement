import { html, css } from 'lit-element'
import { UtilComp } from '../util/util-comp.js'

class CardsCatalog extends UtilComp {

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
                    padding: 12px;
                    text-align: center;
                }

            `
        ]
    }
    
    
    static get properties() {
        return {
            // cardsCatalog: { type: String }
        }
    }

    constructor() {
        super()
        // this.cardsCatalog = 'cards-catalog'
    }

    render() {
        return html`
            <!-- <h1>${this.user} works!</h1> -->
            <div class="catalog">
                <div class="row">
                    ${this.serviceCatalog.map((service) => 
                        html`
                            <div class="item">
                                <img alt=${service.name} src="../assets/img/${service.img}.png"/>
                                <br/>
                                <span>${service.name}</span>
                            </div>
                        `
                    )}
                </div>
            </div>
            
        `
    }

}

customElements.define('cards-catalog', CardsCatalog)