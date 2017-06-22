import React from "react";


const CharactersDisplay = ({ characters }) => {
    console.log("CharactersDisplay", characters.length);
    return (
        <div>
            {(characters.length)? characters.map((character, i) => <p key={i}>{character}</p>):"Non of The dropdowns selected yet"}
        </div>
    );
};


export default CharactersDisplay;
