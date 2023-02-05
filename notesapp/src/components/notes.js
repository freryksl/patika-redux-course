import NotesHeader from "./notesheader"
import NotesText from "./notestext"
import NotesList from "./noteslist"

function Notes() {
    return(
        <div className="notes">
            <div className="notes-header">
                <NotesHeader />
            </div>
            <div className="notes-text">
                <NotesText />
            </div>
            <div className="notes-footer">
                <NotesList />
            </div>
        </div>
    )
}

export default Notes