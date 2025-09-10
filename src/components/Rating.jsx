import styles from "./Rating.module.css";
import icon from "/imgs/icon_user.jpg"; 

function Rating({username = "Username"}){
    return (
            <div className={styles.ratesContainer}>
                <div className={styles.infoContainer}>
                    <div className={styles.userInfo}>
                        <img src={icon} alt="User Rating Icon" />
                        <p>{username}</p>
                    </div>
                    
                    <div className={styles.starsContainer}>
                        <p>★★★★★</p>
                    </div>
                    
                    <div className={styles.dateContainer}><p>DD/MM/YYYY</p></div>
                </div>

                <div className={styles.textContainer}>
                    <div className={styles.text}>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio obcaecati ipsam vitae autem, repellendus deleniti ratione itaque, harum laboriosam architecto minima magnam animi odit expedita. Ex iusto hic cumque tempora?</p>
                    </div>
                </div>
            </div>
            
    )
}

export default Rating;
