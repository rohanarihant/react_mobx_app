import React from 'react';
import {Route, IndexRoute} from 'react-router'

import App from './components/App'
import Numbers from './components/Numbers'
import Number from './components/Number'

export default(store) => {
	return (
		<Route path="/" component={App} guestStore={store}>
			<Route path="numbers" component={Numbers} guestStore={store}/>
			<Route path="result" component={Number} guestStore={store}/>
		</Route>
	)
}
