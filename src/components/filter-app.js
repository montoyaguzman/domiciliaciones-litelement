import { html, css } from 'lit-element'
import { UtilComp } from '../util/util-comp'

class FilterComp extends UtilComp {
    
    static get styles() {
        return [
            super.styles,
            css`
                
            `
        ]
    }

    static get properties() {
        return {
            filterApp: { type: String }
        }
    }

    constructor() {
        super()
        this.filterComp = 'filter-comp'
    }

    render() {
        return html`
            <h1>${this.filterComp} works!</h1>
            
        `
    }

}

customElements.define('filter-comp', FilterComp)