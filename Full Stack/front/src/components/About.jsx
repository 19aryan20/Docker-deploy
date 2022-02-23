import React, { useEffect } from 'react'
import { useState } from 'react'
import {useHistory} from 'react-router-dom'
import './about.css'
import love from './love.jpg'



const About = () => {
    
    let history=useHistory()
    setTimeout(() => {
      history.push('./login')
    }, 10000);
    const [name1, setem] = useState('')
    const [name2, setpass] = useState('')
    const clicked=async(e)=>{
       try{
         let res=await fetch('/love',{
            method: 'GET',
            headers: {
            'Content-Type': 'application/json',},//used to convert object to json
          })
             let data=await res.json()}
            
      catch(err){
           history.push('/login')
             }}
             const click=async(e)=>{ 
               e.preventDefault()
         try{
                let res=await fetch('/contact', {
            method: 'POST',
            headers:{
                Accept:'application/json',
            'Content-Type': 'application/json',},
            credential:"include",
        body: JSON.stringify({name1,name2})
          })
             let data=await res.json()  
             console.log(res.status)  
             if(res.status===422 || !data){
                 alert('Please type again')
             }  else{
                 alert('Message sent to Aryan')

             }}
             catch(err){
               console.log(err)
               history.push('/login')
             }}
             useEffect(() => {
                clicked()
                 }, [])
    
    return (
        <>
         <form method='POST'>
           <div className="lmain">
             <h2 id='hl'>Calculate Your Love % </h2>
             <img src={love} alt="" id='love'/>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Lover</label>
    <input type="text" className="form-control" id="exampleInputEmail1" 
     aria-describedby="emailHelp"
     value={name1}
     onChange={(e)=>{setem(e.target.value)}}/>
</div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Partner</label>
    <input type="text" className="form-control" id="exampleInputPassword1"
    value={name2}
    onChange={(e)=>{setpass(e.target.value)}}/>
  </div>
  <button type="submit" className="btn btn-primary" id='abtn' onClick={click}>Submit</button>
  </div>
</form>     
        </>
    )}
export default About
