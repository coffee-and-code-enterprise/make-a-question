import styles from "./Rating.module.css";
import icon from "/imgs/icon_user.jpg"; 

function Rating({username = "Username"}){
    return (
        <div>
            <div>
                <div className={styles.userInfo}>
                    <img src={icon} alt="User Rating Icon" />
                    <p>{username}</p>
                </div>

                <div className={styles.starsContainer}>
                    <p>★★★★★</p>
                </div>

                <div className={styles.dateContainer}><p>DD/MM/YYYY</p></div>

            </div>
        </div>
    )
}

export default Rating;
