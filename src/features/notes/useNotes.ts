import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { useToken } from "../../app/useToken"
import { fetchNotesThunk, selectNotes } from "./notesSlice"

export const useNotes = () => {
    const dispatch = useAppDispatch();
    const notes = useAppSelector(selectNotes);
    const token = useToken();

    useEffect(() => {
        dispatch(fetchNotesThunk(token.value));
    }, [token.value, dispatch])

    return notes;
}