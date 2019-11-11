import { html, css, LitElement } from 'lit-element'
import { UtilComp } from '../util/util-comp.js'

import '../routing/index-routing.js'
import '../session/index-session.js'

class WorkspaceComp extends UtilComp {
    
    static get styles() {
        return [
            css`
                :host { 
                    display: block;
                }
            `,
            super.styles
        ]
    }

    static get properties() {
        return {
            workspaceComp: { type: String },
            menu: { type: Array },
            userLogon: { type: Object },
            sessionPage: { type: String }
        }
    }

    constructor() {
        super()
        this.workspaceComp = 'App de domiciliaciones'
        this.userLogon = null
        this.sessionPage = 'login'

        document.addEventListener('log-in', (e) => {
            let login = e.detail.login || ''
            if (login) {
                this.userLogon = { user: e.detail.user }
            }
        })
        
        document.addEventListener('log-out', (e) => {
            console.log('saliendo')
            this.userLogon = null
        })
        
    }

    render() {

        return html`
            <div class="centerText">
                <h1>${this.workspaceComp} works!</h1>
            </div>

            ${ this.userLogon
                ? html`<index-routing></index-routing>`
                : html`
                    <div id='login' 
                        @click=${this.handleIndexSession}>
                        Login
                    </div>
                    <div id='signup' 
                        @click=${this.handleIndexSession}>
                        Registro
                    </div>
                    <index-session .sessionPage=${this.sessionPage}></index-session>
                `
            }
        

        `
    }

    updated(changedProperties) {
        changedProperties.forEach((oldValue, propName) => {
            // console.log(`papa ${propName} changed. oldValue: ${oldValue}`)
        })
    }

    handleIndexSession(e) {
        this.sessionPage = e.target.id
    }

}

customElements.define('workspace-comp', WorkspaceComp)