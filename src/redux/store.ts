import { configureStore } from "@reduxjs/toolkit";
import sliceGetDetailMovie from "./sliceGetDetailMovie";
import sliceGetMovies from "./sliceGetMovies";

const store = configureStore({
    reducer: {
        movies: sliceGetMovies,
        detailMovie: sliceGetDetailMovie
    }
})

export default store