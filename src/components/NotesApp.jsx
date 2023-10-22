import React from "react";
import { getInitialData } from "../utils";
import Navbar from './Navbar';
import FormNotes from './FormNotes';
import NotesList from './NotesList';
import BodyList from "./BodyList";

class NotesApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: getInitialData(),
            search: '',
        }

        this.onAddNotesHandler = this.onAddNotesHandler.bind(this);
        this.onDeleteNoteHandler = this.onDeleteNoteHandler.bind(this);
        this.onSearchHandler = this.onSearchHandler.bind(this);
        this.onArsipAndActiveHander = this.onArsipAndActiveHander.bind(this);
    }

    onSearchHandler(search) {
        this.setState(() => {
            return  {
                search
            }
        })
    }

    onAddNotesHandler({ title, body }) {
        this.setState((prevState) => {
            console.log(prevState.notes);
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

    onArsipAndActiveHander(id) {
        const note = this.state.notes.find(note => note.id === id);
        (note.archived) ? note.archived = false : note.archived = true;
        this.setState((prevState) => {
            return {
                notes: [
                    ...prevState.notes,
                ]
            }
        })
    }

    render() {
        return (
            <>
                <Navbar onSearch={this.onSearchHandler}/>
                <FormNotes addNotes={this.onAddNotesHandler}/>
                <BodyList search={this.state.search} notes={this.state.notes} onDeleteNotes={this.onDeleteNoteHandler} onMove= {this.onArsipAndActiveHander}/>
            </>
        )
    }
}

export default NotesApp;