import React, {ChangeEvent, useRef, useState} from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import {UncontrolledInput} from "./UncontrolledInput";
import {action} from "@storybook/addon-actions";
import {string} from "prop-types";

export default {
    title: 'Input',
    component: UncontrolledInput,

} as ComponentMeta<typeof UncontrolledInput>;


const UncontrolledInputValue: ComponentStory<typeof UncontrolledInput> = (args) => <UncontrolledInput/>;

export const PrimaryOfUncontrolledInput = UncontrolledInputValue.bind({});

//---------------------------------------------------------------

const TrackValueOfUncontrolledValue: ComponentStory<typeof UncontrolledInput> = (args) => {
    const [value, setValue] = useState("")

    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
        const actualValue = event.currentTarget.value
        setValue(actualValue)
    }

    return <div>
        <input onChange={onChange}/>
        {value}
    </div>
};

export const PrimaryOfTrackValueOfUncontrolledValue = TrackValueOfUncontrolledValue.bind({});

//---------------------------------------------------------------

const GetValueOfUncontrolledInputByButtonPress: ComponentStory<typeof UncontrolledInput> = (args) => {
    const [value, setValue] = useState("")
    const inputRef = useRef<HTMLInputElement>(null)

    const save = () => {
        const el = inputRef.current as HTMLInputElement
        setValue(el.value)
    }

    return <div>
        <input ref={inputRef} id={'inputId'}/>
        <button onClick={save}>save
        </button>
        actual value {value}
    </div>
};

export const PrimaryOfGetValueOfUncontrolledInputByButtonPress = GetValueOfUncontrolledInputByButtonPress.bind({});

//---------------------------------------------------------------

const ControlledInput: ComponentStory<typeof UncontrolledInput> = (args) => {

    const [parentValue, setParentValue] = useState('')

    const onChange = (e: ChangeEvent<HTMLInputElement>) => { setParentValue(e.currentTarget.value) }
    return <div>
        <input value={parentValue}
               onChange={ onChange }/>
    </div>
};

export const PrimaryControlledInput = ControlledInput.bind({});

//---------------------------------------------------------------

const ControlledCheckBox: ComponentStory<typeof UncontrolledInput> = (args) => {
    const [parentValue, setParentValue] = useState(true)

    const onChange = (e: ChangeEvent<HTMLInputElement>) => { setParentValue(e.currentTarget.checked) }
    return <div>
        <input type={"checkbox"}
               checked={parentValue}
               onChange={ onChange }/>
    </div>
};

export const PrimaryControlledCheckBox = ControlledCheckBox.bind({});

//---------------------------------------------------------------

const ControlledSelect = () => {
    const [parentValue, setParentValue] = useState<undefined | string>(undefined)

    const onChange = (e: ChangeEvent<HTMLSelectElement>) => { setParentValue(e.currentTarget.value) }
    return <select value={parentValue} onChange={onChange}>
        <option>none</option>
        <option value={'1'}>Minsk</option>
        <option value={'2'}>Kiev</option>
        <option value={'3'}>Warsaw</option>
    </select>
};

export const PrimaryControlledSelect = ControlledSelect.bind({});