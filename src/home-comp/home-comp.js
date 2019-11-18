import { html, css } from 'lit-element'
import { UtilComp } from '../util/util-comp'

import '../components/modal-app'
import '../components/filter-app'
import '../components/table-app'

class HomeComp extends UtilComp {
    
    static get styles() {
        return [
            super.styles,
            css`
                
            `
        ]
    }

    static get properties() {
        return {
            nameComp: { type: String }
        }
    }

    constructor() {
        super()
        this.homeComp = 'home-comp'
    }

    render() {
        return html`
            <h1>${this.homeComp} works!</h1>
            
            <modal-comp></modal-comp>
            <filter-comp></filter-comp>
            <table-comp></table-comp>

        `
    }

}

customElements.define('home-comp', HomeComp)