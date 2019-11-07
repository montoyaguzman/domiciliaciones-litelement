import { LitElement, html } from '@polymer/lit-element'

class UserForm extends LitElement {
    
    static get properties() {
        return {
            userForm: { type: String }
        }
    }

    constructor() {
        super()
        this.userForm = 'user-form'
    }

    render() {
        return html`
            <h3>${this.userForm} works!</h3>
        `
    }

}

customElements.define('user-form', UserForm)