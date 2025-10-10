// Dependencies
import { useRef, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage, faTrash, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { createPost } from "../services/api.js";
import { useNavigate } from "react-router-dom";
import { useUser } from "../contexts/UserContext";
import { useLocalStorage } from "@uidotdev/usehooks";

// Stylesheet
import styles from "./MakeAQuestion.module.css";

// Componente da página
function MakeAQuestion() {
	const fileInputRef = useRef(null);
	const [formData, setFormData] = useState({ message: "", file: null });
	const [previewImg, setPreviewImg] = useState(null);
	const navigate = useNavigate();
	const { user } = useUser();
	const [token] = useLocalStorage("token", null);

	useEffect(() => {}, []);

	const handleImageClick = () => {
		// Verifica se a ref existe e então clica no elemento
		if (fileInputRef.current) {
			fileInputRef.current.click();
		}
	};

	const handleFileChange = event => {
		const file = event.target.files[0];
		if (file) {
			const reader = new FileReader();

			reader.onload = e => {
				// O e.target.result é a Data URL (string base64) da imagem
				const imageDataUrl = e.target.result;

				setPreviewImg(imageDataUrl);
			};

			setFormData(prev => ({
				...prev,
				file: file,
			}));

			// Inicia a leitura do arquivo
			reader.readAsDataURL(file);
		}
	};

	const handleClearImage = () => {
		setPreviewImg(null);
		setFormData(prev => ({ ...prev, file: null }));
	};

	const handleSubmit = async e => {
		// Com isso o ENTER não faz peripécias
		e.preventDefault();

    // Criando um objeto da data a ser enviada e adicionando a mensagem do form
		const dataToSend = new FormData();
		dataToSend.append("message", formData.message);

		if (formData.file) {
			// Adicionado a imagem ao dataToSend
			dataToSend.append("image", formData.file);
		}
		
		// Realiza a tentativa de criação de um novo usuário
		const result = await createPost(dataToSend, user.id, token);

		console.log(result)

		// Verifica o resultado da operação
		if (result && result.message) {
			alert("✅ Post criado com sucesso!");

			if (result && result.success) {
				// Redireciona o usuário para tela de login
				navigate("/home");
			}
		} else {
			alert("❌ Algo deu errado, tente novamente mais tarde: ", result?.message);
		}
	};

	return (
		<main id={styles.maqMain}>
			<form onSubmit={handleSubmit}>
				<h2>Faça sua pergunta...</h2>
				{previewImg && (
					<div className={styles.previewContainer}>
						<div className={styles.previewHeader}>
							<p>Pré-visualização:</p>
							<FontAwesomeIcon icon={faTrash} className={styles.previewTrash} onClick={handleClearImage} />
						</div>
						<img src={previewImg} className={styles.preview} />
					</div>
				)}
				<div className={styles.searchBar}>
					<button type="submit">
						<FontAwesomeIcon icon={faPaperPlane} className={`${styles.searchIcon} ${styles.one}`} />
					</button>
					<FontAwesomeIcon icon={faImage} className={`${styles.searchIcon} ${styles.two}`} onClick={handleImageClick} />
					<input
						type="text"
						value={formData.message}
						placeholder="Como estudar programação?"
						required
						onChange={e =>
							setFormData({
								...formData,
								message: e.target.value,
							})
						}
					/>
				</div>
				<input
					type="file"
					ref={fileInputRef}
					onChange={handleFileChange}
					style={{ display: "none" }}
					accept="image/*"
				/>
			</form>
		</main>
	);
}

export default MakeAQuestion;
