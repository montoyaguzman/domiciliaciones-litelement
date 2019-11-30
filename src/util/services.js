import { SERVER, PORT } from './config.js';

const urlBase = `${SERVER}:${PORT}/api`

async function execGet(path, params) {
    console.log('====== EXECUTE execGet ======')
    let url = `${urlBase}${path}`
    if (params) {
        url = new URL(url)
        Object.keys(data).forEach(key => url.searchParams.append(key, data[key]))
    }
    let requestBody = {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin' : '*'
        }
    }

    let request = await fetch(url, requestBody)
    if (request.status === 200) {
        return request.json()
    } else {
        console.log('error del servicio')
        return resolve({})
    }
    
    
}

async function execPost(path, params, body) {
    
    console.log('========= execPost =========')
    let url = `${urlBase}${path}`
    let requestBody = {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin' : '*'
        },
        body: JSON.stringify(body),
    }

    let request = await fetch(url, requestBody)
    if (request.status === 200) {
        return request.json()
    } else {
        console.log('error del servicio')
        return resolve({})
    }

}

function execUpdate(path, params, body) {
    console.log('====== EXECUTE execUpdate ======')
}

function execDelete(path, params) {
    console.log('====== EXECUTE execDelete ======')
}

export { execGet, execPost, execUpdate, execDelete}