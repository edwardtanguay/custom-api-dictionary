/* eslint-disable react-hooks/rules-of-hooks */

const useState = (defaultValue) => {
	const test = defaultValue;
	const doIt = () => {
		console.log('did it');
	}
	return [test, doIt]; 
}

const [word, setWord] = useState('nnn');

console.log(word);
setWord();
