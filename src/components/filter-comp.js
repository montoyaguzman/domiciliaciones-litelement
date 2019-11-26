import { html, css } from 'lit-element'
import { UtilComp } from '../util/util-comp'

class FilterComp extends UtilComp {
    
    static get styles() {
        return [
            super.styles,
            css`
                :host {
                    display: flex;
                    flex-direction: row;
                }

                .filter {
                    padding: 10px;
                }
            `
        ]
    }

    static get properties() {
        return {
            filterApp: { type: String },
            selectOptions: { type: Array },
            selectedOption: { type: Object }
        }
    }

    constructor() {
        super()
        this.filterComp = 'filter-comp',
        this.selectedOption = {}
    }

    render() {
        return html`
            <!--<h1>${this.filterComp} works!</h1>-->
            <div class="filter">
                <select name="select" @change=${this.setSelectedOption} >
                    ${this.selectOptions.map( option => 
                        html`
                            <option value=${option.id}>${option.description}</option>
                            ` 
                    )}
                </select>
            </div>

            <div class="filter">
                ${this.selectedOption && this.selectedOption.description  
                    ? html`<input type="text" placeholder=${this.selectedOption.description}>`
                    : html`<input type="text" placeholder="filtro">`
                }
            </div>

            <div class="filter">
                <img 
                    width="20px"
                    height="20px"
                    alt="buscar" 
                    src="../assets/img/search.png"/>
            </div>
            
        `
    }

    setSelectedOption(e) {
        let id = parseInt(e.target.value)
        let option = this.selectOptions.filter( option => option.id === id)[0]
        this.selectedOption = option
    }

}

customElements.define('filter-comp', FilterComp)