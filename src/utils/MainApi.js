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

    login(email, password) {
        return fetch(`${this._url}/signin`, {
            method: 'POST',
            headers: this._headers,
            body: JSON.stringify({email, password}),
            credentials: 'include',
        })
            .then((res) => this._handleResponse(res))
    }

    logout() {
        return fetch(`${this._url}/signout`, {
            method: 'POST',
            credentials: 'include',
        });
    }

    getUserInfo() {
        return fetch(`${this._url}/users/me`, {
            headers: this._headers,
            credentials: 'include',
        }).then((res) => {
            return this._handleResponse(res)
        });
    }

    patchUserInfo(input) {
        return fetch(`${this._url}/users/me`, {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify({
                name: input.name,
                email: input.email
            }),
            credentials: 'include',
        }).then((res) => {
            return this._handleResponse(res)
        });
    }

    getMovies() {
        return fetch(`${this._url}/movies`, {
            method: "GET",
            headers: this._headers,
            credentials: 'include',
        }).then(this._handleResponse);
    }

    saveMovie(country, director, duration, year, description, image, trailerLink,
              thumbnail, movieId, nameRU, nameEN) {

        return fetch(`${this._url}/movies`, {
            method: "POST",
            headers: this._headers,
            body: JSON.stringify({
                country,
                director,
                duration,
                year,
                description,
                image,
                trailerLink,
                movieId,
                nameRU,
                nameEN,
                thumbnail,
            }),
            credentials: 'include',
        }).then((res) => {
            return this._handleResponse(res)
        });
    }

    deleteMovie(movieId) {
        return fetch(`${this._url}/movies/${movieId}`, {
            method: "DELETE",
            headers: this._headers,
            credentials: 'include',
        }).then((res) => {
            return this._handleResponse(res)
        });
    }
}

//
// const api = new Api('http://localhost:3000',
//     {
//         // authorization: 'ed992258-c9b2-4aaa-a5d2-85fccb4ac919',
//         'Content-Type': 'application/json'
//     });


const api = new Api('https://api.AlpinaJ-diplom.nomoredomains.xyz',
    {
        // authorization: 'ed992258-c9b2-4aaa-a5d2-85fccb4ac919',
        'Content-Type': 'application/json'
    });

export default api;