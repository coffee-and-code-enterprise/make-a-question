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
    <main className={styles.homeContainer}>
      <section className={styles.userSection}>
      </section>
      <section className={styles.sectionSelection}>
        <a
          onClick={() => navigate("/home")}
          className={location.pathname === "/home" && styles.selected}
        >
          Perguntas
        </a>
        <a
          onClick={() => navigate("/home/foryou")}
          className={location.pathname === "/home/foryou" && styles.selected}
        >
          Respostas
        </a>
        <a
          onClick={() => navigate("/home/recentcomments")}
          className={location.pathname === "/home/recentcomments" && styles.selected}
        >
          Favoritos
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
export default Profile;
