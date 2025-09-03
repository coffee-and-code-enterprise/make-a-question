import { Link } from "react-router-dom"

function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/about">Sobre</Link></li>
          <li><Link to="/contact">Contate-nos</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header