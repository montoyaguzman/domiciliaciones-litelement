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
            dataList: { type: Array }
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
                    </tr>
                </thead>
                <tbody>
                    ${this.dataList.map(element => {
                        return html`
                            <tr>
                                ${(Object.values(element)).map( (value) => 
                                    html`
                                        <td>${value}</td>
                                    `
                                )}    
                            </tr>
                        `
                    })}
                </tbody>
            </table>

        `
    }

}

customElements.define('table-comp', TableComp)