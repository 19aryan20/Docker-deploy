import React from 'react'
import { useState } from 'react'
import {useHistory} from 'react-router-dom'
import './signin.css'
import spic from './signpic.jpg'

const Signin = () => {
    let history=useHistory()
    const [val, setval] = useState({
        name:'',email:'',password:'',cpassword:''
    })
    let {name,email,password,cpassword}=val
    const change=(e)=>{
        let name=e.target.name
        let value=e.target.value
    setval({...val,[name]:value})
    }
    const click=async(e)=>{
         e.preventDefault()
         let {name,email,password,cpassword}=val
         try{
         let res=await fetch('/signin',{
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',},
        body: JSON.stringify({name,email,password,cpassword})//used to convert object to json
          })
             let data=await res.json()  
             console.log(data)  
             if(res.status===422 || !data){
                 alert('Invalid Login')
             }  else{
                 alert('Login Successfull')
                 history.push('/login')
             }}
             catch(err){
               console.log(err)
             }
    }
    return (
        <>
    <form method='POST'>
      <h1 id='sin'>Sign In</h1>
      <div className="smain">
        <img src={spic} alt="" id='spic' />
    <div className="mb-3 mb">
    <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
    <input type="text" className="form-control" id="exampleInputEmail1" 
     aria-describedby="emailHelp"
     name='name'
     value={name}
     onChange={change}/>
</div>
  <div className="mb-3 mb">
    <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
    <input type="email" className="form-control" id="exampleInputEmail1" 
     aria-describedby="emailHelp"
     name='email'
     value={email}
     onChange={change}/>
</div>
  <div className="mb-3 mb">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1"
    name='password'
    value={password}
    onChange={change}
    />
  </div>
  <div className="mb-3 mb">
    <label htmlFor="exampleInputPassword1" className="form-label">Confirm Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1"
    name='cpassword'
    value={cpassword}
    onChange={change}
    />
  </div>
  <button type="submit" className="btn btn-primary" id='sbtn' onClick={click}>Submit</button>
  </div>
</form> 
        </>
    )
}

export default Signin
