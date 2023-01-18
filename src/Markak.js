import { useState, useEffect } from 'react';

function Markak() {
	return (
		<div>
			<Card/>
		</div>
	)
}

function Card() {
	const [kockak, setKockak] = useState([]);
	const [isFetchPending, setFetchPending] = useState(false);
	useEffect(() => {
		setFetchPending(true);
		fetch("http://localhost:9000/kockak")
			.then((res) => res.json())
			.then((kockak) => setKockak(kockak))
			.catch(console.log)
			.finally(() => {
				setFetchPending(false);
			});
	}, [kockak]);
	return (
		<div  className='card-container'>
			{Array.from(kockak).map(kocka => (
				<div className='card'>
					<img src={kocka.marka+ ".png"} alt={kocka.marka}></img>
					<h3>{kocka.marka}</h3>
				</div>
			))}
		</div> 
	)
}

export default Markak;