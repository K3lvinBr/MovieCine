import { createSlice, PayloadAction } from '@reduxjs/toolkit'

//types
import { DataItem } from '../@types/dataTypes'


const INITIAL_STATE: DataItem = {
    backdrop_path:         '', 
    belongs_to_collection: {},
    overview:              '',
    popularity:            0,
    poster_path:           '',
    production_companies:  [],
    release_date:          0,
    title:                 ''
}

const sliceGetDetailMovie = createSlice({
    name: 'detailMovie',
    initialState: INITIAL_STATE,
    reducers: {
      item: (state, { payload }: PayloadAction<DataItem>) => {
        return payload
      }
    }
  })

  export default sliceGetDetailMovie.reducer

export const { item } = sliceGetDetailMovie.actions

export const useItem = (state: any) => {
  return state.detailMovie as DataItem
}