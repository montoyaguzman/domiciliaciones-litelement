
import * as callService from './services.js'

export default class CardServices {
    
    constructor() {
        this.pathService = `/cards`
    }
    
    getAllCards(params, auth) {
        return callService.execGet(`${this.pathService}/`, params, auth)
    }

    createCard(params, card, auth) {
        return callService.execPost(`${this.pathService}/`, params, card, auth)
    }

    deleteCard(params, urlParameter, auth) {
        return callService.execDelete(`${this.pathService}/${urlParameter}`, params, auth)
    }

    editCard() {

    }
}