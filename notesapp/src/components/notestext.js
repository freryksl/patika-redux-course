import {useState, useMemo} from "react"
import { Textarea, Button } from '@chakra-ui/react'
import { useDispatch, useSelector } from "react-redux"
import { addNote, selectColor } from "../redux/notes/notesSlice"
import {v4} from "uuid";

function NotesText() {
    const dispatch = useDispatch()
    const notes = useSelector((state) => state.notes.notes);
    const colors = useSelector((state) => state.notes.colors);
    const selectedColor = colors.filter(color => color.selected === true)[0].color
    const [selectedNote, setSelectedNote] = useState("")
    useMemo(() => {
        const text = notes.filter(notes => notes.selected === true)[0]?.text || ""
        setSelectedNote(text)
    }, [notes])
    function onSubmit(e) {
        e.preventDefault();
        dispatch(addNote({id: v4(), title: "Note "+(notes.length+1), text: selectedNote, color: selectedColor}))
        setSelectedNote("")
    }
    return <div className="notes-text-inner">
        <form onSubmit={onSubmit}>
        <Textarea resize="none" value={selectedNote} onChange={e => setSelectedNote(e.target.value)} placeholder="Enter a note..." />
        <div className="notes-text-footer">
            <div className="notes-text-footer-buttons">
                <div className="color-palette">
                    {colors.map(color => (<span key={color.id} className={color.selected ? "selected" : ""} onClick={() => dispatch(selectColor(color.id))}
                    style={{"--data-color": color.hex, backgroundColor: color.hex}}></span>))}
                </div>
                <div className="add-button">
                    <Button type="submit" colorScheme={selectedColor}>Add</Button>
                </div>
            </div>
        </div>
        </form>
    </div>
}

export default NotesText