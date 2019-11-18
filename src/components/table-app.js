import { html, css } from 'lit-element'
import { UtilComp } from '../util/util-comp'

class TableComp extends UtilComp {
    
    static get styles() {
        return [
            super.styles,
            css`
                
            `
        ]
    }

    static get properties() {
        return {
            tableApp: { type: String }
        }
    }

    constructor() {
        super()
        this.tableComp = 'table-comp'
    }

    render() {
        return html`
            <h1>${this.tableComp} works!</h1>
            
        `
    }

}

customElements.define('table-comp', TableComp)