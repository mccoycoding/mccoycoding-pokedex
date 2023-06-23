import { useState, useEffect} from 'react';

export default function SinglePokemonView({ pokemonObj, selectedPokemonName, setSelectedPokemonName }) {
    if (!pokemonObj || Object.keys(pokemonObj).length === 0) {
        // Handle the case when the pokemonObj is empty or not available yet
        return <div>Loading...</div>;
      }

    //Set short names for useful table variables
    const pokeName = selectedPokemonName.charAt(0).toUpperCase() + selectedPokemonName.slice(1)
    const type1 = pokemonObj.types[0].type.name.charAt(0).toUpperCase() + pokemonObj.types[0].type.name.slice(1);
    let type2 = null
    //If the length of the types object is greater than 1, we define our second type
    if (pokemonObj.types.length > 1){
        type2 = pokemonObj.types[1].type.name.charAt(0).toUpperCase() + pokemonObj.types[1].type.name.slice(1);
    }
   

    return(
        <>
        {/*Bring us back to the Pokedex for*/}
            <button onClick={() => {
                    setSelectedPokemonName(null)
                }}>Back</button>
            <div>
                <h1>{pokeName}</h1>
                <img src={pokemonObj.sprites.front_default} />
                <h2>Pokedex #{pokemonObj.id}</h2>
            </div>
            <div style={{display: 'inline-block'}}>
                <table>
                    <thead>
                        <tr>
                            <th colSpan={2}>{pokeName}'s Stats</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th colSpan={2}>Type</th>
                        </tr>
                        <tr>
                            {/*If type2 is true, then they're a dual type pokemon. Else they're single typed*/}
                           {type2 ? <td colSpan={2}>{type1}/{type2}</td> : <td colSpan={2}>{type1}</td>}
                        </tr>
                        <tr>
                            <th>Height</th>
                            <th>Weight</th>
                        </tr>
                        <tr>
                            <td>{pokemonObj.height}</td>
                            <td>{pokemonObj.weight}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}