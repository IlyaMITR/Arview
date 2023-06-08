import { Provider as ReduxProvider } from 'react-redux'

import { Routing } from '@renderer/pages'

import { store } from './store'
import { withProviders } from './providers'


function App(): JSX.Element {
	return (
		<div className='App'>
			<ReduxProvider store={store}>
				<Routing/>
			</ReduxProvider>
		</div>
	)
}

export default withProviders(App) 
