import { html, css } from 'lit-element'

class UserTable extends UtilComp {

    static get styles() {
        return [
            super.styles,
            css`
                
            `
        ]
    }
    
    static get properties() {
        return {
            // userTable: { type: String }
            users: { type: Array }
        }
    }

    constructor() {
        super()
        // this.userTable = 'user-table'
        this.users = [
            { name: 'jorge', app: 'contreras', apm: 'garcia', cellphone: '1234', account:'9090', user: 'jcontreras@gmail.com'},
            { name: 'daniel', app: 'gomez', apm: 'soto', cellphone: '2345', account:'8080', user: 'dgomez@gmail.com'},
            { name: 'david', app: 'lopez', apm: 'bautista', cellphone: '3456', account:'7070', user: 'dlopez@gmail.com'}
        ]
    }

    render() {
        return html`
            <!--<h3>${this.userTable} works!</h3>-->
            <div class="card inComplete">
                <span>aqui van los filtros....</span>
            </div>
            <div class="card inComplete">
                <h3>Consulta de clientes</h3>
                <table style="width:100%;" border="1">
                    <tr>
                        <th>Nombre</th>
                        <th>Celular</th>
                        <th>No. cuenta</th>
                        <th>Correo</th>
                    </tr>
                    ${this.users.map((user) => html`
                        <tr>
                            <th>${`${user.name} ${user.app} ${user.apm}`}</th>
                            <th>${user.cellphone}</th>
                            <th>${user.account}</th>
                            <th>${user.user}</th>
                        </tr>
                    `)}
                </table>
            </div>
        `
    }

}

customElements.define('user-table', UserTable)