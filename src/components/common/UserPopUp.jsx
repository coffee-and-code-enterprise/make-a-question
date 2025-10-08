//Dependencies
import { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth.js";
import { useUser } from "../../contexts/UserContext.jsx";
import { useNavigate } from "react-router-dom";

// Stylesheet
import styles from "./UserPopUp.module.css";

// Images
import icon from "/imgs/icon_user.jpg";

function UserPopUp({ visible, setter }) {
	const popRef = useRef(null);
	const { logout } = useAuth();
	const { user, setUser } = useUser();
	const navigate = useNavigate();

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
		<div
			ref={popRef}
			className={styles.popUpContainer}
			style={{ visibility: visible }}>
			<div className={styles.top}>
				{user?.id && (
					<>
						<img
							className={styles.userImage}
							src={user?.user_image ? user?.user_image : "/imgs/icon_user.jpg"}
							alt="user icon"
						/>
						<p>
							<span>Olá</span>, {user?.username}!
						</p>
					</>
				)}
			</div>
			{user?.id ? (
				<>
					<Link to="/profile">Perfil</Link>
					<Link to="/settings">Configurações</Link>
					<button onClick={() => {logout(); setUser(null); navigate("/")}}>Sair</button>
				</>
			) : (
        <>
          <Link to="/settings">Configurações</Link>
          <Link to="/profile">Entrar</Link>
        </>
      )}
		</div>
	);
}

export default UserPopUp;
