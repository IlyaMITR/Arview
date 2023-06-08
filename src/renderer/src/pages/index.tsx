import { Route, Routes } from 'react-router-dom'

import { MainPage } from './MainPage'
import { AddEventPage } from './AddEventPage'


export const Routing = () => {
	return (
		<Routes>
			<Route path='/' index element={<MainPage />} />
			<Route path='/add' element={<AddEventPage />} />
		</Routes>
	)
}
