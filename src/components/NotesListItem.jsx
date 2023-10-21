/* eslint-disable react/prop-types */
import React from "react";
import { showFormattedDate } from "../utils";


function NotesListItem({ title, id, body, createdAt, onDeleteNotes }) {
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
                        <button type="button" className="border border-yellow-400 rounded-br-md w-1/2">Arsipkan</button>
                </div>
            </div>
        </>
    )
}

export default NotesListItem;