import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "../../app/store"
import { fetchToken } from "./fetchToken"

export interface LoginState {
    token: string;
    status: "loggedOut" | "loading" | "loggedIn" | "failed";
}

const initialState: LoginState = {
    token: "",
    status: "loggedOut"
}

export const loginThunk = createAsyncThunk("login/loginThunk", async (password: string) => {
    const response = await fetchToken(password);
    return response.data;
})

export const loginSlice = createSlice({
    name: "login",
    initialState,
    reducers: {
        resetToken: (state) => {
            state.token = "";
            state.status = "loggedOut";
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginThunk.pending, (state) => {
                state.status = "loading";
            })
            .addCase(loginThunk.fulfilled, (state, action: PayloadAction<string>) => {
                state.token = action.payload;
                state.status = "loggedIn";
            })
            .addCase(loginThunk.rejected, (state) => {
                state.status = "failed";
            });
    }
})

export const {resetToken } = loginSlice.actions;

export const selectLogin = (state: RootState) => state.login;

export default loginSlice.reducer;
