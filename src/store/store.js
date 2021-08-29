import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./feautres/counter";
import episodeReducer from "./feautres/episodesSlice";

export default configureStore({
    reducer: {
        counter: counterReducer,
        episodes: episodeReducer,
    },
});
