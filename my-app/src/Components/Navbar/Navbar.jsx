import React from 'react';
import  './navbar.css';

import { Home } from '../Home/Home';
import { Curriculo } from '../Curriculo/Curriculo';

export class Navbar extends React.Component {
	render() {
		return (
			<header>
				<nav id="navbar">
					<a className='logo' href="https://medium.com/@Ans3lmo">Blog</a>
					<ul className="navList">
						<li>
							<a href={<Home />}>Home</a>
						</li>
						<li>
							<a href={<Curriculo />}>Curriculo</a>
						</li>
						<li>
							<a href="/">Contato</a>
						</li>
						<li>
							<a href="/">Projetos</a>
						</li>
					</ul>
				</nav>
			</header>
		)
	}
}