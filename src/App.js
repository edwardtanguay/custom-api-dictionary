/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import './App.scss';

function App() {
	const [wordObj, setWordObj] = useState({ word: "hello" });
	const [searchWord, setSearchWord] = useState('');

	useEffect(async () => {
		const url = 'https://api.dictionaryapi.dev/api/v2/entries/en/cup';
		const response = await fetch(url);
		const data = await response.json();
		const _wordObj = {
			word: data[0].word,
			meaning: data[0].meanings[0].definitions[0].definition
		};
		setWordObj(_wordObj);
	}, []);

	const handleSearchButtonClick = (e) => {
		e.preventDefault();
		console.log(`we want to look up the word: ${searchWord}`);
	}

	return (
		<div className="App">
			<h1>API Dictionary</h1>
			<form>
				<input type="text" value={searchWord} onChange={(e) => setSearchWord(e.target.value)} />
				<button onClick={(e) => handleSearchButtonClick(e)}>Search</button>
			</form>
			<div className="word">{wordObj.word}</div>
			<div className="meaning">{wordObj.meaning}</div>
		</div>
	);
}

export default App;