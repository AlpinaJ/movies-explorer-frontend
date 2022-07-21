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
