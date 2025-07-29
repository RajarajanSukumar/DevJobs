import React from 'react'
import './Apply.css'
import { Link } from 'react-router-dom'

const Apply = ({fullName,setFullName,mail,setMail,linkedInPage,setlinkedInPage,message,setMessage, successMsg, setSuccessMsg, devJobs, setFilterJobs}) => {

    
    const handleSubmit = (e) => {
        e.preventDefault()
        setFilterJobs(devJobs)
        if(fullName.length>0 && mail.length>0 && linkedInPage.length>0 && message.length>0){
            setFullName('');
            setMail('');
            setlinkedInPage('');
            setMessage('');
            setSuccessMsg('Success')
        }else{
            setSuccessMsg('Please fill all the fields')
        }

    }
  
  return (
    <div className='joinForm'>
        <div className='formTitle'>
            <h1>Join our company!</h1>
            <p>Please fill in the form and we will email you within the next 3 business days</p>
        </div>
        <form>
            <div className='applyForm'>
                <label>Your Full Name</label><br />
                <input type="text" placeholder='Enter your Full Name' 
                value={fullName}
                onChange={(e)=>setFullName(e.target.value)}
                required/>    
            </div>
            <div className='applyForm'>
                <label>Your Email Address</label><br />
                <input type="text" placeholder='Enter your Address' 
                value={mail}
                onChange={(e)=>setMail(e.target.value)}
                required/>
            </div>
            <div className='applyForm'>
                <label>Your LinkedIn Page</label><br />
                <input type="text" placeholder='Enter the link to your account' 
                value={linkedInPage}
                onChange={(e)=>setlinkedInPage(e.target.value)}
                required/>
            </div>
            <div className='applyForm'>
                <label>Why would you like to work with use</label><br />
                <textarea type="text" placeholder='Enter your message'
                value={message} rows={5} cols={50}
                onChange={(e)=>setMessage(e.target.value)}/>
            </div>
            
            <button className='submitButton' onClick={(e)=>handleSubmit(e)}>Submit</button>
           {successMsg.length>0 &&
           <p>{successMsg}. <Link to='/'>Go to Home Page</Link></p>}
        </form>
    </div>
  )
}

export default Apply