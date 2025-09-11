

import styles from "./Answers.module.css";

function Answers() {
	return (
		<main className={styles.hero}>
			<section className={styles.heroContent}>
				<a 
				onClick={() => navigate("/answers")}
				className={styles.selected}
				>Públicas</a>
				<a onClick={() => navigate("/answers/anonymous")}
				className={styles.selected}	
				>Anônimas</a>

			</section>
		</main>
	)
}

export default Answers