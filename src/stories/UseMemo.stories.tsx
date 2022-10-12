import React, {useCallback, useMemo, useState} from 'react';


export default {
    title: 'UseMemo',
}

export const DifficultCounting = () => {

    const [a, setA] = useState<number>(0)
    const [b, setB] = useState<number>(0)

    let resultA = 1
    let resultB = 1

    resultA = useMemo(() => {
        let tempresultA = 1

        for (let i = 1; i <= a; i++) {
            let fake = 0
            while (fake < 100000000) {
                fake++;
                const fakeValue = Math.random()
            }
            tempresultA = tempresultA * i
        }
        return tempresultA
    }, [a])


    for (let i = 1; i <= b; i++) {
        resultB = resultB * i
    }


    return (
        <div>
            <input
                value={a}
                onChange={(e) => setA(Number(e.currentTarget.value))}/>

            <input
                value={b}
                onChange={(e) => setB(+e.currentTarget.value)}/>

            <hr/>

            <div>
                {resultA}
            </div>
            <div>
                {resultB}
            </div>

        </div>
    )


}

//--------------------------------------------------


type UsersType = { users: Array<string> }
const UsersSecret = (props: UsersType) => {
    console.log('Users')
    return <div>
        {props.users.map((u, i) => <div key={i}> {u} </div>)}
    </div>
}

const Users = React.memo(UsersSecret)

export const HelpsForReactMemo = () => {

    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(['Nastassia', 'Lesya', 'Olga', 'Lena'])

    const newArray = useMemo(() => {
        const newArray = users.filter(u => u.toLowerCase().indexOf('n') > -1)
        return newArray
    }, [users])

    const addUser = () => {
        const newUsers = [...users, 'Nadya' + new Date().getTime()]
        setUsers(newUsers)
    }

    return (
        <div>
            <button onClick={() => setCounter(counter + 1)}> +</button>
            <button onClick={addUser}> add user</button>
            {counter}
            <Users users={newArray}/>
        </div>
    )
}

//----------------------------------------------------------------

type BooksType = {
    addBook: () => void
}


const BooksSecret = (props: BooksType) => {
    console.log('Books')
    return <div>
        <button onClick={props.addBook}> add book</button>
    </div>
}

const Books = React.memo(BooksSecret)


export const LikeUseCallback = () => {

    const [counter, setCounter] = useState(0)
    const [books, setBooks] = useState(['React', 'JS', 'CSS', 'HTML'])


    const memoizedAddBook = useMemo(() => {
        return () => {
            const newBooks = [...books, 'Angular' + new Date().getTime()]
            setBooks(newBooks)
        }
    }, [books])


    const memoizedAddBook2 = useCallback(() => {
            const newBooks = [...books, 'Angular' + new Date().getTime()]
            setBooks(newBooks)
    }, [books])


    return (
        <div>
            <button onClick={() => setCounter(counter + 1)}> +</button>
            {counter}

            <Books addBook={memoizedAddBook2}/>

        </div>
    )
}

