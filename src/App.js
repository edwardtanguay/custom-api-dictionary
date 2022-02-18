/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import './App.scss';

function App() {
	const [wordObj, setWordObj] = useState({ word: "hello" });

	useEffect(async () => {
		const url = 'https://api.dictionaryapi.dev/api/v2/entries/en/cup';
		const response = await fetch(url);
		const data = await response.json();
		const _wordObj = {
			word: data[0].word,
			meaning: data[0].meanings[0].definitions[0].definition
		};
		console.log(_wordObj);
		setWordObj(_wordObj);
	}, []);

	return (
		<div className="App">
			<h1>API Dictionary</h1>
			<div className="word">{wordObj.word}</div>
			<div className="meaning">{wordObj.meaning}</div>
		</div>
	);
}

export default App;