import React from 'react';
import ReactDOM from 'react-dom'
import {observer} from 'mobx-react';
import {browserHistory} from 'react-router';

const ENTER_KEY = 13;

@observer
export default class GuestEntry extends React.Component {


	handleKeyDown = (event) => {
		console.log(event.keyCode,'keyCode');
		//     if (evt.which < 48 || evt.which > 57)
		if (event.keyCode !== ENTER_KEY){
			if (event.keyCode > 47 && event.keyCode < 58) {
        			e.preventDefault();
    			}
		}

		event.preventDefault()

		const input = ReactDOM.findDOMNode(this.refs.newGuest)
		const val = input.value.trim()

		if (val) {
			this.props.guestStore.addGuest(val)
			input.value = ''
			browserHistory.push('/result');
		}
	}

	render() {
		return (
      <input
				ref="newGuest"
				placeholder="enter number then enter"
				onKeyDown={this.handleKeyDown}
				autoFocus={true}
				minLength="1"
				maxLength="3"
				/>
		)
	}
}
