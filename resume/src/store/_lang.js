import { createSlice } from '@reduxjs/toolkit'

const STATE = {
  value: 0,
}

export const langSlice = createSlice({
  name: 'lang',
  initialState: STATE,
  reducers: {
    setLang: (state, action) => {
      state.value = action.payload
    },
  },
  devTools: true,
})

console.log('langSlice.actions ',langSlice.actions)
export const {setLang} = langSlice.actions;

export default langSlice.reducer;