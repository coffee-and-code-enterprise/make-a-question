// Dependencies
import { Routes, Route, Link, useLocation } from "react-router-dom";
import { useUser } from "../contexts/UserContext";

// Components
import QuestionButtons from "../components/common/QuestionButtons.jsx";
import QuestionList from "../components/QuestionList.jsx";
import ConfirmDialog from "../components/common/ConfirmDialog.jsx";

// Stylesheet
import styles from "./Profile.module.css";

// Criando o componente do Perfil:
function Profile() {
  const location = useLocation();
  const { user } = useUser();

  return (
    <>
      <main className={styles.profileContainer}>
        <section className={styles.userSection}>
          <div className={styles.userContainer}>
            {user?.user_image ? (
              <img src={user?.user_image} alt="user icon" />
            ) : (
              <img src="/imgs/icon_user.jpg" alt="user icon" />
            )}
            <h3>
              Olá, {user?.username}
              <span>#{user?.id}</span>
            </h3>
          </div>
          <a className={styles.downArrow} href="#questions">
            ▾
          </a>
        </section>
        <section className={styles.sectionSelection}>
          <Link to="/profile" className={location.pathname === "/profile" && styles.selected} replace>
            Perguntas
          </Link>
          <Link to="/profile/answers" className={location.pathname === "/profile/answers" && styles.selected} replace>
            Respostas
          </Link>
          <Link to="/profile/favs" className={location.pathname === "/profile/favs" && styles.selected} replace>
            Favoritos
          </Link>
        </section>
        <section id="questions" className={styles.questions}>
          <QuestionButtons />
          <div className={styles.comments}>
            <Routes>
              <Route path="/" element={<QuestionList userId={user?.id} />} />
              <Route path="answers" element={<QuestionList userId={user?.id} />} />
              <Route path="favs" element={<QuestionList userId={user?.id} />} />
            </Routes>
          </div>
        </section>
      </main>
    </>
  );
}

// Exportando esse componente como padrão deste arquivo:
export default Profile;
