
import * as callService from './services.js'

export default class DomisServices {
    
    constructor() {
        this.pathService = `/payments`
    }
    
    getAllDomis(params, auth) {
        return callService.execGet(`${this.pathService}/`, params, auth)
    }

    createDomi(params, domi, auth) {
        return callService.execPost(`${this.pathService}/`, params, domi, auth)
    }
}