//Dependencies
import { Link } from 'react-router-dom';

// Stylesheet
import styles from './UserPopUp.module.css';

function UserPopUp({ visible, setter }) {

  return (
    <div className={styles.popUpContainer} style={{ visibility: visible }}>
      <div className={styles.top}>
        <h4>Hello, Username!</h4>
        <button onClick={() => setter('hidden')}>X</button>
      </div>
      <Link to="/profile"><button>Perfil</button></Link>
      <Link to="/settings"><button>Configurações</button></Link>
      <Link to="#"><button>Sair</button></Link>
    </div>
  );
}

export default UserPopUp;