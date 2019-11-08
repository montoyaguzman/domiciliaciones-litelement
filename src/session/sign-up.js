import { LitElement, html } from 'lit-element'

class SignUp extends LitElement {
    
    static get properties() {
        return {
            signUp: { type: String }
        }
    }

    constructor() {
        super()
        this.signUp = 'sign-up'
    }

    render() {
        return html`
            <h3>${this.signUp} works!</h3>
        `
    }

}

customElements.define('sign-up', SignUp)