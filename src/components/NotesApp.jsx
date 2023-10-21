import React from "react";
import { getInitialData } from "../utils";
import Navbar from './Navbar';
import FormNotes from './FormNotes';
import NotesList from './NotesList';

class NotesApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: getInitialData(),
        }

        this.onAddNotesHandler = this.onAddNotesHandler.bind(this);
        this.onDeleteNoteHandler = this.onDeleteNoteHandler.bind(this);
    }

    OnSearchHandler() {
        
    }

    onViewHandler() {
        
    }

    onAddNotesHandler({ title, body }) {
        this.setState((prevState) => {
            return {
                notes: [
                    ...prevState.notes,
                    {
                        id: +new Date(),
                        title,
                        body,
                        createdAt: +new Date(),
                        archived: false,
                    }
                ]
            }
        })
    }

    onDeleteNoteHandler(id) {
        const notes = this.state.notes.filter((note) => note.id !== id);
        this.setState({notes})
    }

    render() {
        return (
            <>
                <Navbar/>
                <FormNotes addNotes={this.onAddNotesHandler}/>
                <NotesList notes={this.state.notes.filter(note => note.archived !== true)} onDeleteNotes={this.onDeleteNoteHandler} view={'Active'}/>
                <NotesList notes={this.state.notes.filter(note => note.archived === true)} onDeleteNotes={this.onDeleteNoteHandler} view={'Arsip'}/>
            </>
            
        )
    }
}

export default NotesApp;