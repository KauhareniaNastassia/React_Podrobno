


import React, {useReducer} from "react";
import {reducer, TOGGLE_CONSTANT} from "./reducer";



type AccordionPropsType = {
    titleValue: string
    collapsed?: boolean
}


export function UncontrolledAccordionWithReducer(props: AccordionPropsType) {
    console.log("UncontrolledAccordion rendering")

   // let [collapsed, setCollapsed] = useState(false)
    let[collapsedItem, dispatch] = useReducer(reducer, false)


    return <div>
        <AccordionTitle title={props.titleValue} onClick={() => dispatch()}/>
        { !collapsedItem && <AccordionBody />}
    </div>

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
