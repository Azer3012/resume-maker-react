import Resume from "./components/resume/Resume"
import './app-css/app.css'
import Settings from "./components/resume-settings/Settings";
import { useContext } from "react";
import { Context } from "./components/context/ContextProvider";
import SiteLang from "./components/site-lang/SiteLang";

function App() {
  
  const {color,selectedFont}=useContext(Context)
  return (
    <div style={{background:color,fontFamily:selectedFont}} className="app" >
      <Settings/>
      <Resume/>

      <SiteLang/>

      
    </div>
  );
}

export default App;
