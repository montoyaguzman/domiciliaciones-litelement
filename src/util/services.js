import { SERVER, PORT } from '../../config/config.js'

const urlBase = `${SERVER}:${PORT}`

function execGet(path, params) {
    console.log('====== EXECUTE execGet ======')
    
}

function execPost(path, params, body) {
    console.log('====== EXECUTE execPost ======')
    let url = `${urlBase}/${path}`
    let request = {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body),
    }
    return fetch(url, request)
    .then(response => response.json())
    .then(data => {
        return data
    })
    .catch(error => console.error(error))
}

function execUpdate(path, params, body) {
    console.log('====== EXECUTE execUpdate ======')
}

function execDelete(path, params) {
    console.log('====== EXECUTE execDelete ======')
}

export { execGet, execPost, execUpdate, execDelete}