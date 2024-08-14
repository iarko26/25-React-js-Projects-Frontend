import { useState } from 'react'

import './App.css'
import { useEffect } from 'react';

function App() {
const url='https://dummyjson.com/users';
const[loading,setloading]=useState(false);
const[user,setuser]=useState([]);
const[search,setsearch]=useState('');
const[filtereduser,setfiltereduser]=useState([]);


async function fetchdata(){
  try{
    setloading(true);
    const res=await fetch(url);
    const data=await res.json();
    setuser(data.users);
    setfiltereduser(data.users);





  }
  catch(e){
    console.log(e)
  }
  finally{
    setloading(false);
  }
}

useEffect(()=>{
  fetchdata();
},[])
function handlefilteruser(){
  if(search===''){
    setfiltereduser([]);
    return;
  }
  else{
    let filtered=user.filter((user)=>{
      return user.firstName.includes(search) || user.lastName.includes(search);


    })
    setfiltereduser(filtered);
  }

}
useEffect(()=>{
  handlefilteruser();


},[search,user])
function handleclick(user){
  setsearch(`${user.firstName} ${user.lastName}`);
  setfiltereduser([]);
}

  return (
  <div>
  <h1>Search Name</h1>
  <div>
    <input
      type='text'
      placeholder='Search Name'
      value={search}
      onChange={(e)=>setsearch(e.target.value)}
    />
  </div>
  <div>
   {
     loading? 
      <h1>Loading...</h1>:
      (
        filtereduser.map((user)=>{
          return(
            <div key={user.id} 
            onClick={()=>handleclick(user)}
            style={{cursor:'pointer'}}
            >
            {user.firstName} {user.lastName}
            </div>
          )
        })
      )


   }

  </div>
 


  </div>
  )
}

export default App
