import React, { useContext } from 'react'
import { Context } from '../context/ContextProvider'
import './css/name.css'
function Name() {

    const {color,selectedSiteLang}=useContext(Context)
    return (
        <div className="name">
            <h1 style={{color:color}} contentEditable={true} suppressContentEditableWarning={true}>
                {selectedSiteLang==="azerbaijan.png"?'Ad Soyad':'Your name'}
            </h1>
            <h2 contentEditable={true} suppressContentEditableWarning={true}>YOUR PROFESSION OR SPECIALITY</h2>
            

        </div>
    )
}

export default Name
