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
    }

    OnSearchHandler() {
        
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

    render() {
        return (
            <>
                <Navbar/>
                <FormNotes addNotes={this.onAddNotesHandler}/>
                <NotesList notes={this.state.notes.filter(note => note.archived !== true)}/>
                <NotesList notes={this.state.notes.filter(note => note.archived === true)}/>
            </>
            
        )
    }
}

export default NotesApp;