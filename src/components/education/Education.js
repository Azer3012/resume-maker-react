import React,{useContext} from 'react'

import { Context } from '../context/ContextProvider';
import './css/education.css'
function Education() {
    
    
    const {color,educations,addEducation,removeEducation}=useContext(Context)

    return (
        <div className="education">
            <h2>EDUCATION</h2>
           <ul>
               {
                   educations.map((education)=>(
                       <li key={education.id}>
                           <h3 style={{color:color}} contentEditable={true} suppressContentEditableWarning={true}>{education.degree}</h3>
                           <h3 contentEditable={true} suppressContentEditableWarning={true}>{education.school}</h3>
                           
                           <span contentEditable={true} suppressContentEditableWarning={true} className="date">{education.date}</span>
                           <span style={{backgroundColor:color}} className="circle"></span>
                           <span className="line">.</span>
                           <div className="add-remove">
                               <button onClick={()=>removeEducation(education.id)}>-</button>
                               <button onClick={addEducation}>+</button>
                           </div>
                       </li>
                   ))
               }
           </ul>
        </div>
    )
}

export default Education
