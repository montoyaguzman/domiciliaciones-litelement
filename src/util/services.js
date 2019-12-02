import { SERVER, PORT, API_TOKEN } from './config.js';

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

function execPost(path, params, body) {
    
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
    console.log(auths)
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

    // requestBody.headers.set('Authorization', 'Basic ' + btoa(auth.username + ":" + auth.password));


    console.log(requestBody)

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

function execUpdate(path, params, body) {
    console.log('====== EXECUTE execUpdate ======')
}

function execDelete(path, params) {
    console.log('====== EXECUTE execDelete ======')
}

export { execGet, execPost, execUpdate, execDelete, login }