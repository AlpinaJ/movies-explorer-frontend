class Api {
    constructor(url, headers) {
        this._url = url;
        this._headers = headers;
    }

    _handleResponse(res) {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(`Error while fetching data: ${res.status}`);
    }

    register(name, email, password) {
        return fetch(`${this._url}/signup`, {
            method: 'POST',
            headers: this._headers,
            body: JSON.stringify({email, password, name}),
            credentials: 'include',
        })
            .then((res) => this._handleResponse(res))
    }
}


const api = new Api('http://localhost:3000',
    {
        // authorization: 'ed992258-c9b2-4aaa-a5d2-85fccb4ac919',
        'Content-Type': 'application/json'
    });

export default api;