// Dependencies
import {
  Routes,
  Route,
  Link,
  useNavigate,
  useLocation,
} from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

// Stylesheet
import styles from "./Home.module.css";

// Criando o componente da Home:
function Home() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <main className={styles.homeContainer}>
      <section className={styles.search}>
        <h2>
          <img className="full-logo" alt="logo" />
        </h2>
        <div className={styles.searchBar}>
          <FontAwesomeIcon icon={faSearch} className={styles.searchIcon}></FontAwesomeIcon>
          <input type="text" placeholder="Faça uma pergunta..." />
        </div>
      </section>
      <section className={styles.filter}>
        <a
          onClick={() => navigate("/home")}
          className={location.pathname === "/home" && styles.selected}
        >
          Recomendados
        </a>
        <a
          onClick={() => navigate("/home/foryou")}
          className={location.pathname === "/home/foryou" && styles.selected}
        >
          Para Você
        </a>
        <a
          onClick={() => navigate("/home/recentcomments")}
          className={
            location.pathname === "/home/recentcomments" && styles.selected
          }
        >
          Recentes
        </a>
      </section>
      <section className={styles.questions}>
        <div className={styles.buttons}>
          <Link to={"#"}>
            <button>Fazer uma pergunta</button>
          </Link>
          <Link to={"#"}>
            <button>Responder uma pergunta aleatória</button>
          </Link>
        </div>
        <div className={styles.comments}>
          <Routes>
            <Route
              path="/"
              element={
                <div className={styles.quComponents}>
                  <div className={styles.exComponent} />
                  <div className={styles.exComponent} />
                  <div className={styles.exComponent} />
                  <div className={styles.exComponent} />
                </div>
              }
            />
            <Route
              path="foryou"
              element={
                <div className={styles.quComponents}>
                  <div className={styles.exComponent} />
                  <div className={styles.exComponent} />
                  <div className={styles.exComponent} />
                  <div className={styles.exComponent} />
                </div>
              }
            />
            <Route
              path="recentcomments"
              element={
                <div className={styles.quComponents}>
                  <div className={styles.exComponent} />
                  <div className={styles.exComponent} />
                  <div className={styles.exComponent} />
                  <div className={styles.exComponent} />
                </div>
              }
            />
          </Routes>
          <p>1 2 3 ... 218</p>
        </div>
      </section>
    </main>
  );
}

// Exportando esse componente como padrão deste arquivo:
export default Home;
