
import * as callService from './services.js'

export default class CardServices {
    
    constructor() {
        this.pathService = `/card`
    }
    
    getAllCard(params, user) {
        return callService.execGet(`${this.pathService}/`, params)
    }

    createCard(params, user) {
        return callService.execPost(`${this.pathService}/`, params, user)
    }
}