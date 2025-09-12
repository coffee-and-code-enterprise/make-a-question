//Dependencies
import { Link } from 'react-router-dom';

// Stylesheet
import styles from './UserPopUp.module.css';

function UserPopUp({ visible, setter }) {

  return (
    <div className={styles.popUpContainer} style={{ visibility: visible }}>
      <div className={styles.top}>
        <h4>Hello, Username!</h4>
        <button id={styles.close} onClick={() => setter('hidden')}>X</button>
      </div>
      <Link to="/profile"><button className={styles.translate}>Perfil</button></Link>
      <Link to="/settings"><button className={styles.translate}>Configurações</button></Link>
      <Link to="/signup"><button className={styles.translate}>Sair</button></Link>
    </div>
  );
}

export default UserPopUp;