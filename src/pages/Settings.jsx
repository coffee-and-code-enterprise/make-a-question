// Dependencies
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faCamera } from "@fortawesome/free-solid-svg-icons";
import { useUser } from "../contexts/UserContext";
import { useAuth } from "../hooks/useAuth.js";
import { updateUser, deleteUser } from "../services/api.js";
import { useRef, useState, useEffect } from "react";
import { useLocalStorage } from "@uidotdev/usehooks";

// Componentes
import PrivateRoute from "../components/logic/PrivateRoute.jsx";
import ConfirmDialog from "../components/common/ConfirmDialog.jsx";

// Stylesheets
import styles from "./Settings.module.css";

// Componente da página de configurações
function Settings() {
	return (
		<main id={styles.stgMain}>
			<h2>Configurações</h2>

			<section className={styles.sectionSelection}>
				<Link to="/settings" className={location.pathname === "/settings" && styles.selected} replace>
					Geral
				</Link>
				<Link to="/settings/profile" className={location.pathname === "/settings/profile" && styles.selected} replace>
					Usuário
				</Link>
			</section>

			{/* SETTINGS GERAL / PROFILE */}
			<Routes>
				<Route path="/" element={<GlobalSettings />} />

				<Route
					path="/profile"
					element={
						<PrivateRoute>
							<ProfileSettings />
						</PrivateRoute>
					}
				/>
			</Routes>
		</main>
	);
}

function GlobalSettings() {
	return (
		<div className={styles.stgContainer}>
			<aside>
				<h3>Sessões</h3>
				<ul>
					<li>temas</li>
					<li>acessibilidade</li>
				</ul>
			</aside>
			<div className={styles.settings}>
				<section id="themes">
					<h3>Temas</h3>
					<div>
						Tema de cor:{" "}
						<select id="colorTheme" name="colorTheme">
							<option value="auto">Auto</option>
							<option value="light">Claro</option>
							<option value="dark">Escuro</option>
							<option value="moonlight">Moonlight</option>
							<option value="summer">Summer</option>
							<option value="pink">Pink</option>
						</select>
					</div>
				</section>
				<hr />
				<section id="accessibility">
					<h3>Acessibilidade</h3>
					<div>
						Desativar animações: <input type="checkbox" />
					</div>
					<div>
						Transcrição: <input type="checkbox" />
					</div>
					<div>
						Idioma:{" "}
						<select id="lang" name="lang">
							<option value="pt-br">Português (pt-br)</option>
							<option value="en">Inglês</option>
							<option value="es">Espanhol</option>
							<option value="fr">Francês</option>
							<option value="al">Alemão</option>
							<option value="jp">Japonês</option>
						</select>
					</div>
					<div>
						Fontes:{" "}
						<select id="fonts" name="fonts">
							<option value="default">Padrão</option>
							<option value="big">Maiores</option>
							<option value="bigger">Muito Maiores</option>
						</select>
					</div>
				</section>
			</div>
		</div>
	);
}

