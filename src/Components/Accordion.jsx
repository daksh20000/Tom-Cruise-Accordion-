import React, { useState } from 'react'
import data from './data'
import './Style.css'
import ArrowDropDownCircleIcon from '@mui/icons-material/ArrowDropDownCircle';

const Accordian = () => {
 
  const [selected, setSelected] = useState({ bool: false, id: '' })
  function handleSingleSelection(i){
    if(i != selected.id){
      setSelected(
        { bool:true, id: i}
      )
    }

    else setSelected(
      (prevValue)=>(
      {...prevValue, bool : !prevValue.bool, id : i }
    ))
  }

  return (
    <>
    <div className="container">
    <div className="heading">
      <h2>Tom Cruise Fan's Accordion</h2>
    </div>
    {(data && data.length) >0 ? data.map((item)=>{
        return( 
        
        <div className="single-box" key={item.id}>
          <div  className='title' >
            <h3>{item.id}{`)`} {item.question}</h3> 
            <span className='dropdown-icon' onClick={()=>(handleSingleSelection(item.id))}><ArrowDropDownCircleIcon /></span>
          </div>
          <div className="accordion">
          {
            (selected.id == item.id && selected.bool == true)
            ? <div>{item.answer}</div> 
            :<></> 
          }
          </div>
        </div>
      )
    }) :  <div> No Data Found</div>}

    </div>
    </>
  )
}

export default Accordian