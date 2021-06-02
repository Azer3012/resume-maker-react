import React from 'react'
import Education from '../education/Education'
import Lang from '../lang-skill/Lang'
import Name from '../name-profession/Name'
import Projects from '../project-skill/Projects'
import Skills from '../skills/Skills'
import Work from '../work/Work'
import './css/right.css'
function Right() {
    return (
        <div className="right">
            <Name/>
            <Work/>
            <Education/>
            <Skills/>
            <div className="lang-projects">
                <Lang/>
                <Projects/>
            </div>
        </div>
    )
}

export default Right
