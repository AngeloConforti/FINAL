
async function fetchDataAndCreateCards() {
    const apiUrl = 'https://jsonplaceholder.typicode.com/photos';

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        // Llamar a la función para crear tarjetas sin títulos
        createCards(data.slice(0, 12));
    } catch (error) {
        console.error('Error al obtener los datos:', error);
    }
}


function createCards(images) {
    const cardContainer = document.getElementById('card-container');
    const cardsPerRow = 4;

    for (let i = 0; i < images.length; i += cardsPerRow) {

        const row = document.createElement('div');
        row.className = 'card-row';


        for (let j = 0; j < cardsPerRow && i + j < images.length; j++) {
            const card = document.createElement('div');
            card.className = 'card';

            const img = document.createElement('img');
            img.src = images[i + j].url;
            img.alt = images[i + j].title;

            const description = document.createElement('p');
            description.textContent = images[i + j].title;


            card.appendChild(img);
            card.appendChild(description);

            const selectButton = document.createElement('button');
            selectButton.className = 'select-button';
            selectButton.textContent = 'Seleccionar';


            selectButton.addEventListener('click', () => {
                alert('Seleccionado correctamente');
            });

            card.appendChild(selectButton);

            row.appendChild(card);
        }


        cardContainer.appendChild(row);
    }
}


fetchDataAndCreateCards();

