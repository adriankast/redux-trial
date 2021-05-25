import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { RootState } from "../../app/store"
import { fetchNotes } from "./fetchNotes"

export interface NotesState {
    value: string[];
    status: 'idle' | 'loading' | 'failed';
}

const initialState: NotesState = {
    value: [],
    status: "idle"
}

export const fetchNotesThunk = createAsyncThunk("notes/fetchNotes", 
async (token: string) => {
    const response = await fetchNotes(token);
    return response.data;
})

export const notesSlice = createSlice({
    name: "notes",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchNotesThunk.pending, state => {
                state.status = "loading";
            })
            .addCase(fetchNotesThunk.fulfilled, (state, action) => {
                state.status = "idle";
                state.value = action.payload;
            })
            .addCase(fetchNotesThunk.rejected, state => {
                state.status = "failed";
            })
    }
})

export const selectNotes = (state: RootState) => state.notes;

export default notesSlice.reducer;