function leadingZero(token) {
    return ("0" + token).slice(-2)
}

function leadingZeroMilliseconds(token) {
    return ("00" + token).slice(-3)
}

function toNormHTMLDateFormat(msTime) {
    let date = new Date(msTime);
    let year = date.getFullYear();
    let month = leadingZero(date.getMonth() + 1); // подсчет начинается с 0, поэтому увеличим на 1
    let day = leadingZero(date.getDate());
    let hours = leadingZero(date.getHours());
    let minutes = leadingZero(date.getMinutes());
    let seconds = leadingZero(date.getSeconds());
    let milliseconds = leadingZeroMilliseconds(date.getMilliseconds());

    let result = `${year}-${month}-${day}T${hours}:${minutes}:${seconds}.${milliseconds}`;

    return result;
}

export {toNormHTMLDateFormat, leadingZero};