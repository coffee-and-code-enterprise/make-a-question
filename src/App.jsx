// Importando o estilo
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'

function App() {

  return (
    <BrowserRouter>
      {/* Header ficará aqui, no lugar desta tag <nav> */}
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/about">About</Link> |{" "}
        <Link to="/contact">Contact</Link>
      </nav>

      {/* Rotas*/}
      {/* A página do site vai aparecer entre o header e o footer, de acordo com o link na url */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      {/* Footer ficará aqui */}
    </BrowserRouter>
  )
}

export default App
