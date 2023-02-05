import {Input, Text} from "@chakra-ui/react"
import {useDispatch} from "react-redux"
import {searchNotes} from "../redux/notes/notesSlice"

function NotesHeader() {
    const dispatch = useDispatch()
    const setSearch = val => {
        dispatch(searchNotes(val))
    }
    return <div className="notes-header">
        <Text fontSize="5xl">Notes App</Text>
        <br />
        <Input onChange={e => setSearch(e.target.value)} placeholder='Search...' size='md' />
    </div>
}

export default NotesHeader