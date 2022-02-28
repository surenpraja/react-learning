import React, {useState} from 'react'

function HookCounter() {
    const [count, setIncrement] = useState(0)

  return (
    <div>
        <button onClick={()=>setIncrement(count+1)}>Count {count}</button>
    </div>
  )
}

export default HookCounter