/* eslint-disable react/prop-types */
import React from "react";
import NotesList from "./NotesList";
function BodyList({ search, notes, onDeleteNotes, onMove}) {

    if (!search) {
        return (
            <>
                <NotesList notes={notes.filter(note => note.archived === false)} onDeleteNotes={onDeleteNotes} view={'Active'} onMove= {onMove}/>
                <NotesList notes={notes.filter(note => note.archived === true)} onDeleteNotes={onDeleteNotes} view={'Arsip'} onMove= {onMove}/>
            </>
        )
        
    } else {
        return (
            <>
                <NotesList
                    notes={notes.filter(note => note.archived === false && note.title.toLowerCase().includes(search.toLowerCase()))} 
                    onDeleteNotes={onDeleteNotes} 
                    view={'Active'}
                    onMove= {onMove}
                />
                <NotesList 
                    notes={notes.filter(note => note.archived === true && note.title.toLowerCase().includes(search.toLowerCase()))} 
                    onDeleteNotes={onDeleteNotes} 
                    view={'Arsip'}
                    onMove= {onMove}
                />
            </>
        )
    }
}

export default BodyList;