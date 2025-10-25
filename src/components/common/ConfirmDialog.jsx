// Stylesheets
import styles from "./ConfirmDialog.module.css";

// Componente do Confirm Dialog
function ConfirmDialog({ message = "Você tem certeza que deseja continuar?", responseSetter }) {
	return (
		<div className={styles.backdrop}>
			<div className={styles.CDContainer}>
				<p>{message}</p>
				<div className={styles.btnContainer}>
					<button onClick={() => responseSetter(true)}>Sim</button>
					<button className={styles.red} onClick={() => responseSetter(false)}>Não</button>
				</div>
			</div>
		</div>
	);
}

export default ConfirmDialog;
