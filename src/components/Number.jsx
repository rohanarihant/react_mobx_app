import React from 'react';
import {observer} from 'mobx-react';


@observer
export default class Guest extends React.Component {
	render() {
		const {route} = this.props
		let number = null;
		if(route){
			number = route.guestStore.guests;
		}
		return (
      <div>
		 <div><p>Number is:  <span>{number}</span></p></div>
		 <div><p>Number * 2:  <span>{number * 2}</span></p></div>
		 <div><p>Number * Number:  <span>{number * number}</span></p></div>

      </div>
		)
	}
}
