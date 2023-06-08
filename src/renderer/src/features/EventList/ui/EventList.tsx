import { useAppSelector } from "@renderer/shared/model/hooks/redux"

import EventItem from "./EventItem"
import './style.scss'


const EventList = () => {

	const { selectedDay, events } = useAppSelector(state => state.events)

	return (
		<div className="event-list">
			{
				events.map(e => {
					if (e.date.toLocaleString() === selectedDay.toLocaleString()) {
						return <EventItem key={e.id} {...e} />
					}
					return null
				})
			}
		</div>
	)
}

export default EventList