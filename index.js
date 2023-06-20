const getDataFromApi = async() => {
    const response = await fetch('https://hp-api.onrender.com/api/characters');
    const hogwarts = await response.json();
    console.log('hogwarts: ', hogwarts);

/*

   for (iterador of hogwarts) {
        console.log('hogwarts: ', iterador.name, iterador.wand, iterador.house, iterador.image);
   
        const imgContainer = document.querySelector('#container-images');
        console.log(imgContainer)
        const imgElement = document.createElement('img');
        imgElement.setAttribute('src', hogwarts.image);
        imgContainer.appendChild(imgElement);
    } 


};

getDataFromApi();  