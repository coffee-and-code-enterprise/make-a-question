// Dependencies
import {
	Routes,
	Route,
	Link,
	useNavigate,
	useLocation
} from "react-router-dom"

// Components
import QuestionButtons from "../components/common/QuestionButtons.jsx";

// Stylesheets
import styles from "./Answers.module.css";

function Answers() {
	const navigate = useNavigate();
	const location = useLocation();

	return (
		<main className={styles.hero}>
			<section className={styles.heroContent}>
				<Link to="/answers" className={location.pathname === "/answers" && styles.selected} replace>Públicas</Link>
				<Link to="/answers/anonymous" className={location.pathname === "/answers/anonymous" && styles.selected} replace>Anônimas</Link>
			</section>
			<section className={styles.questions}>
				<QuestionButtons />
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
							path="anonymous"
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

export default Answers