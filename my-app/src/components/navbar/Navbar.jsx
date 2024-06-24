import React from "react";
import "./navbar.module.css"

export class Navbar extends React.Component {
	render(){
		return (
			<header>
				<nav id="navbar">
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