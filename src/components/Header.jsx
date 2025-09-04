import { Link } from "react-router-dom"
import styles from "./Header.module.css"

// Logo
import logo1 from '/logos/logo_makeaquestion_white.png'

console.log(logo1)

function Header() {
  return (
    <header className={styles.container}>
      <nav className={styles.headerNavigation}>
        <ul className={styles.headerContent}>
          <li><Link to="/home"><img className={styles.logo} src={logo1} alt="logo" /></Link></li>
          <li><Link to="/about">Sobre</Link></li>
          <li><Link to="/contact">Contate-nos</Link></li>
        </ul>
      </nav>
      <nav>

      </nav>
    </header>
  )
}

export default Header