
import * as callService from './services.js'

export default class UserServices {
    
    constructor() {
        this.pathService = `/users`
    }
    
    createUser(user) {
        return callService.execPost(`${this.pathService}/sign-up`, undefined, user)
    }
}