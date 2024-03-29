import { LitElement, html } from 'lit-element'
import { routerLinkMixin } from 'lit-element-router'

export class RoutingLink extends routerLinkMixin(LitElement) {
    
    static get properties() {
        return {
            href: { type: String }
        }
    }
    
    constructor() {
        super();
        this.href = ''
    }
    
    render() {
        return html`
            <a href='${this.href}' @click='${this.linkClick}'><slot></slot></a>
        `
    }
    
    linkClick(event) {
        event.preventDefault()
        this.navigate(this.href)
    }
}

customElements.define('routing-link', RoutingLink)