import React, {useState} from 'react';
import './App.css';
import {RatingValueType} from './components/Rating/Rating';
import {action} from "@storybook/addon-actions";
import {WithoutValue, WithValue} from "./components/Select/AccSelect";


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

    let [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
    let [switchOn, setSwitchOn] = useState<boolean>(false)
    const [value, setValue] = useState<boolean>(true);

    const callBack = action('accordion mode change event fired')
    const onClickCallBack = action('some item was clicked')


    /*const ModeChanging = () => {
        return <Accordion titleValue={"Users"}
                          collapsed={value}
                          onChange={() => {
                              setValue(!value)
                          }}
                          items={items}
                          onClick={onClickCallBack}
        />
    }*/

    return (
        <div className={"App"}>
            {/*<Rating value={ratingValue} onClick={setRatingValue}/>
            <UncontrolledRating/>

            <OnOff on={switchOn} onChange={(on) => {
                setSwitchOn(on)
            }}/>
            <UncontrolledOnOff onChange={setSwitchOn}/> {switchOn.toString()}

            <UncontrolledInput/>
            <Input/>*/}
            {/*<UncontrolledAccordion titleValue={"Menu"}
                                   collapsed={true}
                                   onChange={callBack}
                                   items={items}
                                   onClick={onClickCallBack}
            />*/}
            {/* //MenuCollapsedMode
            <Accordion titleValue={"Menu"}
                       collapsed={true}
                       onChange={() => {setAccordionCollapsed(!accordionCollapsed)}}
                       items={items}
                       onClick={onClickCallBack}
            />

            //UserUncollapsedMode
            <Accordion titleValue={"Users"}
                       collapsed={false}
                       onChange={() => {setAccordionCollapsed(!accordionCollapsed)}}
                       items={items}
                       onClick={onClickCallBack}
            />*/}
            {/*//with value
            <Select
                onChange={ () => {} }
                value={'2'}
                items={itemsForSelect}/>

            //without value
            <Select
                onChange={  () => {}  }
                items={itemsForSelect}/>*/}

            <WithValue
                onChange={ () => {} }
                value={'2'}
                items={itemsForSelect}
            />

            <WithoutValue
                onChange={  () => {}  }
                items={itemsForSelect}
            />


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