function ProfileSettings() {
	const { user } = useUser();
	const { login } = useAuth();
	const fileInputRef = useRef(null);
	const [previewImg, setPreviewImg] = useState(null);
	const [formData, setFormData] = useState({ username: null, email: null, phone: null, password: null, file: null });
	const [passConfirm, setPassConfirm] = useState(null);
	const [token, setToken] = useLocalStorage("token", null);
	const [showDialog, setShowDialog] = useState(false);
	const [dialogResponse, setDialogResponse] = useState(null);

	useEffect(() => {
		// Verifica se tem resposta
		if (dialogResponse === null) return;

		// Retira o Dialog da tela
		setShowDialog(false);

		// Se a resposta foi "false", descontinua o código
		if (!dialogResponse) return;

		// Função assíncrona que deleta o usuário
		const awaitDeleteUser = async token => {
			// Deletando o usuário
			const result = await deleteUser(token);

			// Verifica o resultado da operação
			if (result) {
				alert("✅ Usuário deletado com sucesso!");

				// Limpa o token antigo
				setToken(null);

				// Recarrega a tela
				window.location.reload();
			} else {
				alert("❌ Algo deu errado, tente novamente mais tarde: ", result?.message);
			}
		};

		// Chamando a função
		awaitDeleteUser(token);

		// Retorna a resposta para "vazio"
		setDialogResponse(null);
	}, [dialogResponse]);

	const handleUpdateUser = async e => {
		// Com isso o ENTER não faz peripécias
		e.preventDefault();

		if ((formData.password && !passConfirm) || (!formData.password && passConfirm)) {
			alert("Verifique os campos e tente novamente!");
			return;
		} else if (formData.password && passConfirm) {
			// Verificando a vericidade da senha
			const result = await login({ email: user?.email, password: passConfirm });

			if (!result) {
				alert("Verifique os campos e tente novamente!");
				return;
			} else if (result && result?.token) {
				sendForm();
				return;
			}
		}

		sendForm();
	};

	const sendForm = async e => {
		const dataToSend = new FormData();
		formData.username && dataToSend.append("username", formData.username);
		formData.email && dataToSend.append("email", formData.email);
		formData.phone && dataToSend.append("phone", formData.phone);
		formData.password && dataToSend.append("password", formData.password);

		if (formData.file) {
			// Adicionado a imagem ao dataToSend
			dataToSend.append("image", formData.file);
		}

		// Realiza a tentativa de atualizar o usuário
		const result = await updateUser(dataToSend, token);

		console.log(result);

		// Verifica o resultado da operação
		if (result && result.message) {
			alert(result.message);

			if (result && result.success) {
				// Recarrega a tela
				window.location.reload();
			}
		} else {
			alert("❌ Algo deu errado, tente novamente mais tarde: ", result?.message);
		}
	};

	const handleImageClick = () => {
		// Verifica se a ref existe e então clica no elemento
		if (fileInputRef.current) {
			fileInputRef.current.click();
		}
	};

	const handleClearImage = () => {
		setPreviewImg(null);
		setFormData(prev => ({ ...prev, file: null }));
	};

	const handleFileChange = event => {
		const file = event.target.files[0];
		if (file) {
			const reader = new FileReader();

			reader.onload = e => {
				// O e.target.result é a Data URL (string base64) da imagem
				const imageDataUrl = e.target.result;

				console.log(imageDataUrl);

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

	const handleDeleteUser = () => {
		setShowDialog(true);
	};

	return (
		<>
			{showDialog && <ConfirmDialog responseSetter={setDialogResponse} />}
			<div className={styles.stgContainer}>
				<aside>
					<h3>Sessões</h3>
					<ul>
						<li>conta</li>
						<li>posts</li>
					</ul>
				</aside>
				<div className={styles.settings}>
					<section id="account">
						<h3>Conta</h3>
						<h4>Atualizar Perfil</h4>
						<form className={styles.updateUser} onSubmit={handleUpdateUser}>
							<fieldset className={styles.userImage}>
								<legend>Foto de perfil</legend>
								<div className={styles.imgContainer}>
									<img
										src={previewImg ? previewImg : user?.user_image ?? "/imgs/icon_user.jpg"}
										alt="foto do usuário"
										onClick={handleImageClick}
									/>
									<FontAwesomeIcon icon={faCamera} className={`${styles.searchIcon}`} />
								</div>
								<input
									type="file"
									ref={fileInputRef}
									onChange={handleFileChange}
									style={{ display: "none" }}
									accept="image/*"
								/>
								<FontAwesomeIcon icon={faTrash} className={styles.imgTrash} onClick={handleClearImage} />
							</fieldset>
							<fieldset>
								<legend>Credenciais</legend>
								<strong>Se não quiser atualizar um campo, deixe-o vazio.</strong>
								<label>
									Username:{" "}
									<input
										name="username"
										value={formData.username}
										type="text"
										placeholder="Insira seu nome"
										onChange={e =>
											setFormData({
												...formData,
												username: e.target.value,
											})
										}
									/>
								</label>
								<label>
									Email:{" "}
									<input
										name="email"
										value={formData.email}
										type="email"
										placeholder="Insira seu email"
										onChange={e =>
											setFormData({
												...formData,
												email: e.target.value,
											})
										}
									/>
								</label>
								<label>
									Telefone:{" "}
									<input
										name="phone"
										value={formData.phone}
										type="phone"
										placeholder="Insira seu telefone"
										onChange={e =>
											setFormData({
												...formData,
												phone: e.target.value,
											})
										}
									/>
								</label>
								<label>
									Senha:{" "}
									<input
										name="passConfirm"
										value={passConfirm}
										type="password"
										placeholder="Insira sua senha"
										onChange={e => {
											setPassConfirm(e.target.value);
										}}
									/>
								</label>
								<label>
									Nova Senha:{" "}
									<input
										name="password"
										value={formData.password}
										type="password"
										placeholder="Insira sua nova senha"
										onChange={e =>
											setFormData({
												...formData,
												password: e.target.value,
											})
										}
									/>
								</label>
								<div className={styles.buttons}>
									<button type="reset" className={`${styles.sendBtn} ${styles.red}`}>
										Limpar
									</button>
									<button type="submit" onClick={() => {}} className={styles.sendBtn}>
										Atualizar Perfil
									</button>
								</div>
							</fieldset>
						</form>
						<h4>Área de Perigo</h4>
						<button className={`${styles.sendBtn} ${styles.red}`} onClick={handleDeleteUser}>
							Deletar Usuário
						</button>
					</section>
					<hr />
					<section id="posts">
						<h3>Posts</h3>
						Opções dos posts...
					</section>
				</div>
			</div>
		</>
	);
}

export default Settings;
