
import * as callService from './services.js'

export default class CatalogServices {
    
    constructor() {
        this.pathService = `/catalog`
    }
    
    getAllCatalog(params, user) {
        return callService.execGet(`${this.pathService}/`, params)
    }

}