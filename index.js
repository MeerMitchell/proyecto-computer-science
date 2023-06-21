

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
    fetch('https://hp-api.onrender.com/api/characters')
        .then(response => response.json())
        .then(json => {
            const resultados = json.filter(item => item.name.toLowerCase().includes(valor));
            resultados.forEach(item => {
                const nombreCharacter = document.createElement("li");
                nombreCharacter.setAttribute("class", "nombreCharacter");
                nombreCharacter.textContent = item.name;
                resultadosElemento.appendChild(nombreCharacter);

                const casaCharacter = document.createElement("li");
                casaCharacter.setAttribute("class", "casaCharacter");
                casaCharacter.textContent = item.house;
                resultadosElemento.appendChild(casaCharacter);

                const varitaCharacter = document.createElement("li");
                varitaCharacter.setAttribute("class", "varitaCharacter");
                varitaCharacter.textContent = `${item.wand.wood}, ${item.wand.core}`;
                resultadosElemento.appendChild(varitaCharacter);

                const photoCharacter = document.createElement("img");
                if (item.image == ""){
                    photoCharacter.setAttribute("src", "./assets/profl.png");
                } else {
                    photoCharacter.setAttribute("src", `${item.image}`);
                }
        
                resultadosElemento.appendChild(photoCharacter);
            })
    });

    
}


