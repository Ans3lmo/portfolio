import React from 'react';
import  './navbar.css'

export class Navbar extends React.Component {
	render(){
		return (
			<header>
				<nav id="navbar">
					<a className='logo' href="/">Logo</a>
					<ul className="navList">
						<li>
							<a href="/">Home</a>
						</li>
						<li>
							<a href="/">About Me</a>
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