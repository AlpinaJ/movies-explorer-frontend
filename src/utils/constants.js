export function minutesToHours(min){
    const minutes = min % 60;
    const hours = Math.trunc(min / 60);
    if (minutes === 0) {
        return `${hours}ч`;
    }
    if (min < 60) {
        return `${min}м`;
    }
    return `${hours}ч${minutes}м`;
}

export  function stringToBool(string) {
    return string !== "false";
}

export const initialMoviesNumberBigDesktop=12;
export const initialMoviesNumberDesktop=9;
export const initialMoviesNumberPad=8;
export const initialMoviesNumberMobile=5;
export const addMoviesNumberBigDesktop=4;
export const addMoviesNumberDesktop=3;
export const addMoviesNumberDefault=2;
export const shortMovieDuration = 40;