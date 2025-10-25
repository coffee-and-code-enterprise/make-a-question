// Stylesheets
import styles from "./NotFound.module.css";

function NotFound() {
  return (
    <main id={styles.notFoundMain}>
      <h2>Erro 404</h2>
      <h3>Página não encontrada :(</h3>
    </main>
  );
}

export default NotFound;
