import React from 'react'
import Download from '../download-pdf/Download'
import Color from '../font-color/Color'
import Font from '../font-family/Font'
import './css/settings.css'
function Settings() {
    return (
        <div className="settings">
            <div className="font-settings">
                <Color/>
                <Font/>
            </div>
            
            <Download/>
        </div>
    )
}

export default Settings
