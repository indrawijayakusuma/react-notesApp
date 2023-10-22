/* eslint-disable react/prop-types */
import React from "react";
import NotesListItem from "./NotesListItem";

    function NotesList({ notes, view, onDeleteNotes, onMove }) {
        if (notes.length === 0) {
            return (
            <div className="flex flex-col w-[70%] mx-auto mt-12">
                <h3 className="text-2xl font-semibold">Catatan {view}</h3>
                <h1 className="text-center">tidak ada catatan</h1>
            </div>
            )
        }else {
            return (
                <>
                    <div className="flex flex-col w-[70%] mx-auto mt-12">
                        <h3 className="text-2xl font-semibold">Catatan {view}</h3>
                        <div className="grid grid-cols-4 mt-5 gap-4">
                            {
                                notes.map((note) => (
                                    <NotesListItem key={note.id} {...note} onMove= {onMove} onDeleteNotes={onDeleteNotes}/>
                                ))
                            }
                        </div>
                    </div>
                </>
            );
        }
    }

    export default NotesList;