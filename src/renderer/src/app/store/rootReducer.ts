import { combineReducers } from '@reduxjs/toolkit'

import { eventsSlice } from '@renderer/shared/model/slices/events.slice'


export const rootReducer = combineReducers({
  [eventsSlice.name]: eventsSlice.reducer
})
