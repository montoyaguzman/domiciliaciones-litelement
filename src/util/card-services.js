
import * as callService from './services.js'

export default class CardServices {
    
    constructor() {
        this.pathService = `/cards`
    }
    
    getAllCards(params, auth) {
        return callService.execGet(`${this.pathService}/`, params, auth)
    }

    createCard(params, user) {
        return callService.execPost(`${this.pathService}/`, params, user)
    }
}