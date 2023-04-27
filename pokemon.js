{

    let form = document.getElementById('pokeForm');
    console.log(form);

    async function handleSubmit(event){
        console.log('Please wait for that pokemon data')
        event.preventDefault()

        let inputPokemon = event.target.pokemon.value.toLowerCase();

        let PokeData = await getPokeData(inputPokemon)
        inputPokemon.value = ''
        console.log(PokeData)
      
      

        buildPokeCard(PokeData)
      


    }


    async function getPokeData(pokemon){
        let res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
        let data = await res.json();
      console.log(data)
        return data; 
        
        
}


function buildPokeCard(PokeData) {

document.getElementById("img").innerHTML = img.src = PokeData['sprites']['other']['official-artwork']['front_default'];

let pokeName = PokeData['name'];
let rice =  pokeName[0].toUpperCase() + pokeName.substring(1);

console.log(rice)



//document.getElementById("title").innerHTML = `${pokeName}`;

document.getElementById("title").innerHTML = `${rice}`;

document.getElementById("body1").innerHTML = `${PokeData['abilities'][0]['ability']['name']}`;

document.getElementById("body2").innerHTML = `${PokeData['abilities'][1]['ability']['name']}`;
document.getElementById("body3").innerHTML = `${PokeData['types'][0]['type']['name']}`;
      
document.getElementById("body4").innerHTML =`${PokeData['weight']*2.2/10}lbs`;
      
        

    }

    form.addEventListener('submit', handleSubmit);

}