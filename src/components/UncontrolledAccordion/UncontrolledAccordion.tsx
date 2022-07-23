import React, {useState} from "react";
import {ItemType} from "../../App";


type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    callBack: () => void
    items: Array<ItemType>
    onChange: () => void
    onClick: () => void
}

function UncontrolledAccordion(props: AccordionPropsType) {
    console.log("UncontrolledAccordion rendering")


    let [collapsed, setCollapsed] = useState(false)


        return (
            <div>
                <AccordionTitle title={props.titleValue} onClick={() => { setCollapsed(!collapsed) }} />
                { !collapsed && <AccordionBody />}
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

export default UncontrolledAccordion;