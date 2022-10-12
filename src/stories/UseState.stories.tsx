import React, {useMemo, useState} from 'react';


export default {
  title: 'UseState',
}


function generateData() {
    return 1
}

export const ExampleDifficultUseState = () => {

    //const initValue = useMemo(generateData, [])

  const [counter, setCounter] = useState(generateData)

    const changer = (state: number) => state+1

  return(
      <div>
        <button onClick={ () => setCounter((state: number) => state+1) }> + </button>
          {counter}
      </div>
  )


}