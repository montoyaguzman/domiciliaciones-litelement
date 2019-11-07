import { LitElement, html } from 'lit-element'
import { routerOutletMixin } from 'lit-element-router'

export class RoutingOutlet extends routerOutletMixin(LitElement) {
    
}

customElements.define('routing-outlet', RoutingOutlet)