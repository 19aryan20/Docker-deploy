import React from 'react'
import {useHistory} from 'react-router-dom'

const Logout = () => {
    let history=useHistory()
    const click=async()=>{
         fetch('/logout', {
           method: 'GET',
           headers:{
               Accept:'application/json',
           'Content-Type': 'application/json'},
           credential:"include", 
        }).then((e)=>{history.push('/login')})
            
    }
    click()
    return (
        <div>
            
        </div>
    )
}

export default Logout
