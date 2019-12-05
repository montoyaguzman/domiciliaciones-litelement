import { LitElement, css } from 'lit-element'
import styles from '../../assets/css/styles.js'

export class UtilComp extends LitElement {

    static get styles() {
        return [
            styles,
            css`
                
            `
        ]
    }
    
    static get properties() {
        return {
            utilComp: { type: String }
        }
    }

    saluda() {
        console.log('saludo desde utils')
    }

}