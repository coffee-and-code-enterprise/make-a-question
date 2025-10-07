// Dependencies
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFlag } from "@fortawesome/free-solid-svg-icons";
import { faStar as solidStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as regularStar } from "@fortawesome/free-regular-svg-icons";

// Stylesheets
import styles from "./Post.module.css";

function Post({ userImage, userName, message, imageUrl }) {
  const post = "";

  return (
    <div className={styles.postContainer}>
      <section className={styles.header}>
        <div className={styles.userArea}>
          <img
            className={styles.userImage}
            src={post?.user_image ? post?.user_image : "/imgs/icon_user.jpg"}
            alt="User IMG"
          />
          <p>Username#1231</p>
        </div>
        <div className={styles.userInteraction}>
          <button className={styles.interButton}>
            <FontAwesomeIcon icon={regularStar} />
          </button>
          <button className={styles.interButton}>
            <FontAwesomeIcon icon={faFlag} />
          </button>
        </div>
      </section>
      <hr />
      <section className={styles.body}>
        <p className={styles.postMessage}>{message}</p>
      </section>
      <section className={styles.footer}>
        <textarea className={styles.answer} type="text" placeholder="Responda aqui" />
        <button className={styles.showAnswers}>
          Ver respostas
        </button>
      </section>
    </div>
  );
}

export default Post;
