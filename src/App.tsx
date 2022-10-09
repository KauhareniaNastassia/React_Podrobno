import React, {useState} from 'react';
import './App.css';
import {RatingValueType, RatingWithState} from "./components/Rating/RatingWithState";
import {UncontrolledRating} from "./components/UncontrolledRating/UncontrolledRating";
import {
    UncontrolledAccordionWithStateInApp
} from "./components/UncontrolledAccordion/UncontrolledAccordionWithStateInApp";
import {OnOff} from "./components/OnOff/OnOff";
import {UncontrolledOnOff} from "./components/OnOff/UncontrolledOnOff";


export type ItemType = {
    title: string
    value: any
}
let items: Array<ItemType> = [
    {title: 'Nastassia', value: 1},
    {title: 'Olga', value: 2},
    {title: 'Lens', value: 3},
    {title: 'Lesya', value: 4}]

let itemsForSelect = [
    {value: '1', title: 'Minsk'},
    {value: '2', title: 'Moscow'},
    {value: '3', title: 'Kiev'},
]

function App() {

    // stete for rating from lesson 8
    let [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    // stete for uncontrolledAccordion from lesson 8
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(true)
    // stete for onOff from lesson 9
    let [switchOn, setSwitchOn] = useState<boolean>(false)

    return (
        <div className={"App"}>

            <PageTitle title={'Cute title^^'}/>

            {/* <Accordion titleValue={'Cute Menu'} collapsed={true}/>
            <Accordion titleValue={'Cute Users'} collapsed={false}/>*/}

            {/*<Rating value={4} />*/}

            {/*6 lesson
            <OnOff />
            <OnOff />*/}

            {/*7 lesson
            <UncontrolledAccordion titleValue={'Hey'}/>
            <UncontrolledRating />*/}

            {/* 8 lesson
            <RatingWithState value={ratingValue}
                             onClick={setRatingValue}/>
            <UncontrolledAccordionWithStateInApp titleValue={"Bla"}
                                                 collapsed={accordionCollapsed}
                                                 onChange={() => {
                                                     setAccordionCollapsed(!accordionCollapsed)
                                                 }}/>*/}

            9 lesson
            <OnOff on={switchOn}
                   onChange={setSwitchOn}/>
            <UncontrolledOnOff onChange={setSwitchOn} />

        </div>
    );
}

type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {
    console.log('PageTitle rendering')
    return <h1>{props.title}</h1>
}

export default App;


