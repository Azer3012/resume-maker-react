import { createContext, createRef, useState } from "react";

import { v4 as uuidv4 } from 'uuid';
export const Context = createContext();

const ContextProvider = ({ children }) => {
  const [colors, setColors] = useState([
    { name: "#136DCE" },
    { name: "#B53B7E" },
    { name: "#EE9737" },
    { name: "#54C2A5" },
  ]);

  const [color, setColor] = useState("#136DCE");

  const [colorClickBtn, setColorClickBtn] = useState(false);

  const [btnColor, setBtnColor] = useState(colors[2].name);

  const [fonts,setFonts]=useState([
      
          {name:"Poppins",family:'"Poppins", sans-serif'},
          {name:"Nunito",family:'"Nunito Sans", sans-serif'},
          {name:"MerriWeather",family:'"Merriweather Sans", sans-serif'},
          {name:"Incosolata",family:'"Inconsolata", monospace'},
          {name:"Karla",family:'"Karla", sans-serif'},
          {name:"FiraSans",family:'"Fira Sans", sans-serif'},
          {name:"Saira",family:'"Saira Semi Condensed", sans-serif'},
          
      
  ])

  const [selectedFont,setSelectedFont]=useState(null)

  const [skills, setSkills] = useState([{ id: 1, skill: "skill" }]);

  const [works,setWorks]=useState([
    {id:1,position:"Position",employer:"Employer",workDescription:"lorem ipsum dolar",date:"From-Until"}
])

const [educations,setEducations]=useState([
    {id:1,degree:"Degree",school:"School",date:"From-Until"}
])

const [langs,setLangs]=useState([
    {id:1,text:""}
])
const [projects,setProjects]=useState([
    {id:1,text:""}
])

const [selectedPhoto,setSelectedPhoto]=useState(false)

const [siteLang,setSiteLang]=useState([
    {lang:"united.png"},
    {lang:"azerbaijan.png"}
])


const [selectedSiteLang,setSelectedSiteLang]=useState("")

const selectedLang=(lang)=>{
    setSelectedSiteLang(lang)
}


  const clicked = () => {
    setColorClickBtn(!colorClickBtn);
  };

  const changeColor = (color) => {
    setColor(color);

    if (color === "rgb(19, 109, 206)") {
      setBtnColor(colors[2].name);
    } else if (color === "rgb(181, 59, 126)") {
      setBtnColor(colors[3].name);
    } else if (color === "rgb(238, 151, 55)") {
      setBtnColor(colors[0].name);
    } else if (color === "rgb(84, 194, 165)") {
      setBtnColor(colors[1].name);
    } else {
      setBtnColor(colors[2].name);
    }
  };


  const changeFont=(font)=>{
        setSelectedFont(font)
  }

  
  
  const addSkill=()=>{
      setSkills([...skills,{id:uuidv4(),skill:"skill"}])
  }

  const removeSkill=(id)=>{
      setSkills(skills.filter(skill=>skill.id!==id))
  }


 

const addWork=()=>{
    setWorks([...works,{id:uuidv4(),position:"Position",employer:"Employer",workDescription:"lorem ipsum dolar",date:"From-Until"}])
}

const removeWork=(id)=>{
   setWorks(works.filter(work=>work.id!==id))
}




const addEducation=()=>{
    setEducations([...educations,{id:uuidv4(),degree:"Degree",school:"School",date:"From-Until"}])
}

const removeEducation=(id)=>{
   setEducations(educations.filter(education=>education.id!==id))
}
const addLang=()=>{
    setLangs([...langs,{id:uuidv4(),text:""}])
}

const removeLang=(id)=>{
   setLangs(langs.filter(lang=>lang.id!==id))
}
const addProject=()=>{
    setProjects([...projects,{id:uuidv4(),text:""}])
}

const removeProject=(id)=>{
   setProjects(projects.filter(project=>project.id!==id))
}


  const refPdf = createRef();

  return (
    <Context.Provider
      value={{ colors, color, changeColor, clicked, colorClickBtn, btnColor,fonts,changeFont,selectedFont,refPdf,
        skills,addSkill,removeSkill,works,addWork,removeWork,educations,addEducation,removeEducation,langs,addLang,removeLang,projects,addProject,removeProject,siteLang,setSelectedSiteLang,selectedLang }}
    >
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;
