import {useEffect, useState} from "react";


export const CounterEffect = () => {

    const [counter, setCounter] = useState(1)
    const [fake, setFake] = useState(1)

    console.log('SetTimeoutExample')

    /*useEffect( () => {
        console.log('useEffect every time')
        document.title = counter.toString()
    })
    useEffect( () => {
        console.log('useEffect only first render (componentDidMount)')
        document.title = counter.toString()
    }, [])*/

    useEffect(() => {
        setInterval(() => {
            console.log('Tick' + counter)
            setCounter((state) => state+1)
        }, 1000)
    }, [])


    return (
        <div>
            Hello, counter {counter} - fake: {fake}
            {/*<button onClick={() => setCounter(counter + 1)}> +</button>
            <button onClick={() => setFake(fake + 1)}> +</button>*/}

        </div>
    )


}