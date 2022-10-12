import React, {KeyboardEvent, useEffect, useState} from "react";
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
    const [hoveredElement, setHoveredElement] = useState(props.value)

    const selectedItem = props.items.find(i => i.value === props.value)
    const hoveredItem = props.items.find(i => i.value === hoveredElement)

    useEffect( () => {
        setHoveredElement((props.value))
        }, [props.value]
    )


    const toggleItems = () => setActive(!active)

    const onItemClick = (value: any) => {
        props.onChange(value)
        toggleItems()
    }

    const onKeyUp = (e: KeyboardEvent<HTMLDivElement>) => {
        if(e.key === 'ArrowDown' || e.key === 'ArrowUp') {
            for (let i = 0; i<props.items.length; i++) {
                if (props.items[i]. value === hoveredElement) {
                    const pretendentElement = e.key === 'ArrowDown'
                        ? props.items[i+1]
                        : props.items[i-1]
                    if (pretendentElement) {
                        props.onChange(pretendentElement);
                        return
                    }
                }
            }
            if (!selectedItem) {
                props.onChange(props.items[0].value)
            }
        }

        if (e.key ==='Enter' || e.key === 'Escape') {
            setActive(false)
        }

    }


    return (
        <div>
            <select>
                <option value=''>Minsk</option>
                <option value=''>Warsaw</option>
                <option value=''>Kiev</option>
            </select>
            <div className={css.select} onKeyUp={ onKeyUp } >
                <h3 className={css.main} onClick={toggleItems}>{selectedItem && selectedItem.title}</h3>

                {
                    active &&
                    <div className={css.items}>
                        {props.items.map(i => <div
                            onMouseEnter={ () => { setHoveredElement(i.value) } }
                            className={css.item + '' + (hoveredItem === i ? css.selected : '')}
                            key={i.value}
                            onClick={() => onItemClick(i.value)}
                        > {i.title} </div>)}
                    </div>
                }


            </div>

        </div>
    );
}

