import {useMemo, useState} from "react";

function generateData() {
    return 123
}


export const Counter = () => {

    /*const initValue = generateData()*/
    //const initValue = useMemo(generateData, [])

    const[counter, setCounter] = useState(generateData)

    const changer = (state: number) => state+1

    return (
        <div>

            <button onClick={() => setCounter(changer)}> + </button>
            {counter}


        </div>
    )
}