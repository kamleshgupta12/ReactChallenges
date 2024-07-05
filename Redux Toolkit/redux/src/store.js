import { configureStore } from '@reduxjs/toolkit'
import CounterSlice from './redux/CounterSlice'

export const store = configureStore({
  reducer: {
    counter:CounterSlice
  },
})