import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { EventType, ICalendarEvent } from '@renderer/shared/config/event'


const empty = [
  {
    id: 0,
    date: new Date(new Date().setHours(0, 0, 0)),
    type: EventType.Holiday,
    title: 'День рождения собаки',
    budget: '300 $'
  },
  {
    id: 1,
    date: new Date(new Date().setHours(0, 0, 0)),
    type: EventType.Activity,
    title: 'Пьянка у соседа',
    adress: '309 кв',
    time: '13:59'
  },
  {
    id: 2,
    date: new Date(new Date().setHours(0, 0, 0)),
    type: EventType.Note,
    title: 'Заметочка',
    note: 'По дороге домой после работы купить хлеба'
  }
]

const initialState = {
  selectedDay: new Date(
    JSON.parse(window.localStorage.getItem('selectedDay') || `${new Date().setHours(0, 0, 0)}`)
  ) as Date,
  events: JSON.parse(window.localStorage.getItem('events') || JSON.stringify(empty)).map((e) => ({
    ...e,
    date: new Date(e.date)
  })) as ICalendarEvent[]
}


export const eventsSlice = createSlice({
	name: 'events',
	initialState,
	reducers: {
		setSelectedDay: (state, { payload }: PayloadAction<Date>) => {
			state.selectedDay = payload
		},
		addCalendarEvent: (state, { payload }: PayloadAction<ICalendarEvent>) => {
			state.events.push(payload)
		},
		deleteCalendarEvent: (state, { payload }: PayloadAction<number>) => {
			state.events = state.events.filter((e) => e.id !== payload)
		},
		editCalendarEvent: (state, { payload }: PayloadAction<ICalendarEvent>) => {
			const currentID = state.events.findIndex((e) => e.id === payload.id)
			state[currentID] = payload
		},
		writeEventsToLS: (state) => {
			window.localStorage.setItem('selectedDay', JSON.stringify(state.selectedDay))
			window.localStorage.setItem('events', JSON.stringify(state.events))
		}
	}
})

export const {
	setSelectedDay,
	addCalendarEvent,
	deleteCalendarEvent,
	editCalendarEvent,
	writeEventsToLS
} = eventsSlice.actions
