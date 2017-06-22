import React, { Component } from 'react';
import {
    ApolloClient,
    ApolloProvider,
    createNetworkInterface,
} from "react-apollo";

import logo from './logo.svg';
import './App.css';

import FilmsList from "./components/FilmsList";
import SpeciesList from "./components/SpeciesList";
import CharactersList from "./components/CharactersList";
import CharactersDisplay from "./components/CharactersDisplay";


const networkInterface = createNetworkInterface({
    uri: "http://localhost:4000/graphql"
});

const client = new ApolloClient({
    networkInterface,
});

class App extends Component {
  constructor(){
      super();
      this.state = {
          characters:[]
      };
      this.onChange = this.onChange.bind(this);

  }

  onChange(characters){
      console.log("App onChange", characters);
      console.log("The current state",this.state);

      this.setState({
         characters:characters
      });
  }

  render() {
    const style ={
        background: "yellow",
    };

    return (
        <ApolloProvider client={client} >
          <div className="App">
            <div className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <h2>Welcome to React</h2>
            </div>
            <div style={style}>
                <FilmsList onChange={this.onChange} />
                <SpeciesList />
                <CharactersList onChange={this.onChange} />
            </div>
              <div>
                  <p><strong>Characters</strong></p>
                  <div>
                      <CharactersDisplay characters={this.state.characters}/>
                  </div>
              </div>
          </div>
        </ApolloProvider>
    );
  }
}

export default App;
