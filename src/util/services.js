import { SERVER, PORT, API_TOKEN } from './config.js';

const urlBase = `${SERVER}:${PORT}/api`

async function execGet(path, params, auth) {
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
            'Access-Control-Allow-Origin' : '*',
            'Authorization': `Bearer ${auth}`
        }
    }

    let request = await fetch(url, requestBody)
    if (request.status === 200 || request.status === 201) {
        return request.json()
    } else {
        console.log('error del servicio')
        return resolve({})
    }
    
    
}

function execPost(path, params, body, auth) {
    
    console.log('========= execPost =========', body)
    let url = `${urlBase}${path}`
    let requestBody = {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin' : '*',
            'Authorization': `Bearer ${auth}`
        },
        body: JSON.stringify(body),
    }

    return new Promise((resolve, reject) => {
        fetch(url, requestBody)
            .then(response => {                  
                if(!response.ok)
                    return response.json()
                resolve(response.status != '204' ? response.json() : response)
            })
            .then(data => reject(data))
            .catch(error => reject(error))
    })

}

function login(path, auth, body) {
    body.apiKeyToken = API_TOKEN
    console.log('========= execPost =========')
    let url = `${urlBase}${path}`
    let str = `${auth.username}:${auth.password}`
    let auths = btoa(str)
    let requestBody = {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin' : '*',
            'Authorization': `Basic ${auths}`
        },
        credentials: 'same-origin',
        body: JSON.stringify(body),
    }

    return new Promise((resolve, reject) => {
        fetch(url, requestBody)
            .then(response => {                  
                if(!response.ok)
                    return response.json()
                resolve(response.status != '204' ? response.json() : response)
            })
            .then(data => reject(data))
            .catch(error => reject(error))
    })

}

async function execPut(path, params, body, auth) {
    console.log('====== EXECUTE execUpdate ======', body)
    let url = `${urlBase}${path}`
    let requestBody = {
        method: 'PUT',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin' : '*',
            'Authorization': `Bearer ${auth}`
        },
        body: JSON.stringify(body),
    }

    let request = await fetch(url, requestBody)
    if (request.status) {
        return {id: request.status}
    } else {
        console.log('error del servicio')
        return resolve({})
    }
}

function execDelete(path, params, auth) {
    console.log('====== EXECUTE execDelete ======')
    let url = `${urlBase}${path}`
    let requestBody = {
        method: 'DELETE',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin' : '*',
            'Authorization': `Bearer ${auth}`
        }
    }

    return new Promise((resolve, reject) => {
        fetch(url, requestBody)
            .then(response => {                  
                if(!response.ok)
                    return response.json()
                resolve(response.status != '204' ? response.json() : response)
            })
            .then(data => reject(data))
            .catch(error => reject(error))
    })
}

export { execGet, execPost, execPut, execDelete, login }