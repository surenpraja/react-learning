// this module is to learn hook to apply useEffect conditionally
// Originated by: Surendra Prajapati - 02/28/2022

import React, {useState, useEffect} from 'react'

function HookCounterOne() {
  const [count, setCount] = useState(0)
  const [name, setName] = useState('')

  useEffect(() => {
    console.log(`triggerred this useEffect`)
    document.title=`you clicked ${count} times`    
  }, [count])
  
  return (
    <div>
        <input type="text" value={name} onChange={e=>setName(e.target.value)}/>
        <button onClick = {()=>setCount(count + 1)}>click {count} times</button>
    </div>
  )
}

export default HookCounterOne