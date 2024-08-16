

// const pokeData = fetch("https://pokeapi.co/api/v2/pokemon/ditto")
// .then(response => {

//   if(!response.ok){
//     throw new error("could not fetch resource");

//   }
//   return response.json();

// })
// .then((data)=>console.log(data.id))
// .catch((err)=>console.error(err))


// fetchData();

async function fetchData(){
    try{

    const pokemonName = document.getElementById("pokemonName").value.toLowerCase();
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
        console.log(response.ok)
    // if(!response.ok){
    //     throw new error("could not fetch response");
    // }
    if(response.ok){      
      const data = await response.json();
      console.log(data)
      const pokemonSprite = data.sprites.front_default;
      const imgElement = document.getElementById("pokemonsprite");

      imgElement.src =  pokemonSprite;
      imgElement.style.display = "block";
    }else{
        throw new error("could not fetch response");
    }


    }
    catch(error){
        console.error(error);

    }
}

