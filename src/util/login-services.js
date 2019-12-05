
import * as callService from './services.js'

export default class LoginServices {
    
    constructor() {
        this.pathService = `/auth`
    }
    
    signup(params, user) {
        return callService.execPost(`${this.pathService}/sign-up`, params, user)
    }

    login(auth, body) {
        return callService.login(`${this.pathService}/sign-in`, auth, body)
    }
}