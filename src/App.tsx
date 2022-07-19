import React, {useState} from 'react';
import './App.css';
import {Rating, RatingValueType} from './components/Rating/Rating';
import {OnOff} from "./components/OnOff/OnOff";
import UncontrolledAccordion from "./components/UncontrolledAccordion/UncontrolledAccordion";
import {UncontrolledRating} from "./components/UncontrolledRating/UncontrolledRating";
import Accordion from "./components/Accordion/Accordion";
import {UncontrolledOnOff} from "./components/OnOff/UncontrolledOnOff";

function hello() {
    debugger
    alert('Hello IT-KAMASUTRA')
}

//hello();


function App() {
    console.log("App rendering")

    let [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
    let [switchOn, setSwitchOn] = useState<boolean>(false)

    return (
        <div className={"App"}>
            {/* <UncontrolledRating value={1}/>
            <UncontrolledRating value={2}/>
            <UncontrolledRating value={3}/>
            <UncontrolledRating value={4}/>
            <UncontrolledRating value={5}/>*/}
            {/* <Rating value={ratingValue} onClick = {setRatingValue} />
            <Accordion titleValue={"Users"}
                       collapsed ={accordionCollapsed}
                       onChange = { () => {setAccordionCollapsed(!accordionCollapsed)}}/>
            <UncontrolledOnOff on={true} onChange={setSwitchOn}/> {switchOn.toString()}*/}

            <Rating value={ratingValue} onClick = {setRatingValue} />
            <UncontrolledRating/>

            <OnOff on={switchOn} onChange={(on) => {setSwitchOn(on)}}/>
            <UncontrolledOnOff onChange={setSwitchOn}/> {switchOn.toString()}


            <UncontrolledAccordion titleValue={"Menu"}/>
            <Accordion titleValue={"Users"}
                       collapsed ={accordionCollapsed}
                       onChange = { () => {setAccordionCollapsed(!accordionCollapsed)}}/>

        </div>
    );
}

type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {
    return <h1>{props.title}</h1>
}

export default App;
