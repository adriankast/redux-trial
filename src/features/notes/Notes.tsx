import { useNotes } from "./useNotes"

const Notes = () => {
    const notes = useNotes();

    return (notes.status === "idle" ? (<ul>
            {notes.value.map((note) => <li key={note}>{note}</li>)}
        </ul>)
    : (notes.status === "loading" ? <span>...</span> : <span>some error :(</span>)
    )
}

export default Notes;