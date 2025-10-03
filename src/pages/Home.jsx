// Dependencies
import {
	Routes,
	Route,
	Link,
	useNavigate,
	useLocation,
} from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

// Stylesheet
import styles from "./Home.module.css";

// Componente principal da página Home
function Home() {
	const navigate = useNavigate();
	const location = useLocation();

	// Função utilitária para verificar se a rota está ativa
	function isActive(path) {
		return location.pathname === path ? styles.selected : "";
	}
	
	return (
		<main className={styles.homeMain}>
			{/* Seção de busca */}
			<section className={styles.search}>
				<h2>
					<img className="full-logo" alt="logo" />
				</h2>
				<div className={styles.searchBar}>
					<FontAwesomeIcon
						icon={faSearch}
						className={styles.searchIcon}
					/>
					<input type="text" placeholder="Faça uma pergunta..." />
				</div>
			</section>
			<section className={styles.filter}>
				<a
					onClick={() => navigate("/home")}
					className={isActive("/home")}>
					Recomendados
				</a>
				<a
					onClick={() => navigate("/home/foryou")}
					className={isActive("/home/foryou")}>
					Para Você
				</a>
				<a
					onClick={() => navigate("/home/recentcomments")}
					className={isActive("/home/recentcomments")}>
					Recentes
				</a>
			</section>

			<section className={styles.questions}>
				<div className={styles.buttons}>
					<Link to="#">
						<button>Fazer uma pergunta</button>
					</Link>
					<Link to="#">
						<button>Responder uma pergunta aleatória</button>
					</Link>
				</div>
				<div className={styles.comments}>
					<Routes>
						<Route path="/" element={<QuestionList />} />
						<Route path="foryou" element={<QuestionList />} />
						<Route
							path="recentcomments"
							element={<QuestionList />}
						/>
					</Routes>
					<p>1 2 3 ... 218</p>
				</div>
			</section>
		</main>
	);
}

// Componente para renderizar a lista de perguntas de exemplo
function QuestionList() {
	const { quComponents, exComponent } = styles;
	return (
		<div className={quComponents}>
			<div className={exComponent} />
			<div className={exComponent} />
			<div className={exComponent} />
			<div className={exComponent} />
		</div>
	);
}

export default Home;
