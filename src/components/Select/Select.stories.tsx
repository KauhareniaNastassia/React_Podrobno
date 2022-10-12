import React, {useState} from 'react';
import {ComponentMeta, ComponentStory, Story} from '@storybook/react';
import {Select, SelectPropsType} from "./Select";
import {action} from "@storybook/addon-actions";
import {UncontrolledInput} from "../Input/UncontrolledInput";

export default {
    title: 'Input',
    component: Select,

} as ComponentMeta<typeof Select>;

//---------------------------------------------------------------

const BaseControlledSelect: Story<SelectPropsType> = () => {
    return <Select onChange={action('Value changed')}
            value={'1'}
            items={[
                {value: '1', title: 'Minsk'},
                {value: '2', title: 'Moscow'},
                {value: '3', title: 'Kiev'}]
            }/>

};

export const PrimaryBaseControlledSelect = BaseControlledSelect.bind({});

//---------------------------------------------------------------

const ControlledSelectWithValue: Story<SelectPropsType> = () => {

    const [value, setValue] = useState('2')

    return <Select onChange={setValue}
                   value={value}
                   items={[
                       {value: '1', title: 'Minsk'},
                       {value: '2', title: 'Moscow'},
                       {value: '3', title: 'Kiev'}]
                   }/>

};

export const PrimaryControlledSelectWithValue = ControlledSelectWithValue.bind({});

//---------------------------------------------------------------

const ControlledSelectWithoutValue: Story<SelectPropsType> = () => {

    const [value, setValue] = useState(null)

    return <Select onChange={setValue}
                   value={value}
                   items={[
                       {value: '1', title: 'Minsk'},
                       {value: '2', title: 'Moscow'},
                       {value: '3', title: 'Kiev'}]
                   }/>

};

export const PrimaryControlledSelectWithoutValue = ControlledSelectWithoutValue.bind({});