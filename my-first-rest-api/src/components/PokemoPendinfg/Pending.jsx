// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { Oval } from  'react-loader-spinner'

function PendingPokemon({ PokemonName }) { 
  return (
    <div>
      <Oval color="#303030" height={40} width={40} />
      Загружаем...
    </div>
  )
}

export default PendingPokemon;