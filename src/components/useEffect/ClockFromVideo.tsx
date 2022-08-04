import {useEffect, useState} from "react";
import {clearInterval} from "timers";

type ClockFromVideoPropsType = {

}

const get2DigitsString = (num: number) => num < 10  ? "0" + num : num

export const ClockFromVideo = (props: ClockFromVideoPropsType) => {

    const [date, setDate] = useState(new Date())

    useEffect( () => {
        const intervalID = setInterval( () => {
            setDate(new Date())
        }, 1000)

        return () => { clearInterval(intervalID) }

    }, [])


return (
    <div>
        <span> {get2DigitsString(date.getHours()) } </span>
        :
        <span> {get2DigitsString(date.getMinutes())} </span>
        :
        <span> {get2DigitsString(date.getSeconds())} </span>
    </div>
)


}


