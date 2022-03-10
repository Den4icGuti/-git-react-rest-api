import { Component } from 'react';
import PokemonFallBackView from '../PokemonErrorView/PokemonErrorView';
import PokemonData from '../ViewPokemonData/PokemonData';

class PokemonInfo extends Component {

  state = {
    pokemon: null,
    error: null,
    status:'idle'
  }

  //===Метод обновления, componentDidUpdate, проверяем предыдущие состояние компонетна, и текущее===//
   componentDidUpdate(prevProps, prevState) {
    const prevName = prevProps.pokemonName;
    const currentName = this.props.pokemonName

    //===Обязательно делаем проверку пред-состояния, текущего, для того чтоб не зациклить состояние==//
    if (prevName !== currentName) {

      this.setState({ status:'pending'});
      setTimeout(() => { 
        fetch(`https://pokeapi.co/api/v2/pokemon/${currentName}`)
          
          .then(response => { 
            if (response.ok) { 
             return response.json()
            }
            return Promise.reject(
              new Error(`Покемона с таким именем ${currentName} нет.`),
            )
          })
          .then(pokemon => this.setState({ pokemon,status:'resolve' }))
          .catch(error => this.setState({ error,status:'rejected' }))
      },250)
     };
  }
  render() { 
    const { pokemon,error,status } = this.state;
    const { pokemonName } = this.props;

    if (status === 'idle') { 
      return <div>Введите имя покемона.</div>
    }

    if (status === 'pending') { 
      return <div>Загружаем...</div>
    }

      if (status === 'rejected') { 
        return <PokemonFallBackView
        message={error.message}
        />
    }

    if (status === 'resolve') { 
      return <PokemonData pokemon={pokemon}/>
    }
    
    return (
      <div>
        {error && <h2>{error.message}</h2>}
        {/* {isLoading && <div>Загружаем...</div>} */}
        {!pokemonName && <div>Введите имя покемона.</div>}
        {pokemon && (<div>
          <img src={pokemon.sprites.other['official-artwork'].front_default} alt={pokemon.name} width='250' height='250' />
          <p>Name: {pokemon.name}</p>
          <p>Order:{pokemon.order}</p>
          <p>Height: {pokemon.height}</p>
          <p>Weight: {pokemon.weight}</p>
        </div>)}
      </div>
    );
  }
}
export default PokemonInfo;
    

