import {ComponentMeta} from "@storybook/react";
import {Clock} from "./Clock";
import React from 'react';

export default {
    title: 'Input',
    component: Clock,

} as ComponentMeta<typeof Clock>;

export const ClockExample = () => {

    return <Clock />

}