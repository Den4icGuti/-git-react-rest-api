import erroImg from './ErrorImg/cat.jpg'
import styles from '../PokemonErrorView/error.module.css';

function PokemonFallBackView({message}) { 
  return (
    <div className={styles.boxError}>
      <img src={erroImg} alt='sadcat' width='200' height='180' />
      <p className={styles.deskError}>{message}</p>
    </div>
  );
}

export default PokemonFallBackView;