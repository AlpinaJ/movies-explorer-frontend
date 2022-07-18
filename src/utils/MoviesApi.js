const getMovies = () => {
    return fetch('https://api.nomoreparties.co/beatfilm-movies', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    }).then((res) => {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(`Ошибка при получении фильмов: ${res.status}`);
    });
};

export default getMovies;