function traerDatos(){
    fetch('https://hp-api.onrender.com/api/characters')
    .then(response => response.json())
    .then(json => {
        return json 
   // printHogwarts(json);

    });
}

const json = traerDatos();
console.log(json);



function printHogwarts(character) {
    const container = document.getElementById('container')
    character.forEach(character => {
        console.log(character);

        const nameCharacter = document.createElement("p");
        nameCharacter.textContent = `${character.name}`;
        container.appendChild(nameCharacter);

        const photoCharacter = document.createElement("img");
        if (character.image == ""){
            photoCharacter.setAttribute("src", "./assets/profl.png");
        } else {
            photoCharacter.setAttribute("src", `${character.image}`);
        }

        container.appendChild(photoCharacter);

    });
}

function buscarElemento(){
    const input = document.getElementById('characterSearch');
    const valor = input.value.toLowerCase();
    const resultadosElemento = document.getElementById('resultados');

    resultadosElemento.innerHTML = "";

    const resultados = json.filter(item => item.name.toLowerCase().includes(valor));

    resultados.forEach(item => {
        const li = document.createElement("li");
        li.textContent = item.name;
        resultadosElemento.appendChild(li);
    })
}


