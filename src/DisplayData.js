import React from 'react'
const DisplayData = ({value, toggle}) => {
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


  return (
    <div >
    {value.map((item,index)=>{
       return(
        <>
        <div className='displaydata'>
        <p key={index} style={{margin:"5px"}}>NAME: {item.name}</p>  
        <p key={index} style={{margin:"5px"}}>DEPARTMENT: {item.dept}</p>        
        <p key={index} style={{margin:"5px"}}>RATING: {item.rating}</p> 
        </div>       
        </>
       )
    })}
    <button onClick={toggle} style={fieldstyle}>Back</button>

    </div>
  )
}
export default DisplayData

