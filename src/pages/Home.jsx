// Dependencies
import { Routes, Route, Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

// Components
import QuestionList from "../components/QuestionList.jsx";
import QuestionButtons from "../components/common/QuestionButtons.jsx";

// Stylesheet
import styles from "./Home.module.css";

// Componente principal da página Home
function Home() {
  // Navegação
  const location = useLocation();

  // Função utilitária para verificar se a rota está ativa
  function isActive(path) {
    return location.pathname === path ? styles.selected : "";
  }

  return (
    <main className={styles.homeMain}>
      {/* Seção de busca */}
      <section className={styles.search}>
        <h2>
          <img className="full-logo" alt="logo" />
        </h2>
        <div className={styles.searchBar}>
          <FontAwesomeIcon icon={faSearch} className={styles.searchIcon} />
          <input type="text" placeholder="Faça uma pergunta..." />
        </div>
      </section>
      <section className={styles.filter}>
        <Link to="/home" className={isActive("/home")} replace>
          Recomendados
        </Link>
        <Link to="/home/foryou" className={isActive("/home/foryou")} replace>
          Para Você
        </Link>
        <Link to="/home/recentcomments" className={isActive("/home/recentcomments")} replace>
          Recentes
        </Link>
      </section>

      <section className={styles.questions}>
        <QuestionButtons />
        <div className={styles.comments}>
          <Routes>
            <Route path="/" element={<QuestionList />} />
            <Route path="foryou" element={<QuestionList />} />
            <Route path="recentcomments" element={<QuestionList />} />
          </Routes>
        </div>
      </section>
    </main>
  );
}

export default Home;
