//Dependencies
import { useRef, useEffect } from "react";
import { Link } from "react-router-dom";

// Stylesheet
import styles from "./UserPopUp.module.css";

// Images
import icon from "/imgs/icon_user.jpg";

function UserPopUp({ visible, setter }) {
  const popRef = useRef(null);

  useEffect(() => {
    function handleClickFora(event) {
      // Se o ref existir e o clique não estiver dentro dele, fecha
      if (popRef.current && !popRef.current.contains(event.target)) {
        setter("hidden");
      }
    }

    document.addEventListener("mousedown", handleClickFora);

    return () => {
      document.removeEventListener("mousedown", handleClickFora);
    };
  }, []);

  return (
    <div ref={popRef} className={styles.popUpContainer} style={{ visibility: visible }}>
      <div className={styles.top}>
        <img className={styles.userImage} src={icon} alt="user icon" />
        <p>
          <span>Hello</span>, Username!
        </p>
      </div>
      <Link to="/profile">Perfil</Link>
      <Link to="/settings">Configurações</Link>
      <Link to="/login">Sair</Link>
    </div>
  );
}

export default UserPopUp;
