import { useState, useEffect } from 'react';

function Tipusok() {
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

	const getInitialState = () => {
		const value = "";
		return value;
	};
	const [value, setValue] = useState(getInitialState);
	const handleChange = (e) => {
		setValue(e.target.value);
	};

	return (
		<div>
			<select value={value} onChange={handleChange}>
			{Array.from(kockak).map(kocka => (
				<option value={kocka.marka}  key={kocka.marka }>{kocka.marka}</option>
			))}
			</select>
			<Types marka={value}/>
		</div>
	)
}

function Types({marka}) {
	const [kocka, setKocka] = useState([]);
	const [isFetchPending, setFetchPending] = useState(false);
	useEffect(() => {
		setFetchPending(true);
		fetch(`http://localhost:9000/kockak/${marka}`)
			.then((res) => res.json())
			.then((kocka) => setKocka(kocka))
			.catch(console.log)
			.finally(() => {
				setFetchPending(false);
			});
	}, [kocka]);
	return (
		<div>
			<img src={kocka.marka+ ".png"} alt={kocka.marka}></img>
			<h3>{kocka.marka}</h3>
		</div>
	)
}

export default Tipusok;