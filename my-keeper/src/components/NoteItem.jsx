import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash} from '@fortawesome/free-solid-svg-icons';


function NoteItem(props){


    function handleClick(){
        props.onDelete(props.id);
    }

    return (
        
        <div className="note">
        <h2>{props.title}</h2>
        <p>{props.content} </p>
        <button onClick={handleClick}
        className="delete-input">
            <FontAwesomeIcon icon={faTrash }/>
        </button>
        </div>
       
    );
}

export default NoteItem;