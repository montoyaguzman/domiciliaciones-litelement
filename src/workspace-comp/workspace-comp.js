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
                .logout {
                    display: flex;
                    flex-direction: row;
                    justify-content: flex-end;
                    color: red;
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
        this.userLogon = localStorage.getItem('userName') || null
        this.sessionPage = 'login'

        document.addEventListener('log-in', (e) => {
            let login = e.detail.login || ''
            if (login) {
                localStorage.setItem('userName', e.detail.email)
                this.userLogon = localStorage.getItem('userName')
            }
        })
        
        document.addEventListener('log-out', (e) => {
            localStorage.clear()
            this.userLogon = null
        })
        
    }

    render() {

        return html`
            <div class="centerText">
                <h1>${this.workspaceComp} works!</h1>
            </div>

            ${ this.userLogon
                ? html`
                    <div class="logout">
                        <a @click=${this.closeSession}>Close session</a>
                    </div>
                    <index-routing></index-routing>
                  `
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

    closeSession() {
        let event = new CustomEvent('log-out', {
            detail: 'session closed!',
            bubbles: true,
            composed: true 
        })
        this.dispatchEvent(event)
    }

    handleIndexSession(e) {
        this.sessionPage = e.target.id
    }

}

customElements.define('workspace-comp', WorkspaceComp)