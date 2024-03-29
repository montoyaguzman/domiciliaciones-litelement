import { UtilComp } from '../util/util-comp.js';
import { html, css } from 'lit-element';
import { routerMixin  } from 'lit-element-router';
import { classMap } from 'lit-html/directives/class-map'

import './routing-link.js'
import './routing-outlet.js'
import '../home-comp/home-comp.js'
import '../session/index-session.js'
import '../account/index-account.js'
import '../domi/index-domi.js'
import '../historic-comp/historic-comp.js'
import '../not-found/not-found.js'
 
class Routing extends routerMixin(UtilComp) {

    static get styles() {
        return [
            super.styles,
            css`
                
            `
        ]
    }
    
    static get properties() {
        return {
            route: { type: String },
            params: { type: Object },
            optionsIsHidden: { type: Object }
        }
    }

    static get routes() {
        return [
            { name: 'home', pattern: '/' }, 
            { name: 'account', pattern: 'account' }, 
            { name: 'domi', pattern: 'domi' },
            { name: 'historic', pattern: 'historic' },
            { name: 'not-found', pattern: '*' }
        ];
    }
    
    constructor() {
        super()
        this.route = ''
        this.params = {}
        
    }

    onRoute(route, params, query, data) {
        this.route = route
        this.params = params
        // console.log(`route: ${route} | params: ${params}`)
        // console.log(`query: ${query} | data: ${data}`)
    }

    render() {
        return html`
          <div class="menu">
            <div></div>
            <div class="options ${classMap(this.optionsIsHidden)}">
                <div class="option">
                    <img alt="home" src="../assets/img/home-ico.png">
                    <br/>
                    <routing-link href='/'>Home</routing-link>
                </div> 
                <div class="option">
                    <img alt="home" src="../assets/img/personal-ico.png">
                    <br/>
                    <routing-link href='account'>Cuentas</routing-link>
                </div>
                <div class="option">
                    <img alt="payment" src="../assets/img/payment-ico.png">
                    <br/>
                    <routing-link href='domi'>Pagos</routing-link>
                </div>
                <div class="option">
                    <img alt="history" src="../assets/img/history-ico.png">
                    <br/>
                    <routing-link href='historic'>Historico</routing-link>
                </div>                
            </div>
            <div></div>
          </div>

          <routing-outlet current-route=${this.route}>
              <home-comp route='home'>Home</home-comp>
              <index-session route='session'>Session |</index-session>
              <index-account route='account'>Accounts</index-account>
              <index-domi route='domi'>Domiciliaciones</index-domi>
              <historic-comp route='historic'>History</historic-comp>
              <not-found route='not-found'>Not Found</not-found>
          </routing-outlet>
        `
      }
}
 
customElements.define('index-routing', Routing)