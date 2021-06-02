import React, { useContext } from 'react'
import { Context } from '../context/ContextProvider'

import './site-lang.css'
function SiteLang() {
    const {siteLang,selectedSiteLang,selectedLang}=useContext(Context)

    
    return (
        <div className="site-lang">
            {siteLang.map(lang=>(
                <img onClick={e=>selectedLang(lang.lang)}  key={lang.lang} src={lang.lang} alt={lang.lang} />
            ))}
        </div>
    )
}

export default SiteLang
