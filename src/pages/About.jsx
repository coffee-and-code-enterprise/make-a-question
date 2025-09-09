import styles from "./About.module.css";

function About() {
	return (
		<main className={styles.heroContainer}>
			<div className={styles.overlay}><section className={styles.hero}>
				<h2 className={styles.title}>Quer conhecer nosso projeto?</h2>
				<p className={styles.pa}>Vamos te contar tudo sobre ele</p>
				<div className={styles.scrollDown}><a className={styles.scroll} href="">⌄</a> </div>
			</section></div>
			<section className={styles.mainContent}>
				<h2 className={styles.mainTitle}>Por onde começamos?</h2>
				<p className={styles.mainPa}>Com uma ideia surgida para nosso projeto integrador- Senac Minas. Dedicamos nossos esforços para concluir um vasto planejamento, dando origem à uma nova utilidade para resolução de problemas. Permitindo interatividade entre os usuários para debaterem suas dúvidas e se informarem sobre determinado assunto que desejarem.</p>
				<h1 className={styles.mainProject}>Protótipos</h1>
			</section>
		</main>
	)
}

export default About
