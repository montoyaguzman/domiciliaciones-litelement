import { LitElement, html } from 'lit-element';
import { routerMixin  } from 'lit-element-router';

import './routing-link.js'
import './routing-outlet.js'

import '../home-comp/home-comp.js'
import '../session/index-session.js'
import '../user/index-user.js'
import '../domi/index-domi.js'
import '../info-comp/info-comp.js'
import '../not-found/not-found.js'
 
class Routing extends routerMixin(LitElement) {
    
    static get properties() {
        return {
            route: { type: String },
            params: { type: Object }
        }
    }

    static get routes() {
        return [
            { name: 'home', pattern: '/' }, 
            { name: 'session', pattern: 'session' },
            { name: 'user', pattern: 'user' }, 
            { name: 'domi', pattern: 'domi' },
            { name: 'info', pattern: 'info' },
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
        console.log(`route: ${route} | params: ${params}`)
        // console.log(`query: ${query} | data: ${data}`)
    }

    render() {
        return html`
          <routing-link href='/'>Home |</routing-link>
          <routing-link href='session'>Session |</routing-link>
          <routing-link href='user'>Users |</routing-link>
          <routing-link href='domi'>Domiciliaciones |</routing-link>
          <routing-link href='info'>Info |</routing-link>
          <routing-link href='not-found'>Not found |</routing-link>
    
          <routing-outlet current-route=${this.route}>
              <home-comp route='home'>Home</home-comp>
              <index-session route='session'>Session</index-session>
              <index-user route='user'>Usuarios</index-user>
              <index-domi route='domi'>Domiciliaciones</index-domi>
              <info-comp route='info'>Info</info-comp>
              <not-found route='not-found'>Not Found</not-found>
          </routing-outlet>
        `
      }
}
 
customElements.define('index-routing', Routing)