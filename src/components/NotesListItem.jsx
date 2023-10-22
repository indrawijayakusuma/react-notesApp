/* eslint-disable react/prop-types */
import React from "react";
import { showFormattedDate } from "../utils";
import ButtonMoveListItem from "./ButtonMoveListItem";


function NotesListItem({ title, id, body, createdAt, onDeleteNotes, archived, onMove }) {
    return (
        <>
            <div>
                <div className="flex flex-col h-72 gap-2 border border-gray-40 p-3 rounded-t-lg">
                    <h3 className="text-xl font-semibold">{title}</h3>
                    <p>{showFormattedDate(createdAt)}</p>
                    <p className="text-sm">{body}</p>
                </div>
                <div className="flex w-full h-8">
                        <button type="button" className="border border-red-500 rounded-bl-md w-1/2" onClick={() => onDeleteNotes(id)}>Delete</button>
                        <ButtonMoveListItem id={id} onMove={onMove} archived={archived}/>
                </div>
            </div>
        </>
    )
}

export default NotesListItem;