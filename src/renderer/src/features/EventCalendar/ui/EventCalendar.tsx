import { Calendar, PrimaryButton } from "@fluentui/react"
import { useNavigate } from "react-router-dom"

import { useAppDispatch, useAppSelector } from "@renderer/shared/model/hooks/redux";
import { setSelectedDay } from "@renderer/shared/model/slices/events.slice";

import './style.scss'


const EventCalendar = () => {

	const navigate = useNavigate()

	const selectedDay = useAppSelector(state => state.events.selectedDay)

	const dispatch = useAppDispatch()

	const handleSelectDate = (date: Date) => {
		dispatch(setSelectedDay(date))
	}

	const navigateToAddForm = () => {
		navigate('/add')
	}

	return (
		<div className="event-calendar">
			<Calendar
				isMonthPickerVisible={false}
				showMonthPickerAsOverlay
				highlightSelectedMonth
				showGoToToday={false}
				onSelectDate={handleSelectDate}
				value={selectedDay}
			/>
			<PrimaryButton className="add-btn" text="Добавить" onClick={navigateToAddForm}/>
		</div>
	)
}

export default EventCalendar