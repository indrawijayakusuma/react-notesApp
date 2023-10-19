import React from "react";
import { getInitialData } from "../utils";
import Navbar from './Navbar';
// import FormNotes from './FormNotes';
// import ActiveNotes from './ActiveNotes';
// import ArsipNotes from './ArsipNotes';

class NotesApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: getInitialData(),
        }
    }

    OnSearchHandler() {
        
    }

    render() {
        return (
            <>
                <Navbar/>
            </>
            
        )
    }
}

export default NotesApp;