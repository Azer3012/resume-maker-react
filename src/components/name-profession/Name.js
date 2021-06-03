import React, { useContext } from 'react'
import { Context } from '../context/ContextProvider'
import './css/name.css'
function Name() {

    const {color,azLang}=useContext(Context)
    return (
        <div className="name">
            <h1 style={{color:color}} contentEditable={true} suppressContentEditableWarning={true}>
                {azLang?"Ad Soyad":"Your name"}
            </h1>
            <h2 contentEditable={true} suppressContentEditableWarning={true}>
                {azLang?"İxtisas və ya Peşəniz":"YOUR PROFESSION OR SPECIALITY"}
            </h2>
            

        </div>
    )
}

export default Name
