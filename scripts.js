console.log(document.title);

//1 Cambia el título "Generation 1 Pokémon" por "Generasión 1 Pokimon".

// let pokemon = document.querySelector(".infocard");
// console.log(pokemon);

let newTittle = document.querySelector("#gen-1");
newTittle.textContent = "Generasión 1 pokimon";

//2. Cambia el color de fondo de la primera generación de Pokimon.
let cambiaColor = document.querySelector(".infocard-list-pkmn-lg");
cambiaColor.style.background = "#b7b7a4";

//3. Imprime por consola la URL de la página.

let url = document.location.href;
console.log(url);

//4. Imprime por consola el dominio de la página.

let dominio = document.location.hostname;
console.log(dominio);

//5. Imprime todos los nodos de imagen.
let allImages = document.querySelectorAll("img");
console.log(allImages);

//6. Sustituye el atributo "src" de todas las imágenes por este "https://media.giphy.com/media/2v170e71aanfi/giphy.gif"

for (let i = 0; i < allImages.length; i++) {
  allImages[i].setAttribute(
    "src",
    "https://media.giphy.com/media/2v170e71aanfi/giphy.gif"
  );
}

//7. Cambia el fondo de todos los infocard-lg-data text-muted para todos los Pokimon voladores itype flying
let cambiaFondo = document.querySelectorAll(
  ".infocard-lg-data.text-muted .itype.flying"
);

for (let i = 0; i < cambiaFondo.length; i++) {
  cambiaFondo[i].style.background = "red";
}
