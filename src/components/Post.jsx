// Stylesheets
import styles from "./Post.module.css";

function Post() {
  const post = '';

  return (
    <div className={styles.postContainer}>
      <section className={styles.header}>
        <div className={styles.userArea}>
          <img
            className={styles.userImage}
            src={post?.user_image ? post?.user_image : "/imgs/icon_user.jpg"}
            alt="User IMG"
          />
        </div>
      </section>
    </div>
  );
}

export default Post;
