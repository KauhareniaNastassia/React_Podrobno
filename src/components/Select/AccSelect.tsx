import {Accordion} from "../Accordion/Accordion";
import React, {useState} from "react";
import {Select, SelectPropsType} from "./Select";





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

export const WithValue = (props: SelectPropsType) => {
    const [value, setValue] = useState('2')

    return(
        <div>
            <Select
                onChange={ setValue }
                value={value}
                items={props.items}/>

        </div>
    )

}


export const WithoutValue = (props: SelectPropsType) => {
    const [value, setValue] = useState(null)

    return(
            <div>
                <Select
                    onChange={ setValue }
                    value={null}
                    items={props.items}/>

            </div>
        )

}