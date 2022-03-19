import './App.css';
import React from "react"
import Axios from "axios"


function App() {
  const[pokemon,setpokemon]=React.useState("");
  const[pokemonChosen,setpokemonchose]=React.useState(false)
  const[stats,setstats]=React.useState({
      name:"",
      species:"",
      img:"",
      hp:"",
      attack:"",
      defense:"",
      type:"",
    });





  const searchPokemon=()=>{
    // make the request
    Axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`).then(
      (response)=>{
          setstats({name:pokemon,
            species:response.data.species.name,
            img:response.data.sprites.front_default,
            hp:response.data.stats[0].base_stat,
            attack:response.data.stats[1].base_stat,
            defense:response.data.stats[2].base_stat,
            type:response.data.types[0].type.name,
          })
          setpokemonchose(true)
      }


    );

  };


  return (
    <div className="App">
      <div className="TitleSession">
        <h1>Pokemon Stats</h1>
        <input type="text" onChange={(event)=>{
          setpokemon(event.target.value)
        }}/>
        <button onClick={searchPokemon}>Search your desire pokemon</button>
        </div>
        <div className='display-section'>
          {!pokemonChosen ?(
          <h1>Please enter a pokemon</h1>):
          (
          <>
          <h1>{stats.name}</h1>
          <img src={stats.img} alt="true"/>
          <p>
            {`HP: ${stats.hp}`} <br></br>
            {`Attack: ${stats.attack}`} <br></br>
            {`Defense: ${stats.defense}`} <br></br>
            {`Type: ${stats.type}`} <br></br>
          </p>
          
          </>
          )}
        </div>
    </div>
  );
}

export default App;
