import { html, css } from 'lit-element'
import { UtilComp } from '../util/util-comp.js'
import { classMap } from 'lit-html/directives/class-map'

import '../routing/index-routing.js'
import '../session/index-session.js'

class WorkspaceComp extends UtilComp {
    
    static get styles() {
        return [
            super.styles,
            css`
                :host { 
                    display: block;
              
                }
                
                .banner {
                    display:  grid;
                    grid-template-columns: 40% repeat(2, 20%) 20%;
                    padding: 30px;
                    background-color: #072146;
                    color: #ffffff;
                }

                .logout {
                    text-align: end;
                }

                .slidesContainer {
                    display: grid;
                    grid-template-columns: 40% 20% 40%;
                    matgin-top: 15px;
                }

                .navDiv {
                    width: 100%;
                    color: #ffffff;
                }

                .navStyle {
                    display: flex;
                    flex-direction: row;
                    justify-content: center;
                    background-color: #1d73b2;
                    border-radius: 15px;
                    margin-top: 10px;
                }

                .listStyle {
                    display: flex;
                    flex-direction: row;
                    padding: 0;
                    list-style: none;
                }

                img {
                    padding: 0 10px;
                    cursor: pointer;
                }

                a {
                    margin: 5px;
                    padding: 12px;
                }

                .activeClass {
                    border-bottom: 2px solid #fff;
                }

            `
        ]
    }

    static get properties() {
        return {
            workspaceComp: { type: String },
            menu: { type: Array },
            userLogon: { type: Object },
            sessionPage: { type: String },
            activeClass: { type: Object },
            optionsIsHidden: { type: Object }
        }
    }

    constructor() {
        super()
        this.workspaceComp = 'App de domiciliaciones'
        this.userLogon = localStorage.getItem('userName') || null
        this.sessionPage = 'login'
        this.activeClassSignup = { activeClass: false }
        this.activeClassLogin = { activeClass: true }
        this.optionsIsHidden = { optionsIsHidden: true }

        document.addEventListener('log-in', (e) => {
            let login = e.detail.login || ''
            if (login) {
                localStorage.setItem('userName', e.detail.email)
                this.userLogon = localStorage.getItem('userName')
            }
        })
        
        document.addEventListener('log-out', (e) => {
            localStorage.clear()
            this.userLogon = null
        })
        
    }

    render() {

        return html`
            <div class="banner">
                <div class="titleApp">
                    <h1>${this.workspaceComp}</h1>
                </div>
                <div></div>
                <div></div>
                ${ this.userLogon ? 
                    html`
                    <div class="logout">
                        <img 
                            width="30px" 
                            height="30px" 
                            alt="menu" 
                            src="../assets/img/menu.png"
                            @click=${this.showMenu}
                        >                        
                        <img 
                            width="30px" 
                            height="30px" 
                            alt="salir" 
                            src="../assets/img/go-out.png"
                            @click=${this.closeSession}
                        >
                    </div>`
                    : html`<div></div>`
                }
            </div>
            ${ this.userLogon
                ? html`
                    <index-routing 
                        .optionsIsHidden=${this.optionsIsHidden}>
                    </index-routing>
                  `
                : html`
                    <div class="slidesContainer">
                        <div></div>
                        <div class="navDiv">
                        
                        <nav class="navStyle">
                            <ul class="listStyle">
                                <li>
                                    <a id='login'
                                        class=${classMap(this.activeClassLogin)}
                                        @click=${this.handleIndexSession}>
                                        Login
                                    </a>
                                </li>
                                <li>
                                    <a id='signup'
                                        class=${classMap(this.activeClassSignup)}  
                                        @click=${this.handleIndexSession}>
                                        Registro
                                    </a>
                                </li>
                            </ul>
                        </nav>
                        </div>
                        <div></div>
                        </div>
                    </div>
                    <index-session .sessionPage=${this.sessionPage}></index-session>
                `
            }
        

        `
    }

    updated(changedProperties) {
        changedProperties.forEach((oldValue, propName) => {
            // console.log(`papa ${propName} changed. oldValue: ${oldValue}`)
        })
    }

    closeSession() {
        let event = new CustomEvent('log-out', {
            detail: 'session closed!',
            bubbles: true,
            composed: true 
        })
        this.dispatchEvent(event)
    }

    handleIndexSession(e) {
        this.sessionPage = e.target.id
        if(this.sessionPage == 'login') {
            this.activeClassLogin.activeClass = true
            this.activeClassSignup.activeClass = false
        } else {
            this.activeClassSignup.activeClass = true
            this.activeClassLogin.activeClass = false
        }
        // console.log('Login', this.activeClassLogin.activeClass)
        // console.log('Signup', this.activeClassSignup.activeClass)
        this.requestUpdate()
    }

    showMenu() {
        console.log('switch menu...')
        let newValue = !this.optionsIsHidden.optionsIsHidden
        this.optionsIsHidden = { optionsIsHidden: newValue }
        console.log('this.optionsIsHidden =>', this.optionsIsHidden)
    }

}

customElements.define('workspace-comp', WorkspaceComp)