import { LitElement, html } from 'lit-element';
import { routerMixin  } from 'lit-element-router';

// aux files
import './link-app'
import './main-app'
 
class MyApp extends routerMixin(LitElement) {
    
    static get properties() {
        return {
            route: { type: String },
            params: { type: Object }
        }
    }

    static get routes() {
        return [
            { name: 'home', pattern: '/' }, 
            { name: 'login', pattern: 'login' }, 
            { name: 'signup', pattern: 'signup' },
            { name: 'create', pattern: 'create' }, 
            { name: 'query', pattern: 'query' },
            { name: 'edit', pattern: 'edit' },
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
          <link-app href='/'>Home</link-app>
          <link-app href='login'>Login</link-app>
          <link-app href='signup'>Sign Up</link-app>
          <link-app href='create'>Alta</link-app>
          <link-app href='query'>Consulta</link-app>
          <link-app href='edit'>Edicion</link-app>
          <link-app href='info'>Info</link-app>
          <link-app href='not-found'>Not found</link-app>
    
          <main-app current-route=${this.route}>
              <h1 route='home'>Home</h1>
              <h1 route='login'>Login</h1>
              <h1 route='signup'>Sign Up</h1>
              <h1 route='create'>Alta</h1>
              <h1 route='query'>Consulta</h1>
              <h1 route='edit'>Edicion</h1>
              <h1 route='info'>Info</h1>
              <h1 route='not-found'>Not Found</h1>
          </main-app>
        `
      }
}
 
customElements.define('my-app', MyApp)