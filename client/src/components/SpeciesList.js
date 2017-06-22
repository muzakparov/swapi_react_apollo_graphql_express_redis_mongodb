import React from "react";
import {
    graphql,
    gql,
} from "react-apollo";


const SpeciesList = ({ data: { error, loading, species } }) => {
    console.log("SpeciesList", species);
    if(error)
        return (<p>{error.message}</p>);

    if(loading)
        return (<p>Loading...</p>);

    return (
        <div className="Selects">
            <p>SpeciesList</p>
            <select>
                <option>Select Specie</option>
                {species.map((specieObj, index) => (<option key={index}>{specieObj.name}</option>))}
            </select>
        </div>
    );
};

const speciesListQuery = gql`
    query SpeciesListQuery{        
      species {
        name
        people{
          name
        }
      }
    }
`;

const SpeciesListWithQuery = graphql(speciesListQuery)(SpeciesList);


export default SpeciesListWithQuery;