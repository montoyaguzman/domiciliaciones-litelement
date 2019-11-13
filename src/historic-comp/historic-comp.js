import { LitElement, html } from 'lit-element'

class HistoricComp extends LitElement {
    
    static get properties() {
        return {
            // historicComp: { type: String }
            payments: { type: Array }
        }
    }

    constructor() {
        super()
        // this.historicComp = 'historic-comp'
        this.payments = [
            { alias: '1', IdPayment: '2', IdCard: '2', IdAgreement: '3', alias: 'CFE casa', description: 'pago de la luz', cardNumber: '1234', reference: '0879', paymentDate: '12/11/2019', chargeDate: '13/11/2019', amount: '$100.00', periodicity: 'mensual', periodicityStatus: 'active', status: 'inactive', },
            { alias: '2', IdPayment: '3', IdCard: '4', IdAgreement: '5', alias: 'telefono de mamá', description: 'telefono del pueblito', cardNumber: '1234', reference: '0809', paymentDate: '1/11/2019', chargeDate: '1/11/2019', amount: '$300.00', periodicity: 'mensual', periodicityStatus: 'active', status: 'active', }
        ]
    }

    render() {
        return html`
            <!-- <h1>${this.historicComp} works!</h1> -->
            <div class="card">
                <span>aqui van los filtros....</span>
            </div>
            <div class="card">
                <h3>Historico de pagos</h3>
                <table style="width:100%;" border="1">
                    <tr>
                        <th>Alias del servicio</th>
                        <th>Descripcion</th>
                        <th>Numero de tarjeta</th>
                        <th>Referencia</th>
                        <th>Fecha de pago</th>
                        <th>Fecha de cargo</th>
                        <th>Cantidad</th>
                        <th>Periodicidad</th>
                        <th>Estatus de periodicidad</th>
                        <th>Estatus de domiciliacion</th>
                    </tr>
                    ${this.payments.map((payment) => html`
                        <tr>
                            <th>${payment.alias}</th>
                            <th>${payment.Descripcion}</th>
                            <th>${payment.cardNumber}</th>
                            <th>${payment.reference}</th>
                            <th>${payment.paymentDate}</th>
                            <th>${payment.chargeDate}</th>
                            <th>${payment.amount}</th>
                            <th>${payment.Periodicidad}</th>
                            <th>${payment.periodicityStatus}</th>
                            <th>${payment.status}</th>
                        </tr>
                    `)}
                </table>
            </div>

        `
    }

}

customElements.define('historic-comp', HistoricComp)