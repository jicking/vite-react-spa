import { Link } from 'react-router-dom'
import classes from './SiteHeader.module.css'

export function SiteHeader() {
	return (
		<header className={`content-wrapper ${classes.siteHeader}`}>
			<div className={classes.navTitle}> {import.meta.env.VITE_APP_BRAND} </div>
			<nav className={`${classes.mainNav}`}>
				<ul className={classes.navlinks}>
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/about">About</Link>
					</li>
					<li>
						<Link to="/account/login">Login</Link>
					</li>
				</ul>
			</nav>
		</header>
	)
}

export default SiteHeader
