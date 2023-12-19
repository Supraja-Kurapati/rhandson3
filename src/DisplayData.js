import React from 'react'
const DisplayData = ({valu, toggle}) => {
  return (
    <div>
    {valu.map((item,index)=>{
       return(
        <>
        <h1 key={index} >{item.name}</h1>  
        <h1 key={index}>{item.dept}</h1>        
        <h1 key={index} >{item.rating}</h1>        
        </>
       )
    })}
    <button onClick={toggle}>Back</button>

    </div>
  )
}
export default DisplayData

//Prevcode

// import React from 'react'
// const DisplayData = ({value, toggle}) => {
//   return (
//     <div>
//     {value.map((item,index)=>{
//        return(
//         <>
//         <h1 key={index} >{item.name}</h1>  
//         <h1 key={index}>{item.dept}</h1>        
//         <h1 key={index} >{item.rating}</h1>        
//         </>
//        )
//     })}
//     <button onClick={toggle}>Back</button>

//     </div>
//   )
// }
