import { createSlice } from "@reduxjs/toolkit";

export const episodeSlice = createSlice({
    name: "episodes",
    initialState: {
        episodes: [],
    },
    reducers: {
        addEpisode: (state, action) => {
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            state.episodes.push(action.payload);
        },
        removeEpisode: (state, action) => {
            state.episodes = state.episodes.filter(
                (episode) => episode.id !== action.payload.id
            );
        },
        changeEpisodeStatus: (state, action) => {
            state.episodes.map((item) => {
                if (item.id === action.payload.id) item.checked = !item.checked;
            });
        },
    },
});

// Action creators are generated for each case reducer function
export const {
    addEpisode,
    removeEpisode,
    changeEpisodeStatus,
} = episodeSlice.actions;

export default episodeSlice.reducer;
