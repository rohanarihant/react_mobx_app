import React from 'react'
import CSSModules from 'react-css-modules'

import NavItem from './NavigationItem'
import styles from './NavigationBar.css'

class NavigationBar extends React.Component {
	render() {
		return (
			<nav className={styles.headernav}>
			
				<div className={styles.container}>
				
					<div className={styles.menu_list}>
						<ul className={styles.nav_list}>
							<NavItem to='/'  >Home</NavItem>
							<NavItem to='/numbers' index={true}>Number</NavItem>
						</ul>
					</div>
				</div>
			</nav>
		)
	}
}

export default CSSModules(NavigationBar, styles, {allowMultiple: true})
