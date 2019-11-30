
import * as callService from './services.js'

export default class DomiciliacionesServices {
    
    constructor() {
        this.pathService = `/domis`
    }
    
    getAllDomis(params, user) {
        return callService.execGet(`${this.pathService}/`, params)
    }

    createDomi(params, user) {
        return callService.execPost(`${this.pathService}/`, params, user)
    }
}