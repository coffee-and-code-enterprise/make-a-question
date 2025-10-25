// Dependencies
import { deletePost } from "../services/api.js";
import { useState, useEffect } from "react";
import { useLocalStorage } from "@uidotdev/usehooks";
import { useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFlag, faTrash } from "@fortawesome/free-solid-svg-icons";
import { faStar as solidStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as regularStar } from "@fortawesome/free-regular-svg-icons";

// Componentes
import ConfirmDialog from "../components/common/ConfirmDialog.jsx";

// Stylesheets
import styles from "./Post.module.css";

function Post({ postId, userId, userImage, userName, message, imageUrl }) {
  const [isOnProfile, setIsOnProfile] = useState(false);
  const location = useLocation();
  const [token] = useLocalStorage("token", null);
  const [showDialog, setShowDialog] = useState(false);
  const [dialogResponse, setDialogResponse] = useState(null);

  useEffect(() => {
    // Verifica se tem resposta
    if (dialogResponse === null) return;

    // Retorna a resposta para "vazio"
    setDialogResponse(null);

    // Retira o Dialog da tela
    setShowDialog(false);

    // Se a resposta foi "false", descontinua o código
    if (!dialogResponse) return;

    // Código se a resposta for TRUE
    // Função assíncrona que deleta o post
    const awaitDeletePost = async () => {
      // Deletando o usuário
      const result = await deletePost(postId, token);

      // Para debugging do código
      console.log(result);

      // Verifica o resultado da operação
      if (result?.success) {
        alert("✅ Post deletado com sucesso!");

        // Recarrega a tela
        window.location.reload();
      } else {
        alert("❌ Algo deu errado, tente novamente mais tarde: ", result?.error);
      }
    };

    // Chamando a função
    awaitDeletePost();
  }, [dialogResponse]);

  useEffect(() => {
    if (location.pathname.includes("/profile")) {
      setIsOnProfile(true);
    }
  }, []);

  const handleDeletePost = () => {
    setShowDialog(true);
  };

  return (
    <>
      {showDialog && <ConfirmDialog responseSetter={setDialogResponse} />}
      <div className={styles.postContainer}>
        <section className={styles.header}>
          <div className={styles.userArea}>
            <img className={styles.userImage} src={userImage ? userImage : "/imgs/icon_user.jpg"} alt="User IMG" />
            <p>
              {userName ?? "Username"}#{userId ?? null}
            </p>
          </div>
          <div className={styles.userInteraction}>
            <button className={styles.interButton}>
              <FontAwesomeIcon icon={regularStar} />
            </button>
            <button className={styles.interButton}>
              <FontAwesomeIcon icon={faFlag} />
            </button>
            {isOnProfile && (
              <button className={styles.interButton} onClick={handleDeletePost}>
                <FontAwesomeIcon icon={faTrash} />
              </button>
            )}
          </div>
        </section>
        <hr />
        <section className={styles.body}>
          <p className={styles.postMessage}>{message}</p>
          {imageUrl && <img className={styles.postImg} src={imageUrl} />}
        </section>
        <section className={styles.footer}>
          <textarea className={styles.answer} type="text" placeholder="Responda aqui" />
          <button className={styles.showAnswers}>Ver respostas</button>
        </section>
      </div>
    </>
  );
}

export default Post;
