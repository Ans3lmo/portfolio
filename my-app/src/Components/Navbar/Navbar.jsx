import React from 'react';
import  './navbar.css';

import { App } from '../../App';
import { About } from '../About/About';

export class Navbar extends React.Component {
	render() {
		return (
			<header>
				<nav id="navbar">
					<a className='logo' href="https://medium.com/@Ans3lmo">Blog</a>
					<ul className="navList">
						<li>
							<a href={<App />}>Home</a>
						</li>
						<li>
							<a href={<About />}>About</a>
						</li>
						<li>
							<a href="/">Projects</a>
						</li>
						<li>
							<a href="/">Contact</a>
						</li>
					</ul>
				</nav>
			</header>
		)
	}
}