import { Link } from "react-router-dom";
import styles from "./Footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



function Footer() {
  return (
    <>
      <footer className={styles.footerContainer}>
        <div className={styles.footerContent}>
          
          {/*Logo*/}
          <div className={styles.logoSection}>
            <Link to="/home">
              <img alt="Logo MakeAQuestion" className={styles.logo} />
            </Link>
          </div>

          {/*Paginas*/}
          <div className={styles.pagesSection}>
            <h4 className={styles.sectionTitle}>Páginas</h4>
            <ul className={styles.linkList}>
              <li><Link to="/" className={styles.footerLink}>introduction</Link></li>
              <li><Link to="/home" className={styles.footerLink}>Home</Link></li>
              <li><Link to="/about" className={styles.footerLink}>Sobre</Link></li>
              <li><Link to="/contact" className={styles.footerLink}>Contato</Link></li>
              <li><Link to="/settings" className={styles.footerLink}>Settings</Link></li>
              <li><Link to="/report-bugs" className={styles.footerLink}>Report Bugs</Link></li>
            </ul>
          </div>

          {/*Contato*/}
          <div className={styles.contactSection}>
            <h4 className={styles.sectionTitle}>Contato</h4>
            <ul className={styles.contactList}>
              <li>E-mail comercial</li>
              <li>Número de Telefone</li>
            </ul>
          </div>

          {/*Sobre o Projeto*/}
          <div className={styles.projectSection}>
            <h4 className={styles.sectionTitle}>Sobre o Projeto</h4> 
            <ul className={styles.linkList}>
              <li><a href="https://github.com/coffee-and-code-enterprise" target="_blank" rel="noopener noreferrer" className={styles.footerLink}>GitHub</a></li>
            </ul>
          </div>

          {/*Emoji Pra Exemplificar*/}
          <div className={styles.iconsSection}>
            <a href="#" className={styles.socialEmojiLink}>🔗</a>
            <a href="#" className={styles.socialEmojiLink}>📧</a>
            <a href="#" className={styles.socialEmojiLink}>💬</a>
          </div>

        </div>
      </footer>
      <div className={styles.footerBottom}>
        &copy;{new Date().getFullYear()} MakeAQuestion, todos os direitos reservados.
      </div>
    </>
  );
}

export default Footer;