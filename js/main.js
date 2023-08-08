/*
Alumno: Federico N. Dal Degan
Comision: #43140
Entrega Final.

OBJETIVOS

- Objetos y Arrays. Métodos de Arrays. ✔️
- Funciones y condicionales. ✔️
- Generación del DOM de forma dinámica. Eventos. ✔️
- Sintaxis avanzada. ✔️
- Al menos una librería de uso relevante para el proyecto. ✔️
- Manejo de promesas con fetch. ✔️
- Carga de datos desde un JSON local o desde una API externa. ✔️
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
    console.log(data); // Mostrar DATA en consola
  })
  .catch(error => console.error(error));

// Primero carga de elementos HTML
document.addEventListener("DOMContentLoaded", function() {
  // Asociar función al botón de búsqueda
  document.getElementById("searchButton").addEventListener("click", function() {
  const search = document.getElementById("searchInput").value;
      
  // Control de flujos
  if (!searchCharacters(search)) {
    const container = document.querySelector(".card-container");
    container.innerHTML = "";

    const searchMessage = document.querySelector(".search-result");
    const h2Element = document.createElement("h2");
    h2Element.textContent = "No results founds";
    searchMessage.parentNode.replaceChild(h2Element, searchMessage); 
    h2Element.classList.add("noFound")
    } else {
      const searchMessage = document.querySelector(".search-result");
      searchMessage.textContent = "";

      createCards()
    }
  });
});

