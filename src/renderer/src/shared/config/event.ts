export enum EventType {
  Holiday = 'holiday',
	Activity = 'activity',
	Note = 'note'
}

export interface ICalendarEvent {
  id: number
  date: Date
  type: EventType
  title: string
  adress?: string
  time?: string
  budget?: string
  note?: string
}