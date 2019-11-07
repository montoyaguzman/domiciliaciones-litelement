import { LitElement, html } from '@polymer/lit-element'

class UserTable extends LitElement {
    
    static get properties() {
        return {
            userTable: { type: String }
        }
    }

    constructor() {
        super()
        this.userTable = 'user-table'
    }

    render() {
        return html`
            <h3>${this.userTable} works!</h3>
        `
    }

}

customElements.define('user-table', UserTable)