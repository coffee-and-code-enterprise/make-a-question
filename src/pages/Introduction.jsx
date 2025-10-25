import styles from "./Introduction.module.css";

//Components
import { Link } from "react-router-dom";
import Rating from "../components/Rating.jsx";

//Images
import icon from "/imgs/icon_user.jpg";

// Criando o componente da Introdução:
function Introduction() {
  return (
    <main>
      <div className={styles.backgroundImage}>
        <section className={styles.heroSection}>
          <div className={styles.sectionTitle}>
            <img className="full-logo" alt="Logo MakeAQuestion" />
            <h4>A dúvida é o motor do conhecimento. Faça uma pergunta!</h4>
          </div>

          <div className={styles.heroButtons}>
            <Link to="/login">
              <button className={styles.linkButton}>Entrar</button>
            </Link>
            <a href="#rates" className={styles.arrowButton}>
              ▼
            </a>
          </div>
        </section>
      </div>

      <section id="rates" className={styles.ratingSection}>
        <div className={styles.sectionTitle}>
          <h2>O que a comunidade acha?</h2>
        </div>

        <div className={styles.ratingContainer}>
          <Rating />
          <Rating />
          <Rating />

          <a href="">Ver mais</a>
        </div>
      </section>

      <section className={styles.membersSection}>
        <div className={styles.sectionTitle}>
          <h2>Integrantes da Equipe</h2>
          <p>Conheça mais sobre o pessoal</p>
        </div>

        <div className={styles.membersImage}>
          <div className={`${styles.imageIcon} ${styles.vini}`}>
            <p className={styles.nameIcon}>Vinícius Duarte</p>
            <p className={styles.nameIcon}>Fullstack</p>
          </div>
          <div className={`${styles.imageIcon} ${styles.gui}`}>
            <p className={styles.nameIcon}>Guilherme Bittencourt</p>
            <p className={styles.nameIcon}>Fullstack</p>
          </div>
          <div className={`${styles.imageIcon} ${styles.caze}`}>
            <p className={styles.nameIcon}>Gustavo Henrique</p>
            <p className={styles.nameIcon}>Fullstack</p>
          </div>
          <div className={`${styles.imageIcon} ${styles.em}`}>
            <p className={styles.nameIcon}>Emanuel Resende</p>
            <p className={styles.nameIcon}>Fullstack</p>
          </div>
        </div>
      </section>

      <section className={styles.aboutSection}>
        <img className={styles.imageAbout} src={icon} alt="" />

        <div className={`${styles.sectionTitle} ${styles.tittleAbout}`}>
          <h2>Por onde começamos?</h2>
          <p className={styles.aboutP}>
            Se quiser saber mais sobre como começamos, siga o botão:
          </p>
          <Link to="/about">
            <button className={`${styles.linkButton} ${styles.aboutButton}`}>
              Sobre
            </button>
          </Link>
        </div>
      </section>

      <section className={styles.contactSection}>
        <div className={styles.sectionTitle}>
          <h2>Contate-nos</h2>
          <p>Envie uma menssagem diretamente para nosso pessoal</p>
        </div>

        <Link to="/contact">
          <button className={styles.linkButton}>Contate-nos</button>
        </Link>
      </section>
    </main>
  );
}

export default Introduction;
