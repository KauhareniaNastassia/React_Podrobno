import React, {useState} from 'react';
import {ComponentMeta, Story} from '@storybook/react';
import {Accordion, AccordionPropsType} from "./Accordion";
import {action} from "@storybook/addon-actions";
import {UncontrolledAccordionWithStateInApp} from "../UncontrolledAccordion/UncontrolledAccordionWithStateInApp";
import {UncontrolledAccordionWithReducer} from "../UncontrolledAccordion/UncontrolledAccordion_Reducer.test";

export default {
    title: 'Accordion',
    component: UncontrolledAccordionWithStateInApp,

} as ComponentMeta<typeof UncontrolledAccordionWithStateInApp>;


const callback = action('accordion mode changed')
const onClickCallback = action('some item was clicked')

const MenuCollapsedMode: Story<AccordionPropsType> = () => <UncontrolledAccordionWithStateInApp
    titleValue={'Menu'}
    collapsed={true}
    onChange={callback}
    onClick={onClickCallback}
    items={[
        {title: 'Nastassia', value: 1},
        {title: 'Olga', value: 2},
        {title: 'Lens', value: 3},
        {title: 'Lesya', value: 4}
    ]}/>;

//export const PrimaryMenuCollapsedMode = MenuCollapsedMode.bind({});

//------------------------------------------------------------------------

const UserUnCollapsedMode: Story<AccordionPropsType> = () => <UncontrolledAccordionWithStateInApp
    titleValue={'Users'}
    collapsed={false}
    onChange={callback}
    onClick={onClickCallback}
    items={[
        {title: 'Nastassia', value: 1},
        {title: 'Olga', value: 2},
        {title: 'Lens', value: 3},
        {title: 'Lesya', value: 4}
    ]}/>;

//export const PrimaryUserUnCollapsedMode = UserUnCollapsedMode.bind({});


//------------------------------------------------------------------------

const ModeChanging: Story<AccordionPropsType> = () => {

    const [value, setValue] = useState<boolean>(true)

    return <UncontrolledAccordionWithStateInApp
        titleValue={'Users'}
        collapsed={value}
        onChange={() => setValue(!value)}
        onClick={onClickCallback}
        items={[
            {title: 'Nastassia', value: 1},
            {title: 'Olga', value: 2},
            {title: 'Lens', value: 3},
            {title: 'Lesya', value: 4}
        ]}/>
};

export const PrimaryModeChanging = ModeChanging.bind({});

//------------------------------------------------------------------------

const ModeChangingWithReducer: Story<AccordionPropsType> = () => {

    const [value, setValue] = useState<boolean>(true)

    return <UncontrolledAccordionWithReducer
        titleValue={'Users'}
        collapsed={value}
        onChange={() => setValue(!value)}
        onClick={onClickCallback}
        items={[
            {title: 'Nastassia', value: 1},
            {title: 'Olga', value: 2},
            {title: 'Lens', value: 3},
            {title: 'Lesya', value: 4}
        ]}/>
};

export const PrimaryModeChangingWithReducer = ModeChangingWithReducer.bind({});




