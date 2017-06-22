import React from "react";
import {
    graphql,
    gql,
} from "react-apollo";


const FilmsList = ({ data: { error, loading, films }, onChange }) => {
    console.log("FilmsList",films);
    if(error)
        return (<p>{error.message}</p>);

    if(loading)
        return (<p>Loading...</p>);

    const handleOnChange = (event) => {
        event.persist();
        const value = event.target.value;
        const filmSelected = films.find( (film) => (film.title===event.target.value));
        if(filmSelected){
            const filmSelectedCharacters = filmSelected.characters.map((characterObj) => characterObj.name);
            console.log("FilmsList value", filmSelectedCharacters);
            onChange(filmSelectedCharacters)
        }
        else{
            onChange(["Choose From DropDowns"]);
        }
    };

    return (
        <div className="Selects">
            <p>FilmsList</p>
            <select onChange={handleOnChange}>
                <option>Select Movie</option>
                {films.map((filmObj, index) => (<option key={index}>{filmObj.title}</option>))}
            </select>
        </div>
    );
};

const filmsListQuery = gql`
    query FilmsListQuery{        
      films {
        title
        characters {
          name
        }
      }
    }
`;

const FilmsListWithQuery = graphql(filmsListQuery)(FilmsList);


export default FilmsListWithQuery;