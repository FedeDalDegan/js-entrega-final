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
    const foundMatches = filteredCharacters.length > 0; // En caso de que encuentre

    return foundMatches;
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
  