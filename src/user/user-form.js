import { html, css } from 'lit-element'

class UserForm extends UtilComp {

    static get styles() {
        return [
            super.styles,
            css`
                
            `
        ]
    }
    
    static get properties() {
        return {
            // userForm: { type: String }
            user: { type: Object }
        }
    }

    constructor() {
        super()
        // this.userForm = 'user-form'
        this.user = {
            name: '',
            app: '',
            apm: '',
            cellphone: '',
            account: '',
            email: '',
            password: '',
        }
    }

    render() {
        return html`
            <!-- <h3>${this.userForm} works!</h3> -->
            <div class="card inComplete">
                <h3>Registro de clientes</h3>
                <input 
                    type="text" 
                    id="name" 
                    name="name"
                    .value=${this.user.name} 
                    @change=${e => { this.user.name = e.currentTarget.value } }     
                    placeholder="name"
                >
                <input 
                    type="text" 
                    id="app" 
                    name="app"
                    .value=${this.user.app} 
                    @change=${e => { this.user.app = e.currentTarget.value } }     
                    placeholder="app"
                >
                <input 
                    type="text" 
                    id="apm" 
                    name="apm"
                    .value=${this.user.apm} 
                    @change=${e => { this.user.apm = e.currentTarget.value } }     
                    placeholder="apm"
                >
                <input 
                    type="text" 
                    id="cellphone" 
                    name="cellphone"
                    .value=${this.user.cellphone} 
                    @change=${e => { this.user.cellphone = e.currentTarget.value } }     
                    placeholder="cellphone"
                >
                <input 
                    type="text" 
                    id="account" 
                    name="account"
                    .value=${this.user.account} 
                    @change=${e => { this.user.account = e.currentTarget.value } }     
                    placeholder="cuenta/tarjeta"
                >
                <input 
                    type="text" 
                    id="email" 
                    name="email"
                    .value=${this.user.email} 
                    @change=${e => { this.user.email = e.currentTarget.value } }     
                    placeholder="correo"
                >
                <input 
                    type="password" 
                    id="password" 
                    name="password"
                    .value=${this.user.password} 
                    @change=${e => { this.user.password = e.currentTarget.value } }    
                    placeholder="contraseña"
                >
                <button @click=${this.saveUser}>Guardar</button>
            </div>
        `
    }

    cleanForm() {
        this.shadowRoot.getElementById('name').value = ''
        this.shadowRoot.getElementById('app').value = ''
        this.shadowRoot.getElementById('apm').value = ''
        this.shadowRoot.getElementById('cellphone').value = ''
        this.shadowRoot.getElementById('account').value = ''
        this.shadowRoot.getElementById('password').value = ''
    }

    cleanUserObj() {
        this.user = {
            name: '',
            app: '',
            apm: '',
            cellphone: '',
            account: '',
            email: '',
            password: ''
        }
    }

    saveUser() {
        services.execPost('user', null, this.user).then((response) => {
            if(response && response.code === 200) {
                alert('registro exitoso!')
                this.cleanUserObj()
                this.cleanForm()
            } else {
                alert('error en registro')
            }
        })
    }

}

customElements.define('user-form', UserForm)