import React, {useReducer, useState} from "react";
import {ItemType} from "../../App";
import {reducer, TOGGLE_CONSTANT} from "./UncontrolledAccordion_Reducer";


type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    callBack?: () => void
    items: Array<ItemType>
    onChange: () => void
    onClick: () => void
}


export function UncontrolledAccordion(props: AccordionPropsType) {
    console.log("UncontrolledAccordion rendering")
    
   /* let [collapsed, setCollapsed] = useState(false)*/
    let [state, dispatch] = useReducer(reducer, {collapsed: false})


        return (
            <div>
                {/*<AccordionTitle title={props.titleValue} onClick={() => {  setCollapse(!collapsed) }} />*/}
                <AccordionTitle title={props.titleValue} onClick={() => {  dispatch( {type: TOGGLE_CONSTANT} )}} />
                { !state.collapsed && <AccordionBody />}
            </div>
        )
}


type AccordionTitlePropsType = {
    title: string
    onClick: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return <h3 onClick={ () => { props.onClick() }}>{ props.title }</h3>
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

