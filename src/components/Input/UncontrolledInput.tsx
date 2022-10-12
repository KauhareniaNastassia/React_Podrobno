import React, {ChangeEvent, useRef, useState} from 'react';
import {action} from "@storybook/addon-actions";


export const UncontrolledInput = () => {
     const [value, setValue] = useState('')

    const OnChangeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const actualValue = e.currentTarget.value
        setValue(actualValue)
    }

    return (
        <div>
            <input onChange={OnChangeInputHandler}/> {value}
        </div>
    );
};       //такого сценария лучше избегать

//------------------------------------------------------------------

export const GetValueOfUncontrolledInput = () => {
    const [value, setValue] = useState('')

    const inputRef = useRef<HTMLInputElement>(null)

    const OnClickButtonSaveHandler = () => {
        const el = inputRef.current as HTMLInputElement
        setValue(el.value)
    }


    return (
        <div>
            <input ref={inputRef}  />
            <button onClick={ OnClickButtonSaveHandler }> save </button> actual value {value}
        </div>
    );
};


export const ControlledInput = () => {
    const [parentValue, setParentValue] = useState('')

    const onChangeControlledInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setParentValue(e.currentTarget.value)}


    return <input value={parentValue} onChange={onChangeControlledInputHandler}/>
}


export const ControlledCheckBox = ()=> {
    const [parentValue, setParentValue] = useState(true)

    const onChangeCheckBoxHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setParentValue(e.currentTarget.checked)
}

    return <input type={"checkbox"} checked={parentValue} onChange={onChangeCheckBoxHandler}/>
}




export const ControlledSelect = () => {
    const [parentValue, setParentValue] = useState<string | undefined>('1')

    const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setParentValue(e.currentTarget.value)}

    return <select value={parentValue} onChange={onChange}>
        <option>none</option>
        <option value={'1'}>Minsk</option>
        <option value={'2'}>Moscow</option>
        <option value={'3'}>Kiev</option>

    </select>
}