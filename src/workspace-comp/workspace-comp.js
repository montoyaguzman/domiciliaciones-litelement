import { LitElement, html, css } from '@polymer/lit-element'
import { styleSheetDomiciliaciones } from '../../assets/css/styles.js'


import '../routing/index-routing.js'

class WorkspaceComp extends LitElement {
    
    static get styles() {
        return [
            styleSheetDomiciliaciones,
            css`
            :host { 
                display: block;
            }
        `]
    }

    static get properties() {
        return {
            workspaceComp: { type: String },
            menu: { type: Array }
        }
    }

    constructor() {
        super()
        this.workspaceComp = 'App de domiciliaciones'
    }

    render() {
        return html`
            <div class="centerText">
                <h1>${this.workspaceComp} works!</h1>
            </div>
            <index-routing></index-routing>
        `
    }

}

customElements.define('workspace-comp', WorkspaceComp)