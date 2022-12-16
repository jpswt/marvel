// require('dotenv').config();

let marvel;

window.onload = () => {
	fetchMarvel();
};

const fetchMarvel = async () => {
	await fetch(`https://gateway.marvel.com/v1/public/characters?ts=1&apikey=${enterapikey}&hash=${enterhashkey}
    `)
		.then((res) => res.json())
		.then((data) => {
			marvel = data.data.results;
			console.log(marvel);
			console.log('Testing');
			char();
		});
};

const char = () => {
	let name = document.createElement('div');
	let nameTxt = document.createTextNode(`${marvel[0].name}`);
	name.appendChild(nameTxt);

	let link = document.createElement('a');
	let txt = document.createTextNode(`Click here`);
	link.setAttribute('href', `${marvel[0].urls[0].url}`);
	link.setAttribute('target', '_blank');
	link.appendChild(txt);

	const imgDiv = document.createElement('div');
	const img = document.createElement('img');
	img.src = `${marvel[0].thumbnail.path}.${marvel[0].thumbnail.extension}`;
	img.className = 'marvel-image';
	imgDiv.appendChild(img);

	document.body.append(imgDiv);
	document.body.append(name);
	document.body.append(link);
};

// let userInput = '';
// let search = document.getElementById('character-search');

// search.addEventListener('keyup', (e) => {
// 	userInput = e.target.value;
// 	console.log(userInput);
// });
