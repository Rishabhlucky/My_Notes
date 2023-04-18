import AddNotes from "./AddNotes";
import Note from "./Note";
import Search from "./Search";
import { useEffect, useState } from "react";
import { nanoid } from 'nanoid';
import Header from './Header';

let data  = [
    {
        id:nanoid(),
        text:' This is my frist note !',
        date:'11/02/2021'
    },
    {
        id:nanoid(),
        text:' This is my secons note !',
        date:'16/02/2021'
    },
    {
        id:nanoid(),
        text:' This is my third note !',
        date:'15/03/2021'
    },
    {
        id:nanoid(),
        text:' This is my forth note !',
        date:'7/05/2021'
    },
]

const NotesList =({handleMood}) =>{
const[notes,setNotes] = useState(data);
const [serachInput , setSeachInput] =useState('');

useEffect(()=>{
    const savaedNotes =JSON.parse(localStorage.getItem('react-notes-app-data'))
    if(savaedNotes){
        setNotes(savaedNotes)
    }
    },[])
    
     useEffect (()=>{
        localStorage.setItem('react-notes-app-data' , JSON.stringify(notes))
     },[notes])

  let addList = (text)=>{
    const date =new Date();
    const newNote ={
        id:nanoid(),
        text:text,
        date:date.toLocaleDateString()
    }
    const newNotes=[...notes, newNote];
    setNotes(newNotes)
    
  }
   let delateNotes =(id)=>{
   let newNotes = notes.filter((note)=> note.id !==id)
   setNotes(newNotes)
  }

    let filterNotes =notes.filter((note)=>note.text.toLowerCase().includes(serachInput));
    console.log(filterNotes);
    console.log(serachInput);


  
    return (
        <>
        <Header handleMood={handleMood}/>
        <Search handleSeach={setSeachInput}/>
        <div className="Note-list">
           {filterNotes.map( note => {
           return <Note id={note.id} text={note.text} date ={note.date} handleDelete={delateNotes}/>
            })}
            <AddNotes handleAddnote={addList} />
        </div>
        </>
    )
}

export default NotesList;