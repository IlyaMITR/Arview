import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TextField, ComboBox, IComboBoxOption, IComboBox, DefaultButton } from '@fluentui/react';

import { EventType } from '@renderer/shared/config/event';
import { useAppDispatch, useAppSelector } from '@renderer/shared/model/hooks/redux';
import { addCalendarEvent, writeEventsToLS } from '@renderer/shared/model/slices/events.slice';

import './style.scss'


const options: IComboBoxOption[] = [
	{key: EventType.Activity, text: 'Мероприятие'},
	{key: EventType.Holiday, text: 'Праздник'},
	{key: EventType.Note, text: 'Заметка'},
]


const AddEventForm = () => {

	const selectedDay = useAppSelector(state => state.events.selectedDay)
	const dispatch = useAppDispatch()

	const navigate = useNavigate()

	const [eventType, setEventType] = useState(EventType.Activity)

	const handleComboboxChange = (event: React.FormEvent<IComboBox>, option: IComboBoxOption | undefined) => {
		event.preventDefault()
		option && setEventType(option.key as EventType)
	}

	const navigateToMain = () => {
		navigate('/')
	}

	const handleSubmit = (e) => {

		e.preventDefault()

		const formData = new Array(...e.target.querySelectorAll('input')).reduce((acc, curr) => {
			if (curr.name) {
				acc[curr.name] = curr.value
			}
			return acc
		}, {})

		const newEvent = {
			...formData,
			date: selectedDay,
			type: eventType,
			id: Date.now()
		}

		dispatch(addCalendarEvent(newEvent))
		dispatch(writeEventsToLS())

		navigate('/')
		
	}

	return (
		<form className='add-event-form' onSubmit={handleSubmit}>

			<TextField required name='title' label='Название события' />

			<ComboBox label='Тип события' selectedKey={eventType} options={options} onChange={handleComboboxChange} />
			
			{
				eventType === EventType.Activity && <>
					<TextField required name='adress' label='Куда идти ?' />
					<TextField required name='time' label='Во сколько ?' />
				</>
			}
			{
				eventType === EventType.Holiday && <>
					<TextField required name='budget' label='Бюджет' />
				</>
			}
			{
				eventType === EventType.Note && <>
					<TextField required name='note' label='Текст заметки' />
				</>
			}

			<div className="buttons">
				<DefaultButton text='Отмена' onClick={navigateToMain}/>
				<input className='ms-Button ms-Button--primary root-177' type="submit" value="Сохранить" />
			</div>
			
		</form>
	)
}

export default AddEventForm