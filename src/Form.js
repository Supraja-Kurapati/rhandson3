import React, { useState } from 'react'
import DisplayData from './DisplayData'
 const Form = () => {
  const fieldstyle={
    height:" 30px",
    width:" 150px",
    backgroundColor:"white",
    border:"1px solid black",
    borderRadius:" 20px",
    fontSize:"large ",
    margin:"10px",
    boxShadow:"2px 2px 2px black",
    FontFamily:"serif"
  }
     const [name,setName]=useState(" ");
     const [dept,setDept]=useState(" ");
     const [rating,setRating]=useState();
 
     const [data , setData]=useState([ ])
     const [click,setClick]=useState(true);



const handleChange = (event) => {
  console.log(event)
  if (event.target.name === "name") {
    setName(event.target.value);
  }  else if (event.target.name === "dept") {
    setDept(event.target.value);
  } else if (event.target.name === "rating") {
    setRating(event.target.value);
  }
};

  
const handleClick=()=>{
    const obj={
        name: name,
        dept: dept,
        rating: rating
    }
    const value =[...data ,obj]
    setData(value)
    console.log(value, "Input Data")

    setClick(false)
}

const togglefunction=()=>{
    setClick (!click)
}

  return (
    <div>
        {click?(
    <form className='Form'>
            <h1 className='feebackheading'>Employee FeedBack Form</h1>

    <label id='inputtype'>Name : 
    <input type='text' name='name' onChange={handleChange} style={fieldstyle}/></label><br/>

    <label id='inputtype'>Department : 
    <input type='text' name='dept' onChange={handleChange} style={fieldstyle}/></label><br/>

    <label id='inputtype'>Rating : 
    <input type='number' name='rating' onChange={handleChange} style={fieldstyle}/></label><br/><br/>


    <button onClick={handleClick} style={fieldstyle}>Submit</button>
    </form>) 
    :
    (<DisplayData value={data}  toggle={togglefunction} />)
    
        }
        </div>
  )
}

export default Form