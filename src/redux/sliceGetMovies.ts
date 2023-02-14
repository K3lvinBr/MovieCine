import { createSlice, PayloadAction } from '@reduxjs/toolkit'

//types
import { DataProps } from '../@types/dataTypes'


const INITIAL_STATE: DataProps[] = []

const sliceGetMovies = createSlice({
  name: 'movies',
  initialState: INITIAL_STATE,
  reducers: {
    data: (state, { payload }: PayloadAction<DataProps[]>) => {
      return payload
    }
  }
})

export default sliceGetMovies.reducer

export const { data } = sliceGetMovies.actions

export const useData = (state: any) => {
  return state.movies as DataProps[]
}
