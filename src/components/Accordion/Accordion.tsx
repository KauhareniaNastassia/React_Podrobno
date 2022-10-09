import React from "react";



export type AccordionPropsType = {
    titleValue: string
    collapsed?: boolean
}

export function Accordion(props: AccordionPropsType) {
    console.log("Accordion rendering")

    return <div>
        <AccordionTitle title={props.titleValue}/>
        {!props.collapsed && <AccordionBody />}
    </div>

    /*if (props.collapsed === true) {
        return (
            <div>
                <AccordionTitle title={props.titleValue}/>
            </div>
        )
    } else {
        return (
            <div>
                <AccordionTitle title={props.titleValue}/>
                <AccordionBody/>
            </div>
        )
    }*/
}


type AccordionTitlePropsType = {
    title: string
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return <h3>{props.title}</h3>

}


type AccordionBodyPropsType = {
    /*items: ItemType[]
    onClick: (value: any) => void*/
}

function AccordionBody(props: AccordionBodyPropsType) {
    return (
        <ul>
           <li>1</li>
           <li>2</li>
           <li>3</li>
        </ul>
    )
}


