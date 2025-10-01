// Dependencies
import {
  Routes,
  Route,
  Link,
  useNavigate,
  useLocation,
} from "react-router-dom";

// Stylesheet
import styles from "./Profile.module.css";

// Criando o componente da Home:
function Profile() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <main className={styles.profileContainer}>
      <section className={styles.userSection}>
        <div className={styles.userContainer}>
          <img src="/imgs/icon_user.jpg" alt="user icon" />
          <h3>
            Hello, Username<span>#12345</span>
          </h3>
        </div>
        <a className={styles.downArrow} href="#questions">
          ▾
        </a>
      </section>
      <section className={styles.sectionSelection}>
        <a
          onClick={() => navigate("/profile")}
          className={location.pathname === "/profile" && styles.selected}
        >
          Perguntas
        </a>
        <a
          onClick={() => navigate("/profile/answers")}
          className={location.pathname === "/profile/answers" && styles.selected}
        >
          Respostas
        </a>
        <a
          onClick={() => navigate("/profile/favs")}
          className={location.pathname === "/profile/favs" && styles.selected}
        >
          Favoritos
        </a>
      </section>
      <section id="questions" className={styles.questions}>
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
              path="answers"
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
              path="favs"
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
export default Profile;
