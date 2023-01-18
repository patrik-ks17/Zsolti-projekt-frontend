function Header() {
	return(
	<div>
		<header>
		</header>
		<h1>Rubik kockák</h1>
		<nav>
			<ul>
				<li><a href="#markak" dataset="markak" onClick={(event) => Navigate(event)}>Márkák</a></li>
				<li><a href="#tipusok" dataset="tipusok" onClick={(event) => Navigate(event)}>Típusok</a></li>
			</ul>
		</nav>
	</div>
	)
}

function Navigate(event) {
	const panel = event.target.getAttribute('dataset')
	document.getElementById(panel).classList.toggle('show')
}



export default Header;