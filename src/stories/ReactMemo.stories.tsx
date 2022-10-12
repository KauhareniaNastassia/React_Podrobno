import React, {useState} from 'react';


export default {
  title: 'ReactMemo',
}


const NewMessagesCounter = (props: any) => {
  return <div>
    {props.count}
  </div>
}


type UsersType = {users: Array<string>}
const UsersSecret = (props: UsersType) => {
  console.log('Users')
  return <div>
    {props.users.map((u, i) => <div key={i}> {u} </div>)}
  </div>
}

const Users = React.memo(UsersSecret)


export const Example1 = () => {

  const [counter, setCounter] = useState(0)
  const [users, setUsers] = useState(['Nastassia', 'Lesya', 'Olga', 'Lena'])


  const addUser = () => {
    const newUsers = [...users, 'Hadya' + new Date().getTime()]
    setUsers(newUsers)
  }

  users.push('Hadya' + new Date().getTime())


  return(
      <div>
        <button onClick={ () => setCounter(counter + 1) }> + </button>
        <button onClick={ addUser }> add user </button>

        <NewMessagesCounter count={counter}/>
        <Users users={users} />
      </div>
  )


}