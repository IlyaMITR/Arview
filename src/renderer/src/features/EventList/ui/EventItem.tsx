import { EventType, ICalendarEvent } from "@renderer/shared/config/event"
import { useAppDispatch } from "@renderer/shared/model/hooks/redux"
import { deleteCalendarEvent, writeEventsToLS } from "@renderer/shared/model/slices/events.slice"


const EventItem = ({ id, type, title, adress, time, budget, note }: ICalendarEvent) => {

	const dispatch = useAppDispatch()

	const deleteEvent = () => {
		dispatch(deleteCalendarEvent(id))
		dispatch(writeEventsToLS())
	}

	return (
		<div className="event-item">
			<div className="event-item__title">{title}</div>
			<div className="event-item__additions">

				{
					type === EventType.Holiday && <div className="addition">Бюджет: {budget}</div>
				}
				
				{
					type === EventType.Activity && <>
						<div className="addition">Адрес: {adress}</div>
						<div className="addition">Время: {time}</div>
					</>
				}

				{
					type === EventType.Note && <div className="addition">{note}</div>
				}

			</div>

			<div className="event-item__controls">
				
				<button title='Удалить' onClick={deleteEvent}>❌</button>
				<button title='Редактировать'>✏️</button>

			</div>
		</div>
	)
}

export default EventItem