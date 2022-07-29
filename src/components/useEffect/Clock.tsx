import {useEffect, useState} from "react";


export const CounterEffect = () => {

    const[date, setDate] = useState(new Date())

    let time = new Date()

    useEffect( () => {
        setTimeout( () => {
            setDate(new Date())
        }, 1000)
    }, [])

    return(
        <div>
            Hello, it's {time.getHours()}:{time.getMinutes()}:{time.getSeconds()}
        </div>
    )
}

