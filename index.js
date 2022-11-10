console.log("Enviando request");

async function getPokemon(){
    let response = await fetch('https://pokeapi.co/api/v2/pokemon/300')
    let data = await response.json();
    console.log(data);
}

getPokemon();
console.log("Alfa");

