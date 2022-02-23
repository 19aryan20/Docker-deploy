import React from 'react'
import { useState } from 'react'
import {useHistory} from 'react-router-dom'
import './login.css'
import limg from '../components/limg.jpg'

const Login = () => {
  let history=useHistory()
    const [email, setem] = useState('')
    const [password, setpass] = useState('')
    const click=async(e)=>{
         e.preventDefault()
         try{
         let res=await fetch('/login',{
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',},
        body: JSON.stringify({email,password})//used to convert object to json
          })
             let data=await res.json()  
             console.log(data)  
             console.log(res.status)
             if(res.status===422 || !data){
                 alert('Invalid Login')
             }  else{
                 alert('Login Successfull')
                 history.push('/about')
             }}
             catch(err){
               console.log(err)
             }
    }
    return (
        <>
  <form method='POST'>
    <img src={limg} alt="" id='limg'/>
    <h2 id='lh3'>Login</h2>
    <div className="start">
    <div className="main">
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" 
     aria-describedby="emailHelp"
     value={email}
     onChange={(e)=>{setem(e.target.value)}}/>
</div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1"
    value={password}
    onChange={(e)=>{setpass(e.target.value)}}
    />
  </div>
  <button type="submit" className="btn btn-primary" id='lbtn' onClick={click}>Submit</button>
  </div>
  </div>
</form> 
        </>
    )
}

export default Login
