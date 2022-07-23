import React, {useState, KeyboardEvent, useEffect} from "react";
import {RatingValueType} from "../Rating/Rating";
import css from "./Select.module.css"

export type ItemType = {
    title: string,
    value: any
}

export type SelectPropsType = {
    value?: any
    onChange: any
    items: ItemType[]
}

export function Select(props: SelectPropsType) {

    const [active, setActive] = useState(false)
    const [hoveredElementValue, setHoveredElementValue] = useState(props.value)

    const selectedItem = props.items.find(i => i.value === props.value)
    const hoveredItem = props.items.find(i => i.value === hoveredElementValue )

    useEffect( () => {
        setHoveredElementValue(props.value)
    }, [ props.value])


    const toggleItems = () => setActive(!active)
    const onItemClick = (value: any) => {
        props.onChange(value)
        toggleItems()
    }

    const onKeyUp = (e: KeyboardEvent<HTMLDivElement>) => {
        if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
            for (let i = 0; i < props.items.length; i++) {
                if (props.items[i].value === hoveredElementValue) {
                    const pretendentElement = e.key === 'ArrowDown' ? props.items[i + 1] : props.items[i - 1]
                    if (pretendentElement) {
                        props.onChange(props.items[i + 1].value)
                        return;
                    }
                }
            }
            if (!selectedItem) {
                props.onChange(props.items[0].value)
            }
        }

        if (e.key === 'Enter' || e.key === 'Escape') {
            setActive(false)
        }
    }



    return (
        <div>
            <div className={css.select} onKeyUp={ onKeyUp}>
                <select className={css.main} onClick={toggleItems}>
                    {selectedItem && selectedItem.title} </select>
                {
                    active && <div className={css.items}>
                        {props.items.map(i => <option
                            onMouseEnter={ () => {setHoveredElementValue(i.value)}}
                            className={css.item + " " + (selectedItem === i ? css.selected : "")}
                            key={i.value}
                            onClick={ () => {onItemClick(i.value)} }
                        > {i.title}
                        </option>)}
                    </div>
                }
            </div>
        </div>
    );
}

