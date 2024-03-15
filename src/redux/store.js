import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './slides/counterslide'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
})