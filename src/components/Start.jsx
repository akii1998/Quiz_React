import React, { useRef } from 'react'

function Start({SetUser}) {
    const inputRef=useRef();
    const handleClickaName=()=>{
        inputRef.current.value && SetUser(inputRef.current.value)
        localStorage.setItem("userName",JSON.stringify(inputRef.current.value))
    }
  return (
    <div className='start'>
    <input  placeholder='Enter your Name' className="startInput" ref={inputRef} />
    <button className="startButton" onClick={handleClickaName}>Start</button>
    </div>
  )
}

export default Start