import {useMemo} from "react"
import { Button } from '@chakra-ui/react'
import { useSelector, useDispatch } from "react-redux";
import { selectNote } from "../redux/notes/notesSlice";
import { IoEyeOutline } from "react-icons/io5";

function NotesList() {
    const dispatch = useDispatch()
  let filter = useSelector(state => state.notes.searched)
  let notes = useSelector(state => state.notes.notes)
  const notesFilter = useMemo(()=> {
    return notes.filter(note => note.title.toLowerCase().includes(filter.toLowerCase()))
  }, [filter, notes])
  return <div className="notes-footer-inner">
    {notesFilter.map((note) => (
    <Button key={note.id} onClick={() => dispatch(selectNote(note.id))} colorScheme={note.color}>
        {note.title}
        {note.selected && <IoEyeOutline className="banner" color={"#172b4d"} size={25} />}
    </Button>
  ))}
  </div>
}

export default NotesList;
