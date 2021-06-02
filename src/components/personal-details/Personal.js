import React, { useContext } from 'react'
import { Context } from '../context/ContextProvider'
import './css/personal.css'
function Personal() {
    const {color}=useContext(Context)
    return (
        <div className="personal">
            <h3>PERSONAL DETAILS</h3>
            <h4 style={{color:color}}>Address</h4>
            <p contentEditable="true" suppressContentEditableWarning={true}>Enter your addres</p>
        </div>
    )
}

export default Personal
