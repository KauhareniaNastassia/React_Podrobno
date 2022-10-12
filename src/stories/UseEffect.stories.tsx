import React, {useEffect, useMemo, useState} from 'react';


export default {
  title: 'UseEffect',
}


export const ExampleUseEffect = () => {

  const [fake, setFake] = useState(1)
  const [counter, setCounter] = useState(1)

    useEffect( () => {
        console.log('useEffect every render')
        document.title = counter.toString()
    } )

    useEffect( () => {
        console.log('useEffect only first render')
        document.title = counter.toString()
    }, [] )

    useEffect( () => {
        console.log('useEffect only first render and every counter change')
        document.title = counter.toString()
    }, [counter] )


  return(
      <div>
          Hello, {counter} {fake}
        <button onClick={ () => setCounter((state: number) => state+1) }> + </button>
      </div>
  )
}


//------------------------------------------------------

export const SetTimeoutExample = () => {

    const [fake, setFake] = useState(1)
    const [counter, setCounter] = useState(1)

    useEffect( () => {

        setTimeout( () => {
            console.log('setTimeout')
            document.title = counter.toString()
        }, 1000 )
    }, [counter] )

    return(
        <div>
            Hello, {counter} {fake}
            <button onClick={ () => setFake(fake+1) }> + </button>
            <button onClick={ () => setCounter((state: number) => state+1) }> + </button>
        </div>
    )
}


//------------------------------------------------------

export const SetIntervalExample = () => {

    const [fake, setFake] = useState(1)
    const [counter, setCounter] = useState(1)

    useEffect( () => {

        setInterval( () => {
           setCounter((state) => state + 1)
        }, 1000 )
    }, [] )

    return(
        <div>
            Hello, {counter} - fake {fake}
            {/*<button onClick={ () => setFake(fake+1) }> + </button>
            <button onClick={ () => setCounter((state: number) => state+1) }> + </button>*/}
        </div>
    )
}


