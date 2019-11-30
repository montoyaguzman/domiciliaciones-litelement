
import * as callService from './services.js'

export default class UserServices {
    
    constructor() {
        this.pathService = `/users`
    }
    
    signup(params, user) {
        return callService.execPost(`${this.pathService}/sign-up`, params, user)
    }

    login(params, user) {
        return callService.execPost(`${this.pathService}/sign-in`, params, user)
    }
}