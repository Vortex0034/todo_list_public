import {leadingZero} from "../../services/time_services.js"

function TimeBlock({ms, isSoonLate, isDone}) {
    let date = new Date(ms);
    let year = date.getFullYear();
    let month = leadingZero(date.getMonth() + 1);
    let day = leadingZero(date.getDate());
    let hours = leadingZero(date.getHours());
    let minutes = leadingZero(date.getMinutes());

    if (isSoonLate && !isDone)
        return (
            <span className="soon-late-date">{day}.{month}.{year} {hours}:{minutes}</span>
        )
    else
        return (
            <span className="normal-date">{day}.{month}.{year} {hours}:{minutes}</span>
        );
}

export {TimeBlock}