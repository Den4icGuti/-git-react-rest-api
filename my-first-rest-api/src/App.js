import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import React, { Component } from "react";
import Form from './components/Form/PokemonForm.jsx';
import PokemonInfo from './components/PokemonInfo/PokemonInfo.jsx';


class App extends Component { 

  state = {
    pokemonName: ''
  }

  onHandleSubmit = pokemonName => { 
    this.setState({pokemonName})
  }
  
  
  render() { 
    const {pokemonName} = this.state
    return (
      <>
        <Form onSubmit={this.onHandleSubmit} />
        <PokemonInfo pokemonName={pokemonName}/> 
        <ToastContainer onClose={3000} position='top-center' theme='dark' />
      </>
     
    );
  }
}

export default App;
