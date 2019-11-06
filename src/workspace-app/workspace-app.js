import { LitElement, html, css } from '@polymer/lit-element'
import { styleSheetDomiciliaciones } from '../../assets/css/styles.js'
import '../routing/my-app.js'

class Workspace extends LitElement {
    
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
            workspaceComponent: { type: String },
            menu: { type: Array }
        }
    }

    constructor() {
        super()
        this.workspaceComponent = 'App de domiciliaciones'
    }

    render() {
        return html`
            <div class="centerText">
                <h2>${this.workspaceComponent} works!</h2>
            </div>
            <my-app></my-app>
        `
    }

}

customElements.define('workspace-app', Workspace)