import { LitElement, html, css } from 'lit-element'

class HomeComp extends LitElement {
    
    static get styles() {
        return [
            css`
                :host { 
                    display: block;
                }
                .logout {
                    display: flex;
                    flex-direction: row;
                    justify-content: flex-end;
                }
            `
        ]
    }

    static get properties() {
        return {
            nameComp: { type: String }
        }
    }

    constructor() {
        super()
        this.homeComp = 'home-comp'
    }

    render() {
        return html`
            <div class="logout">
                <a @click=${this.closeSession}>Close session</a>
            </div>
            <h1>${this.homeComp} works!</h1>
        `
    }

    closeSession() {
        let event = new CustomEvent('log-out', {
            detail: 'session closed!',
            bubbles: true,
            composed: true 
        })
        this.dispatchEvent(event)
    }

}

customElements.define('home-comp', HomeComp)