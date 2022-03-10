import { toast } from "react-toastify";
import React, { Component } from "react";

class PokeForm extends Component { 

  notify = () => toast.warning('Enter the name');
  
  state = {
    pokemonName: '',
  }

  onHandleNameSearch = e => { 
    this.setState({ pokemonName: e.currentTarget.value.toLowerCase() })
  
  }
  

  onSubmitForm = e => {
    e.preventDefault();

    if (this.state.pokemonName.trim() === '') {
      this.notify()
      return;
    }
    this.props.onSubmit(this.state.pokemonName);
    this.setState({ pokemonName: '' })
  }

  render() { 
    return (
      <form onSubmit={this.onSubmitForm}>
        <input type="text" name="pokemonName"
          value={this.state.pokemonName}
          onChange={this.onHandleNameSearch}
        />
         <button type="submit">Найти</button>
      </form>
     
    )
  }
}

export default PokeForm;