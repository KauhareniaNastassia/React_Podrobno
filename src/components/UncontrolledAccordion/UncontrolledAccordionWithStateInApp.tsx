import React, {useReducer, useState} from "react";
import {ItemType} from "../../App";
import {reducer, TOGGLE_CONSTANT} from "./UncontrolledAccordion_Reducer";


type AccordionPropsType = {
    titleValue: string
    collapsed?: boolean
    onChange: () => void
}


export function UncontrolledAccordionWithStateInApp(props: AccordionPropsType) {
    console.log("UncontrolledAccordion rendering")

    return <div>
        <AccordionTitle title={props.titleValue}
        onChange={props.onChange}/>
        { !props.collapsed && <AccordionBody />}
    </div>

    }


type AccordionTitlePropsType = {
    title: string
    onChange: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return <h3 onClick={props.onChange}>{ props.title }</h3>
}

function AccordionBody() {
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}

