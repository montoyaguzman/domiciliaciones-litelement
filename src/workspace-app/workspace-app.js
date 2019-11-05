import { LitElement, html, css } from '@polymer/lit-element'
import { styleSheetDomiciliaciones } from '../../assets/css/styles.js'

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
        this.workspaceComponent = 'workspace-app'
        this.menu = [
            { id: 1, option: 'Registro clientes'},
            { id: 2, option: 'Consulta clientes'},
            { id: 3, option: 'Edición clientes'}
        ]
    }

    render() {
        return html`
            <div>
                <h3>MENU</h3>
                ${this.menu.map( item => html`
                        
                    <li>${item.option}</li>


                `)}
            </div>
            </div>
            <div class="centerText">
                <h2>${this.workspaceComponent} works!</h2>
            </div>
            <div>
                Aqui se cargaran los componentes alta/consulta/edicion de clientes
            </div>
        `
    }

}

customElements.define('workspace-app', Workspace)