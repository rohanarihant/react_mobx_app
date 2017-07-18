import React from 'react';
import {observer} from 'mobx-react';
import CSSModules from 'react-css-modules'
import {container, jumbotron, buttons} from 'bootstrap-css'
import Number from './Number'
import NumberEntry from './NumberEntry'
import styles from './App.css'
Object.assign(styles, jumbotron, container, buttons)

@observer
class Numbers extends React.Component {

	render() {
		console.log(this.props.route.guestStore,'guestStore')
		const {guestStore} = this.props.route

		return (
			<div>
				<div>Enter the Number :</div>
				<NumberEntry guestStore={guestStore}/>
		</div>
		)
	}
}
export default CSSModules(Numbers, styles)
