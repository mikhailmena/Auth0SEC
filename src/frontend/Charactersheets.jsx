import { useEffect, useState, React } from 'react';


export const CharacterSheet = () => {

   const filler = ["character 1", "character 2", "character 3", "character 4", "character 5"]


   return (
   <div className="loadcharacter">
{filler.map((character) => {
    return (
    <div onClick={() => {loadCharacter()}}>{character}</div>
    )
})}
    </div>
   )
}

function loadCharacter() {
    
}