/*
Alumno: Federico N. Dal Degan
Comision: #43140
Entrega Final.

OBJETIVOS

- Objetos y Arrays. Métodos de Arrays.
- Funciones y condicionales.
- Generación del DOM de forma dinámica. Eventos.
- Sintaxis avanzada.
- Al menos una librería de uso relevante para el proyecto.
- Manejo de promesas con fetch. 
- Carga de datos desde un JSON local o desde una API externa.
*/

// Llamado al JSON local
let characters; // Declaro variable para más facilidad
let filteredCharacters; // Almacenaje

fetch("./js/data.json")
  .then(response => response.json())
  .then(data => {
    characters = data;
    filteredCharacters = data.slice(); // Filtro
    createCards(); // Llamar a la función que crea las cards después de obtener los datos del JSON
    console.log(data); // Mostrar JSON en consola
  })
  .catch(error => console.error(error));

// Primero carga de elementos HTML
document.addEventListener("DOMContentLoaded", function() {
    // Asociar función al botón de búsqueda
    document.getElementById("searchButton").addEventListener("click", function() {
      const search = document.getElementById("searchInput").value;
      searchCharacters(search);
    });
});

// Función para crear las cards y mostrar los personajes
function createCards() {
  const container = document.querySelector(".card-container");
  container.innerHTML = ""; // Limpiar el contenedor antes de agregar las cards

  filteredCharacters.forEach(character => {
    const card = document.createElement("div");
    card.classList.add("card");

    // Crear el contenido de la CARD
    const sprite = document.createElement("img");
    sprite.setAttribute("src", character.sprite);

    const name = document.createElement("h2");
    name.textContent = `Name: ${character.name}`;

    const ultimate = document.createElement("p");
    ultimate.textContent = `Ultimate: ${character.ultimate}`;

    const status = document.createElement("p");
    status.textContent = `Status: ${character.status}`;

    card.appendChild(sprite);
    card.appendChild(name);
    card.appendChild(ultimate);
    card.appendChild(status);

    // Agregar al contenedor
    container.appendChild(card);
  });
}

// Filtrar personajes por busqueda
function searchCharacters(search) {
  filteredCharacters = characters.filter(character => {
    return (
      character.name.toLowerCase().includes(search.toLowerCase()) ||
      character.ultimate.toLowerCase().includes(search.toLowerCase()) ||
      character.status.toLowerCase().includes(search.toLowerCase())
    );
  });
  createCards(); // Volver a crear las cards con los personajes filtrados
}

// Uso de LIBRERIAS (FrameWork)
// Toastify
function showToast(){
    Toastify({
        text: "Here's your result(s)",
        duration: 3000,
        gravity: "top",
        position: "right",
        style: {
          background: '#272829', // BG Color
          color: "white", // TEXT Color
        },
        className: "custom-toast", // Clase en CSS
    }).showToast();
}

document.querySelector(".toastifyButton").addEventListener("click", showToast);

// Control de flujo
function retults(search){
  searchCharacters(search);

  const resultsContainer = document.querySelector(".search-results");
  resultsContainer.innerHTML = "";
  // Caso de que no haya resultados
  if (filteredCharacters.length === 0) {
    const message = document.createElement("p");
    message.textContent = "No se encontraron personajes."
    resultsContainer.appendChild(message);
  } else {
    const aliveCharacters = filteredCharacters.filter(character => character.status === "Alive");
    const deadCharacters = filteredCharacters.filter(character => character.status === "Dead");
    // Caso de que haya resultados
    const message = document.createElement("p");
    if(aliveCharacters.length > deadCharacters.length){
      message.textContent = "There's more alive characters than dead characters. Fow now..."
    } else if (aliveCharacters.length < deadCharacters.length) {
      message.textContent = "There's more dead characters than alive characters. Understandable."
    } else {
      message.textContent = "Destiny awaits...";
    }
    resultsContainer.appendChild(message);
  }
  createCards()
}


  








