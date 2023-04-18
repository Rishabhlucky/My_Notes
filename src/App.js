import React,{useState} from "react";
import NotesList from "./Components/NotesList";

const App = ()=>{
  const [toggleMood ,setToggleMood] =useState(false);
  return (
    <div className={`${toggleMood && 'dark-mood'}`}>
    <div className="container">
     <NotesList handleMood={setToggleMood}/>
    </div>
    </div>
  )
}

export default App;