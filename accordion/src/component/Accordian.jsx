import React, { useState } from 'react'

function Accordian({Data}) {
    const[showData,setshowData]=useState([]);
    const[isenablemultiple,setisenablemultiple]=useState(false);




    //combined selection
    function handleselection(currentid){
        setshowData(previd=>{
            if(isenablemultiple){
                if(previd.includes(currentid)){
                   return previd.filter((id)=>id!==currentid);

                }
                else{
                    return [...previd,currentid];
                }
            }
            else{
                if(previd.includes(currentid)){
                    return previd.filter((id)=>id!==currentid);
                }
                else{
                    return [currentid];
                }
            }
        })
    }

  
  return (
    <div>
      <button onClick={()=>setisenablemultiple(!isenablemultiple)}> Enable Mulitple Section</button>
      <div>
      {
        Data.map((data)=>{
            return(
                //single section
                <div key={data.id}>
                <div onClick={()=>handleselection(data.id)} >
                
                <h1>
                    {data.question}
                   </h1>
                  <span>
                  {showData.includes(data.id) ? "-" : "+"}
                  </span>
                  <div>
                  {showData.includes(data.id) && <p>{data.answer}</p>}
                  </div>
               
                </div>
            
                </div>
            )

        })
      }

      </div>

    </div>
  )
}

export default Accordian
