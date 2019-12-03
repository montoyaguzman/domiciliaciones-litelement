import { html, css } from 'lit-element'
import { UtilComp } from '../util/util-comp'

class TableComp extends UtilComp {
    
    static get styles() {
        return [
            super.styles,
            css`
                :host {
                    display: flex;
                    flex-direction: column;
                    width: 100%;
                }


                thead {
                    color: #ffffff;
                    background-color: #1d7bb2;   
                }

                tbody {
                    color: black;
                    background-color: #f2f2f2;
                }

                tbody tr:hover {
                    background-color: #ddd;
                }
                
                table, th, td {
                    border: 1px solid black;
                }

                #dataTable {
                    border-collapse: collapse;
                    width: 100%;
                }

                #dataTable td, #dataTable th {
                    border: 1px solid #ddd;
                    padding: 8px;
                }

            `
        ]
    }

    static get properties() {
        return {
            tableComp: { type: String },
            tableTile: { type: String },
            nameColumns: { type: Array },
            dataList: { type: Array },
            actionsList: { type: Array }
        }
    }

    constructor() {
        super()
        this.tableComp = 'table-comp'
    }

    render() {
        return html`
            <!-- <h1>${this.tableComp} works!</h1> -->
            <h3>${this.tableTitle}</h3>
            <table id="dataTable">
                <thead>
                    <tr>
                        ${ this.nameColumns
                            ? this.nameColumns.map( column => html`<td>${column.name}</td>`)
                            : html`<div>no existe nameColumns</div>`
                        }
                        ${this.actionsList
                            ? html`<td>Acciones</td>`
                            : html``
                        }
                    </tr>
                </thead>
                <tbody>
                    ${this.dataList.map((element, index) => {
                        return html`
                            <tr>
                                ${(Object.values(element)).map(value => 
                                    html`
                                        <td>${value}</td>
                                    `
                                )}
                                ${this.actionsList
                                    ? html`<td>${this.getActions(this.actionsList, index)}</td>` 
                                    : html`` 
                                }    
                            </tr>
                        `
                    })}
                </tbody>
            </table>

        `
    }

    getActions(actionsList, index) {
        return actionsList.map((action) => 
            html`
                <img 
                    alt=${action.name} 
                    src="../assets/img/${action.action}.png" 
                    @click=${event => this.execEvent(index, action.action)}
                />
            `)
    }

    execEvent(id, action) {
        let dispatcher = { id: id, action: action }
        let newEvent = new CustomEvent('exec-event', {
            detail: dispatcher,
            bubbles: true,
            composed: true 
        })
        this.dispatchEvent(newEvent)
    }

}

customElements.define('table-comp', TableComp)