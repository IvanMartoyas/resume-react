
import { configureStore } from '@reduxjs/toolkit'
import langReduser from './_lang'

export const store = configureStore({
  reducer: {
    lang: langReduser,
  },
})