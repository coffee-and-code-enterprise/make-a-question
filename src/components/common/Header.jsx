// Dependencies
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { useUser } from "../../contexts/UserContext";

// Components
import UserPopUp from "./UserPopUp";

// Stylesheet
import styles from "./Header.module.css";

function Header() {
	const [visibility, setVisibility] = useState("hidden");
	const location = useLocation();
	const { user } = useUser();

	useEffect(() => {
		setVisibility("hidden");
	}, [location.pathname]);

	return (
		<>
			<header className={styles.container}>
				<nav className={styles.headerNavigation}>
					<ul className={styles.headerContent}>
						<li className={`${styles.headerIcon} ${styles.headerLink}`}>
							<Link to="/home">
								<img className={styles.logo} alt="logo" />
							</Link>
						</li>
						<li className={styles.headerLink}>
							<Link to="/about">Sobre</Link>
						</li>
						<li className={styles.headerLink}>
							<Link to="/contact">Contato</Link>
						</li>
					</ul>
				</nav>
				<div className={styles.userInfo}>
					<UserPopUp visible={visibility} setter={setVisibility} />
					<img
						className={styles.userIcon}
						src={user?.user_image ? user?.user_image : "/imgs/icon_user.jpg"}
						alt="User IMG"
					/>
					<button
						className={styles.dropdownBtn}
						id="dropBtn"
						onClick={() => setVisibility("visible")}>
						<p className={styles.userName}>{user?.username ? user?.username : "Entrar"} ▾</p>
					</button>
				</div>
			</header>
			<hr className={styles.breakLine} />
		</>
	);
}

export default Header;
