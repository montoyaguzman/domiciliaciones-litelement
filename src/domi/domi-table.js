import { html, css } from 'lit-element'
import { UtilComp } from '../util/util-comp.js'
import DomisServices from '../util/domis-services.js'

class DomiTable extends UtilComp {
    
    static get styles() {
        return [
            super.styles,
            css`
                
            `
        ]
    }
    
    static get properties() {
        return {
            // domiTable: { type: String },
            domisServices: { type: Object },
            selectOptions: { type: Array },
            domisTitle: { type: String },
            domisColumns: { type: Array },
            domis: { type: Array },
            actionsCards: { type: Array },
        }
    }

    constructor() {
        super()
        // this.domiTable = 'domi-table'
        this.domisServices = new DomisServices()
        this.selectOptions = [
            { id: 1, description: 'Alias' },
            { id: 2, description: 'Monto' }
        ]
        this.tableTitle = 'Domiciliaciones activas'
        this.domisColumns = [
            { id: 1, name: 'idCard' },
            { id: 2, name: 'idAgreement' },
            { id: 3, name: 'Alias' },
            { id: 4, name: 'Descripcion' },
            { id: 5, name: 'Referencia' },
            { id: 6, name: 'Dia de pago' },
            { id: 7, name: 'Estatus' }
        ],
        this.actionsDomis = [
            { id: 1, name: 'edita', action: 'edit' },
            { id: 2, name: 'elimina', action: 'delete' }
            
        ]
        this.domis = []
        this.getDomis()
    }

    render() {
        return html`
            <!-- <h3>${this.domiTable} works!</h3> -->
            <!--
            <div class="card inComplete">
                <filter-comp
                    .selectOptions=${this.selectOptions}
                >
                </filter-comp>
            </div>
            -->
            <div class="card inComplete">
                <table-comp
                    .tableTitle=${this.tableTitle} 
                    .nameColumns=${this.domisColumns}
                    .dataList=${this.domis}
                    .actionsList=${this.actionsDomis}
                    >
                </table-comp>
            </div>
        `
    }

    getDomis() {
        let params = undefined
        let auth = localStorage.getItem('token') || ''
        this.domisServices.getAllDomis(params, auth).then((response) => {
            if(response) {
                let domis = []
                response.data.map((domi) => {
                    let newObject = { 
                        idCard: domi.idCard,
                        idAgreement: domi.idAgreement,
                        alias: domi.alias,
                        description: domi.description,
                        reference: domi.reference,
                        paymentDate: domi.paymentDate,
                        status: domi.status,
                    }
                    domis.push(newObject)
                })
                this.domis = domis
            } else {
                alert('Error en getDomis')
            }
        }).catch(error => alert('Ha ocurrido un problema', error) )
    }

}

customElements.define('domi-table', DomiTable)