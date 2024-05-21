import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './src/features/counter/counterSlice'

export default configureStore({
    reducer: {
        counter: counterReducer
    }
})