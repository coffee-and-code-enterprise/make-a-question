import { Link } from "react-router-dom"
import styles from "./Header.module.css"

// Logos
import logo_white from "/logos/logo_makeaquestion_white.png";
import icon from "/imgs/icon_user.jpg"; 

function Header() {
  return (
    <>
      <header className={styles.container}>
        <nav className={styles.headerNavigation}>
          <ul className={styles.headerContent}>
            <li className={`${styles.headerIcon} ${styles.headerLink}`}><Link to="/home"><img className={styles.logo} src={logo_white} alt="logo" /></Link></li>
            <li className={styles.headerLink}><Link to="/about">Sobre</Link></li>
            <li className={styles.headerLink}><Link to="/contact">Contato</Link></li>
          </ul>
        </nav>
        <div className={styles.userInfo}>
           <img className= {styles.userIcon} src={icon} alt="User IMG" />
           <button className={styles.dropdownBtn} id="dropBtn"><p className={styles.userName}>Username ▾</p></button>
        </div>
      </header>
      <hr className={styles.breakLine}/>
    </>
  )
}

export default Header 

