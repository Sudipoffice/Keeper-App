import React,{useState} from "react";
// import inputNotes from "../inputNotes.js";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
// import Note from "./Note.jsx";
import InputNote from "./InputNote.jsx";
import NoteItem from "./NoteItem.jsx";



function App(){
    const [items, setItems] = useState([]);

    function deleteItem(id){
        setItems((prevValue) =>{
        return prevValue.filter((item, index) =>{ 
            return index !== id
        })
    });
    }
    function addNote(newNote){
        setItems(prevItems =>
            {return [...prevItems, newNote]}
             );
    }
    return (
        <div>
        <Header/>
        <InputNote onAdd={addNote}/>
        {items.map((note, index) =>{
            return <NoteItem 
                id={index}
                key={index}
                onDelete={deleteItem}
                title={note.title}
                content={note.content}
            />}
            )}
        <Footer/>
        </div>
    );
}

export default App;