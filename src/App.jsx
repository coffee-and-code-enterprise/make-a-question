// Importando o estilo
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Introduction from './pages/Introduction.jsx'
import Settings from './pages/Settings.jsx'

function App() {

  return (
    <BrowserRouter>
      {/* Header ficará aqui, no lugar desta tag <nav> */}
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/about">About</Link> |{" "}
        <Link to="/contact">Contact</Link> |{" "}
        <Link to="/settings">Settings</Link> |{" "}
        <Link to='/introduction'>Intro</Link>
      </nav>

      {/* Rotas*/}
      {/* A página do site vai aparecer entre o header e o footer, de acordo com o link na url */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/introduction" element={<Introduction />} />
        <Route path="/settings" element={<Settings />}/>
      </Routes>

      {/* Footer ficará aqui */}
    </BrowserRouter>
  )
}

export default App
