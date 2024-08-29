import { useEffect, useState } from 'react'
import './Friends.css'
import Friend from './Friend';


export default function Friends(){

    const [friends, setfriends] = useState([]);

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setfriends(data))

    },[])




    return(
        <div className='customBox'>
            <h3>Friends: {friends.length}</h3>
            {
                friends.map(friend => <Friend friend={friend}></Friend>)
            }
        </div>
         
    )
}

/* 

*1. use=> useState declare to hold data
2. use effect to dependency array
3. use fetch to load data
4.set loaded data to state
5. display data on the component


*/