import { configureStore } from '@reduxjs/toolkit'
import Example from '@/services/store/example'

export const store = configureStore({
  reducer: {
    Example
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
