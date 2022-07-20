import React, {useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPlus} from '@fortawesome/free-solid-svg-icons';
// import Fab from '@mui/material/Fab';
// import Zoom from '@mui/material/Zoom';
// import Fab from '@material-ui/core/Fab';
// import Zoom from '@material-ui/core/Zoom';

function InputNote(props){
    const [note, setNote] = useState({
        title: "",
        content: ""
    });

    const [Expand, setExpand] = useState(false);

    function handleChange(event){
        const {name, value} = event.target;
        setNote(prevNote =>{
            return {...prevNote, [name]: value};
        });
    }
    function addItem(event){
        props.onAdd(note);
            setNote({
                title: "",
                content: ""
            })
        event.preventDefault();
    }
    function isExpanded(){
        setExpand(true);
    }

    return(
        <div >
        <form className="create-note">
        {Expand? <input onChange={handleChange} name="title" value={note.title}  placeholder="Title"/> : null}
    <textarea onClick={isExpanded} onChange={handleChange}  name="content" value={note.content}  rows= {Expand? 3 : 1 } placeholder="Take a note..."/>
            {Expand? 
            
            <button onClick={addItem} className="note-add">
            <span>
            <FontAwesomeIcon icon={faPlus} />
            </span>
            </button>
           
             : null}
        </form>
        </div>
        
    );
}

// {/* <Zoom in={Expand}> */}
 {/* </Zoom> */}
export default InputNote;
