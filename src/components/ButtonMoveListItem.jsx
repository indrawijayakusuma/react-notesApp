/* eslint-disable react/prop-types */
import React from "react";
function ButtonMoveListItem({ archived, onMove, id }) {
    if (!archived) {
        return (
            <>
                <button type="button" onClick={() => onMove(id)} className="border border-yellow-400 rounded-br-md w-1/2">Arsipkan</button>
            </>
        )
    }
    return (
        <>
            <button type="button" onClick={() => onMove(id)} className="border border-yellow-400 rounded-br-md w-1/2">Pindahkan</button>
        </>
    )
}

export default ButtonMoveListItem;