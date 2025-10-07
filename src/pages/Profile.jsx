// Dependencies
import {
	Routes,
	Route,
	Link,
	useNavigate,
	useLocation,
} from "react-router-dom";
import { useUser } from "../contexts/UserContext";

// Stylesheet
import styles from "./Profile.module.css";

// Criando o componente do Perfil:
function Profile() {
	const navigate = useNavigate();
	const location = useLocation();
  const { user } = useUser();

  // Definindo a imagem do usuário
  const user_image = user?.user_image

  console.log(user_image)

	return (
		<main className={styles.profileContainer}>
			<section className={styles.userSection}>
				<div className={styles.userContainer}>
					{user?.user_image ? (
						<img src={user?.user_image} alt="user icon" />
					) : (
						<img src="/imgs/icon_user.jpg" alt="user icon" />
					)}
					<h3>
						Olá, {user?.username}
						<span>#{user?.id}</span>
					</h3>
				</div>
				<a className={styles.downArrow} href="#questions">
					▾
				</a>
			</section>
			<section className={styles.sectionSelection}>
				<Link to="/profile" className={location.pathname === "/profile" && styles.selected} replace>Perguntas</Link>
				<Link to="/profile/answers" className={location.pathname === "/profile/answers" && styles.selected} replace>Respostas</Link>
				<Link to="/profile/favs" className={location.pathname === "/profile/favs" && styles.selected} replace>Favoritos</Link>
			</section>
			<section id="questions" className={styles.questions}>
				<div className={styles.buttons}>
					<Link to={"#"}>
						<button>Fazer uma pergunta</button>
					</Link>
					<Link to={"#"}>
						<button>Responder uma pergunta aleatória</button>
					</Link>
				</div>
				<div className={styles.comments}>
					<Routes>
						<Route
							path="/"
							element={
								<div className={styles.quComponents}>
									<div className={styles.exComponent} />
									<div className={styles.exComponent} />
									<div className={styles.exComponent} />
									<div className={styles.exComponent} />
								</div>
							}
						/>
						<Route
							path="answers"
							element={
								<div className={styles.quComponents}>
									<div className={styles.exComponent} />
									<div className={styles.exComponent} />
									<div className={styles.exComponent} />
									<div className={styles.exComponent} />
								</div>
							}
						/>
						<Route
							path="favs"
							element={
								<div className={styles.quComponents}>
									<div className={styles.exComponent} />
									<div className={styles.exComponent} />
									<div className={styles.exComponent} />
									<div className={styles.exComponent} />
								</div>
							}
						/>
					</Routes>
					<p>1 2 3 ... 218</p>
				</div>
			</section>
		</main>
	);
}

// Exportando esse componente como padrão deste arquivo:
export default Profile;
