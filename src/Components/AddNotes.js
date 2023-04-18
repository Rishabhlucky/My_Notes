import React ,{ useState} from 'react'

const AddNotes = ({ handleAddnote }) => {
  const [noteText, setNodeText] =useState('')
    let charecters =200;
  const handleChange = (event)=>{
    if((charecters - (event.target.value.length)) >= 0){
      setNodeText(event.target.value);
    }
  }
function handleClick (){
  handleAddnote(noteText)
  setNodeText('')
}

  return (
    <div className='note new'>
        <textarea rows='8' cols='10'
         placeholder='Type to add something...' 
         value={noteText}
         onChange={handleChange}
        />
        <div className='note-footer'>
            <small>{ charecters -noteText.length} remaining</small>
            <button className='save' onClick={handleClick}>Save</button>
        </div>
    </div>
  )
}

export default AddNotes