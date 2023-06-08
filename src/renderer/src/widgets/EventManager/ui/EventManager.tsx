import { EventCalendar } from "@renderer/features/EventCalendar"
import { EventList } from "@renderer/features/EventList"

import './style.scss'


const EventManager = () => {
	return (
		<div className='event-manager'>
			<EventCalendar />
			<EventList/>
		</div>
	)
}

export default EventManager