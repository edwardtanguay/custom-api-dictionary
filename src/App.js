/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import './App.scss';

function App() {
	const [wordObj, setWordObj] = useState({});

	useEffect(async () => {
		const url = 'https://api.dictionaryapi.dev/api/v2/entries/en/test';
		const response = await fetch(url);
		const data = await response.json();
		console.log(data);
	}, []);

	return (
		<div className="App">
			<h1>API Dictionary</h1>
		</div>
	);
}

export default App;