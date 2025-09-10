import styles from "./About.module.css";

function About() {
	return (
		<main className={styles.heroContainer}>
			<div className={styles.overlay}><section className={styles.hero}>
				<h2 className={styles.title}>Quer conhecer nosso projeto?</h2>
				<p className={styles.pa}>Vamos te contar tudo sobre ele</p>
				<div className={styles.scrollDown}><a className={styles.scroll} href="#nextSection">⌄</a> </div>
			</section></div>
			
			<section id='nextSection' className={styles.mainContent}>
				<h2 className={styles.mainTitle}>Por onde começamos?</h2>
				<p className={styles.mainPa}>Com uma ideia surgida para nosso projeto integrador- Senac Minas. Dedicamos nossos esforços para concluir um vasto planejamento, dando origem à uma nova utilidade para resolução de problemas. Permitindo interatividade entre os usuários para debaterem suas dúvidas e se informarem sobre determinado assunto que desejarem.</p>
				
				<h1 className={styles.mainProject}>Protótipos</h1>
				<img className={styles.planning} src="/about/brainstorm.jpg" alt="" />
				<p className={styles.projectPa}>Nos juntamos e começamos a planejar um projeto. Introduzindo um briefing junto a um brainstorm bem elaborado, conseguimos fornecer uma boa base para começar o projeto.</p>
				
				<img className={styles.mind} src="/about/mindmap.jpg" alt="" />
				
				<p className={styles.mindPa}>Prosseguimos com um MindMap para definir a organização dos requisitos do site, sendo eles funcionais ou não funcionais.</p>
				<img className={styles.start} src="/about/start.jpg" alt="" />
				
				<p className={styles.startPa}>Após o esboço feito a mão de como seria a Home do site, trabalhamos para reunir a paleta de cores e tipografia que iriamos utilizar. Concluindo logo em seguida nossa logo, tanto para temas claros, quanto escuros. </p>
				<img className={styles.wireframe} src="/about/wireframes.jpg" alt="" />
				<p className={styles.wireframePa}>Para finalizar, terminamos de detalhar os wireframes de todas as páginas. Um planejamento extenso nos levou a uma ótima organização para a futura execução do protótipo em si.</p>
			</section>
			
			<section className={styles.team}>
				<div className={styles.guiProfile}><h1 className={styles.teamTitle}> Integrantes da Equipe</h1>
				<p>"The Man"</p>
				<p>GUILHERME BITTENCOURT</p>
				<img className={styles.gui} src="/about/gui.png" alt="" />
				<p>° 18 anos</p>
				<p>° guilherme.assis.bittencourt@gmail.com</p>
				<br /></div>
				
				<p>"Mister EAM"</p>
				<p>EMANUEL MAIA</p>
				<img className={styles.manu} src="/about/manu.png" alt="" />
				<p>° 21 anos</p>
				<p>° emanuelaugustosantos13@gmail.com</p>
				
				<br />
				<p>"Cazé"</p>
				<p>GUSTAVO HENRIQUE</p>
				<img className={styles.gus} src="/about/gus.png" alt="" />
				<p>° 17 anos</p>
				<p>° gustavvohenrique58@gmail.com</p>
				
				<br />
				<p>"Vini-Conquista"</p>
				<p>VINÍCIUS SANTIAGO</p>
				<img className={styles.vini} src="/about/vini.png" alt="" />
				<p>° 17 anos</p>
				<p>°viniciusduartesant@gmail.com</p>

			</section>
		</main >
	)
}

export default About
