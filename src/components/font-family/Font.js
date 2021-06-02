import React, { useContext } from 'react'
import './css/font.css'

import 'bootstrap/dist/css/bootstrap.min.css'
import { Context } from '../context/ContextProvider'
function Font() {
    const {fonts,changeFont}=useContext(Context)
    return (
        <div className="font">

            <select onChange={(e)=>changeFont(e.target.value)}  className="form-control"  name="" id="">
                {
                    fonts.map(font=>(
                        <option key={font.name} value={font.family}>{font.name}</option>
                    ))
                }
                
                
            </select>

            <span>Font</span>
            
        </div>
    )
}

export default Font
