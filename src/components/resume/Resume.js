import React, { useContext } from 'react'
import { Context } from '../context/ContextProvider'
import Left from '../left-side/Left'
import Right from '../right-side/Right'

import './css/resume.css'
function Resume() {
    const {refPdf}=useContext(Context)
    return (
        <div ref={refPdf} className="resume">
            <Left/>
            <Right/>
        </div>
    )
}

export default Resume
