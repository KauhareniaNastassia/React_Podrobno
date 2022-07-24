import React, {useCallback, useMemo, useState} from "react";

type BooksType = {
    books: Array<string>
    addBook: () => void
}

export const LikeUseCallback = () => {
    console.log('LikeUseCallback')
    const [counter, setCounter] = useState(0)
    const [books, setBooks] = useState(['React', 'JS', 'CSS', 'HTML'])

    const newArray = useMemo(() => {
        const newArray = books.filter(book => book.toLowerCase().indexOf('e') > -1)
        return newArray
    }, [books])


    //useMemo
    const memorizedAddBook = useMemo(() => {
        return console.log(books)
        const newBooks = [...books, 'Angular' + new Date().getTime()]
        setBooks(newBooks)
    }, [books])

    //useCallBack
    const memorizedAddBook2 = useCallback(() => {
        console.log(books)
        const newBooks = [...books, 'Angular' + new Date().getTime()]
        setBooks(newBooks)
    }, [books])

    return (
        <div>
            <button onClick={() => {
                setCounter(counter + 1)
            }}> +
            </button>
            {counter}
            <Book addBook={memorizedAddBook2}/>
        </div>

    )
}

type BookSecretPropsType = {
    /*books: Array<string>,*/
    addBook: () => void
}

export const BooksSecret = (props: BookSecretPropsType) => {
    console.log('BooksSecret')
    return <div>
        <button onClick={() => props.addBook()}> add book</button>
        {/*{props.books.map((book, i) => <div key={i}> {book} </div>)}*/}
    </div>
}

export const Book = React.memo(BooksSecret)
