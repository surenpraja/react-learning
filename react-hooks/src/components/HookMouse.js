// this module is to learn hooks on feature useEffect for calling only once
// Originator: Surendra Prajapati 02-28-2022
import React, {useState, useEffect} from 'react'

function HookMouse() {

    const [x, setX] = useState(0)
    const [y, setY] = useState(0)

    const logMousePosition = e =>{
        console.log('Mouse Event')
        setX(e.clientX)
        setY(e.clientY)
    }

    useEffect(()=>{
        console.log("useEffect called")
        window.addEventListener("mousemove", logMousePosition)}, [])

  return (
    <div>
        Cordinates of Mouse X: {x} and Y: {y}
    </div>
  )
}

export default HookMouse