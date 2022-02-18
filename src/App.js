/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { ImSpinner9 } from 'react-icons/im';
import './App.scss';

const _searchWord = 'reptile';

function App() {
	const [wordObj, setWordObj] = useState({});
	const [searchWord, setSearchWord] = useState(_searchWord);

	const lookupWord = (word) => {
		setTimeout(async () => {
			const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
			const response = await fetch(url);
			const data = await response.json();
			const _wordObj = {
				word: data[0].word,
				meaning: data[0].meanings[0].definitions[0].definition
			};
			setWordObj(_wordObj);
		}, 2000);
	}

	useEffect(() => {
		lookupWord(searchWord);
	}, []);

	const handleSearchButtonClick = (e) => {
		e.preventDefault();
		setWordObj({});
		lookupWord(searchWord);
	}

	return (
		<div className="App">
			<h1>API Dictionary</h1>
			<form>
				<input type="text" value={searchWord} onChange={(e) => setSearchWord(e.target.value)} />
				<button onClick={(e) => handleSearchButtonClick(e)}>Search</button>
			</form>

			{!wordObj.word && (
				<div><ImSpinner9 className="spinner"/></div>
			)}
			{wordObj.word && (
				<>
					<div className="word">{wordObj.word}</div>
					<div className="meaning">{wordObj.meaning}</div>
				</>
			)
			}
		</div >
	);
}

export default App;