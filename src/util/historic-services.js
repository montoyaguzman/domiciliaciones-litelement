
import * as callService from './services.js'

export default class HistoricServices {
    
    constructor() {
        this.pathService = `/historic`
    }
    
    getAllHistoric(params, user) {
        return callService.execGet(`${this.pathService}/`, params)
    }

}