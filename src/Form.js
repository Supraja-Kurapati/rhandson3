import React, { useState } from 'react'
import DisplayData from './DisplayData'
 const Form = () => {
     const [name,setName]=useState(" ");
     const [dept,setDept]=useState(" ");
     const [rating,setRating]=useState(" ");
 
     const [data , setData]=useState([ ])
    // const [data , setData]=useState({
    //   name:" ",
    //   dept:" ",
    //   rating:" "
    // })
    const [click,setClick]=useState(true);

// const handleChange=(event)=>{
//     console.log(event)
//    setName(event.target.value);
//    setDept(event.target.value);
//    setRating(event.target.value)
// }

const handleChange = (event) => {
  console.log(event)
  if (event.target.name === "name") {
    setName(event.target.value);
  } else if (event.target.name === "dept") {
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
    //data.push(obj);

    setData(value)
    console.log(value, "value")

    setClick(false)
}

const togglefunction=()=>{
    setClick (!click)
}

  return (
    <div>
        {click?(
    <form>
    <label>Name : 
    <input name='name' onChange={handleChange} id='Name'/></label><br/>

    <label>Department : 
    <input dept='dept' onChange={handleChange} id='Dept'/></label><br/>

    <label>Rating : 
    <input rating='rating' onChange={handleChange} id='Rating'/></label>


    <button onClick={handleClick}>Submit</button>
    </form>) 
    :
    (<DisplayData valu={data}  toggle={togglefunction} />)
    
        }
        </div>
  )
}

export default Form