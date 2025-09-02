/*
Seguinte, diferente do que você já está acostumado, a gente vai usar .module no CSS.
Isso vai ter o intuito de prevenir aquele problema que tivemos no último projeto, onde
o CSS de uma página poderia afetar o da outra. Para usar ele é bem simples:

Ao invés de: <div className="container" />
Iremos usar: <div className={styles.container} />

O arquivo CSS não vai mudar, pode programar igual você já utilizava. A única coisa que vou
pedir para começar a fazer é nomear as classes e IDs como pascalCase, o que é pascalCase?
Basicamente, ao invés de você renomear uma classe como ".home-container", você vai nomear como
".homeContainer". Só isso. Bom código!
*/

import styles from "./Home.module.css";

// Criando o componente da Home:
function Home() {
	return (
		<main>
			<h2>Home</h2>
		</main>
	)
}

// Exportando esse componente como padrão deste arquivo:
export default Home
