import {createSlice} from "@reduxjs/toolkit"

function reset(state, action) {
    let prev = state.notes.filter(val => val.selected === true && val.id !== action.payload)
    if(prev.length > 0) {
        prev[0].selected = false
    }
}

export const notesSlice = createSlice({
    name: "notes",
    initialState: {
        notes: [{
            
            id: 1,
            title: "Note 1",
            text: "This is Text 1",
            color: "pink",
            selected: false
        }, {
            
            id: 2,
            title: "Note 2",
            text: "This is Text 2",
            color: "purple",
            selected: false
        },{
            
            id: 3,
            title: "Note 3",
            text: "This is Text 3",
            color: "red",
            selected: false
        }],
        colors: [{
            id: 1,
            color: "pink", 
            hex: "#D53F8C",
            selected: true
        },{
            id: 2,
            color: "purple", 
            hex: "#805AD5",
            selected: false
        },{
            id: 3,
            color: "red", 
            hex: "#E53E3E",
            selected: false
        },{
            id: 4,
            color: "blue", 
            hex: "#3182CE",
            selected: false
        },{
            id: 5,
            color: "green", 
            hex: "#38A169",
            selected: false
        }],
        searched: ""
    },
    reducers: {
        addNote: (state, action) => {
            state.notes.push(action.payload);
            reset(state, action)
        },
        selectColor: (state, action) => {
            let prev = state.colors.filter(val => val.selected === true)
            prev[0].selected = false
            let color = state.colors.filter(val => val.id === action.payload)
            color[0].selected = true
        },
        selectNote: (state, action) => {
            reset(state, action)
            let note = state.notes.filter(val => val.id === action.payload)
            note[0].selected = !note[0].selected
        },
        searchNotes: (state, action) => {
            state.searched = action.payload
        }
    }
})

export const {addNote, selectColor, selectNote, searchNotes} = notesSlice.actions
export default notesSlice.reducer