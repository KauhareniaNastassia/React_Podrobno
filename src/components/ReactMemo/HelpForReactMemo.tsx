import React, {useMemo, useState} from "react";

type NewMessagesCounterType = {
    count: number
}

type UsersType ={
    users: Array<string>
}


export const UsersSecret = (props: UsersType) => {
    return <div >
        {props.users.map((u, i) => <div key={i}> {u} </div>)}
    </div>
}

export const Users = React.memo(UsersSecret)



export const HelpForReactMemoExample = () => {
    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(['Nastassia', 'Lena', 'Lesya', 'Olga'])

    const newArray = useMemo( () => {
        const newArray = users.filter(u=> u.toLowerCase().indexOf('e')>-1)
        return newArray
    }, [users])

    const addUser = () => {
        const newUsers = [...users, 'Sveta' + new Date().getTime()]
        setUsers(newUsers)
    }

    return (
        <div>
            <button onClick={() => {setCounter(counter + 1)}}> + </button>
            {counter}
            <button onClick={addUser}> add user </button>
            <Users users={newArray}/>
        </div>

    )
}