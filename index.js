

fetch('https://hp-api.onrender.com/api/characters')
        .then(response => response.json())
        .then(json => {
            printHogwarts(json.results);
           
        });


function printHogwarts(character) {
    const container = document.getElementById('container')
    character.forEach(character => {
        container.innerHTML = `
        ${container.innerHTML}
        <div class="card">
        <img src="https://ik.imagekit.io/hpapi/${getCharacterId(character.url)}.jpg"/>
        <span>Nº.${getCharacterId(getCharacterId.url)}</span>
        <h2>${character.name.charAt(0).toUpperCase() + character.name.slice(1)}</h2>
        </card>
        
`;
});
}   

function getCharacterId(url) {
    return url.replace('https://hp-api.onrender.com/api/characters/', '').replace('/','')
}

