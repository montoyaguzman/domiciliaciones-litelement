import { LitElement, html, css } from '@polymer/lit-element'
import { styleSheetDomiciliaciones } from '../../assets/css/styles.js'


import '../routing/index-routing.js'
import '../session/index-session.js'

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
            menu: { type: Array },
            userLogon: { type: Object }
        }
    }

    constructor() {
        super()
        this.workspaceComp = 'App de domiciliaciones'
        this.userLogon = null//{ user: 'jose', mail: 'jmontoya'}
    }

    render() {
        return html`
            <div class="centerText">
                <h1>${this.workspaceComp} works!</h1>
            </div>
            ${ this.userLogon
                ? html`<index-routing></index-routing>`
                : html`<index-session></index-session>`
            }
        `
    }

}

customElements.define('workspace-comp', WorkspaceComp)