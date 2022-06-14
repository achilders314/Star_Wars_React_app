// import logo from './logo.svg';
import './App.css';
// import Item from './MyItem';
import React from 'react';



class StarWars extends React.Component {

  constructor() {
    super()
    this.state = {
      loadedCharacter: false,
      name: null,
      species: null,
      homeworld: null,
      image: null,
    }
  }

  getNewCharacter() {
    const randomNumber = Math.ceil(Math.random() * 88);
    console.log(randomNumber);
    const url = `https://akabab.github.io/starwars-api/api/id/${randomNumber}.json`;
    fetch(url)
    .then(response => response.json())  
    .then(data => 
        this.setState({
          loadedCharacter: true,
          name: data.name,
          species: data.species,
          homeworld: data.homeworld,
          image: data.image,
        })
        );
  }

  render() {

    return(
      <div className="App">

        {
          this.state.loadedCharacter &&
          <div>
            <img src={this.state.image} alt="" />
            <h1>Name: {this.state.name}</h1>
            <p>Species: {this.state.species}</p>
            <p>Home World: {this.state.homeworld}</p>
          </div>
        }

        <button 
          type="button" 
          className="btn" 
          onClick={() => this.getNewCharacter()}
        >
          Randomize Character
        </button>
      </div>
    )
  }
}


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <StarWars />
      </header>
    </div>
  );
}

export default App;
