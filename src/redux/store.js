import { configureStore } from '@reduxjs/toolkit'
import rootReducer from '../redux/reducers/rootReducers';

export const store = configureStore({
    reducer: rootReducer
})
