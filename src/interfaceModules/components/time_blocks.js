import {leadingZero} from "../../services/time_services.js"

function TimeBlock({ms}) {
    let date = new Date(ms);
    let year = date.getFullYear();
    let month = leadingZero(date.getMonth());
    let day = leadingZero(date.getDate());
    let hours = leadingZero(date.getHours());
    let minutes = leadingZero(date.getMinutes());

    return (
        <span>{day}.{month}.{year} {hours}:{minutes}</span>
    );
}

export {TimeBlock}