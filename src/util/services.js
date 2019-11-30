import { SERVER, PORT } from './config.js';

const urlBase = `${SERVER}:${PORT}/api`
// validateCors()

function execGet(path, params) {
    console.log('====== EXECUTE execGet ======')
    
}

function execPost(path, params, body) {
    
    console.log('====== EXECUTE execPost ======')
    let url = `${urlBase}${path}`

    let request = {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        mode: 'no-cors',
        body: JSON.stringify(body),
    }

    return new Promise((resolve, reject) => {
        fetch(url, request)
        .then(response => response.json())
        .then(data => reject(data ? JSON.parse(data) : {}))
        .catch(error=> reject(error))
    })
    
}

function execUpdate(path, params, body) {
    console.log('====== EXECUTE execUpdate ======')
}

function execDelete(path, params) {
    console.log('====== EXECUTE execDelete ======')
}

function validateCors() {
    if(enabledCors) {
        this.headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin' : '*'
        }
    } else {
        this.headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    }
}

export { execGet, execPost, execUpdate, execDelete}