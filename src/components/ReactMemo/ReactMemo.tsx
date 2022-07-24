import React from "react";

type NewMessagesCounterType = {
    count: number
}

type UsersType ={
    users: Array<string>
}

export const NewMessagesCounter = (props: NewMessagesCounterType) => {
    return <div>
        {props.count}
    </div>
}

export const UsersSecret = (props: UsersType) => {
    return <div >
        {props.users.map((u, i) => <div key={i}> {u} </div>)}
    </div>
}

export const Users = React.memo(UsersSecret)

/*
export const Example1 = () => {
    return (
        <div>

        </div>
    )

}*/
