// Componentes
import Header from './components/Header.jsx'

// Importando o estilo
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'

// Páginas
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Introduction from './pages/Introduction.jsx'
import Settings from './pages/Settings.jsx'
import Answers from './pages/Answers.jsx'
import SignUp from './pages/SignUp.jsx'
import Profile from './pages/Profile.jsx'
import ReportBugs from './pages/ReportBugs.jsx'


function App() {
  const location = useLocation();
  const hideLayout = location.pathname === '/signup';  // Se a tela for a de cadastro, ele esconderá o Header e o Footer

  return (
    <BrowserRouter>
      <Header />

      {/* Rotas*/}
      {/* A página do site vai aparecer entre o header e o footer, de acordo com o link na url */}
      <Routes>
        <Route path="/" element={<Introduction />} />
        <Route path="/answers" element={<Answers />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/profile/*" element={<Profile />} />
        <Route path="/report-bugs" element={<ReportBugs />} />
        <Route path="/home/*" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/introduction" element={<Introduction />} />
        <Route path="/settings" element={<Settings />}/>
      </Routes>

      <footer>
          <p>&copy; {new Date().getFullYear()} Make A Question</p>
      </footer>
    </BrowserRouter>
  )
}

export default App
