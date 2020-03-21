import React, { useEffect, useState } from "react";
import axios from 'axios';


function CharacterList() {
  const [characterData, setCharacterData] = useState([]);

  useEffect (()=> {
    
    axios.get("https://cors-anywhere.herokuapp.com/https://rickandmortyapi.com/api/character/")
    
    .then ( 
      
      res => setCharacterData(res.data.results)
    )
    .catch(err => console.log(err))
  }, [])

  
  console.log(characterData);
  return (
    
    <section className="character-list">
      
      
      {characterData.map(
        (item) => { 
        return (
          <div className={item.id}>
          <p>Name: {item.name}</p>
          <img src={item.image} alt={item.name}/>
          </div>
        
        )
         
         
        })}
        
    </section>
  );
}
export default CharacterList;