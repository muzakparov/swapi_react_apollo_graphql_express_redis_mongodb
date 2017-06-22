import React from "react";
import {
    graphql,
    gql,
} from "react-apollo";


const CharactersList = ({ data: { error, loading, people }, onChange }) => {
    console.log("CharactersList", people);
    if(error)
        return (<p>{error.message}</p>);

    if(loading)
        return (<p>Loading...</p>);

    const handleOnChange = (event) => {
        event.persist();
        const value = event.target.value;
        console.log("ChannelsList value", event.target.value);
        onChange([value]);
    };

    return (
        <div className="Selects">
            <p>CharactersList</p>
            <select onChange={handleOnChange}>
                <option>Select Character</option>
                {people.map((peopleObj, index) => (<option key={index}>{peopleObj.name}</option>))}
            </select>
        </div>
    );
};

const charactersListQuery = gql`
    query CharactersListQuery{        
      people {
        name
      }
    }
`;

const CharactersListWithQuery = graphql(charactersListQuery)(CharactersList);


export default CharactersListWithQuery;