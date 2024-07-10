import {leadingZero} from "../../services/time_services.js"

function TimeBlock({ms, isSoonLate}) {
    let date = new Date(ms);
    let year = date.getFullYear();
    let month = leadingZero(date.getMonth());
    let day = leadingZero(date.getDate());
    let hours = leadingZero(date.getHours());
    let minutes = leadingZero(date.getMinutes());

    if (isSoonLate)
        return (
            <span className="soon-late-date">{day}.{month}.{year} {hours}:{minutes}</span>
        )
    else
        return (
            <span className="normal-date">{day}.{month}.{year} {hours}:{minutes}</span>
        );
}

export {TimeBlock}