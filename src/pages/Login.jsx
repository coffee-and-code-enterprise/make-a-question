// Dependencies
import { useState, useEffect } from "react";
import { useLocalStorage } from "@uidotdev/usehooks";
import { Routes, Route, Link, useNavigate, replace } from "react-router-dom";
import { useAuth } from "../hooks/useAuth.js";
import { createUser } from "../services/api.js";

// Stylesheets
import styles from "./Login.module.css";

function Login() {
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [registerData, setRegisterData] = useState({
    username: "",
    email: "",
    password: "",
    phone: null,
  });
  const [token] = useLocalStorage("token", null);
  const { login } = useAuth();
  const navigate = useNavigate();

  // Verifica se o usuário já possui um token e redireciona para a tela de perfil
  useEffect(() => {
    if (token) {
      navigate("/profile");
    }
  }, []);

  // Função responsável por efetuar o login do usuário
  const handleLogin = async (e) => {
    // "e" significa o elemento que chamou a função
    e.preventDefault();

    // Realiza a tentativa de login
    const result = await login(loginData);

    // Verifica o resultado da operação
    if (result && result?.token) {
      // Renderiza a mensagem e atualiza o token no local storage
      alert("✅ Login realizado com sucesso!");

      // Redireciona o usuário para tela de perfil
      navigate("/profile");
    } else {
      alert("❌ Email ou senha incorretos.");
    }
  };

  // Função responsável por criar um novo usuário
  const handleSignup = async (e) => {
    // "e" significa o elemento que chamou a função
    e.preventDefault();

    // Realiza a tentativa de criação de um novo usuário
    const result = await createUser(registerData);

    // Verifica o resultado da operação
    if (result && result.message && result.success) {
      alert("✅ Cadastro realizado com sucesso!");

      // Redireciona o usuário para tela de login
      navigate("/login", { replace: true });
    } else {
      alert("❌ Algo deu errado, tente novamente mais tarde.");
      console.error(result.message);
    }
  };

	// Função para verificar se está vazio
	function emptyToNull(value) {
  // Remove espaços e verifica se o campo está vazio
  if (value === undefined || value === null || value.trim() === '') {
    return null;
  }
  return value;
}

  return (
    <main id={styles.loginContainer}>
      <Routes>
        <Route
          path="/"
          element={
            <div className={styles.formContainer}>
              <section className={styles.top}>
                <h2>Login</h2>
                <p>É bom te ver de novo</p>
                <p>Surgiu alguma dúvida?</p>
              </section>
              <section className={styles.bottom}>
                <form onSubmit={handleLogin} className={styles.loginForm}>
                  <label className={styles.formLabel}>Email</label>
                  <input
                    type="text"
                    value={loginData.email}
                    placeholder="Insira seu e-mail"
                    className={styles.formInput}
                    onChange={(e) =>
                      setLoginData({
                        ...loginData,
                        email: e.target.value,
                      })
                    }
                    required
                  />
                  <label className={styles.formLabel}>Senha</label>
                  <input
                    type="password"
                    value={loginData.password}
                    placeholder="Insira sua senha"
                    className={styles.formInput}
                    onChange={(e) =>
                      setLoginData({
                        ...loginData,
                        password: e.target.value,
                      })
                    }
                    required
                  />
                  <button type="submit" className={styles.formSubmitButton}>
                    Entrar
                  </button>
                  <Link to="/login/sign-up" replace>
                    Não possui conta?
                  </Link>
                </form>
              </section>
            </div>
          }
        />
        <Route
          path="/sign-up"
          element={
            <div className={styles.formContainer}>
              <section className={styles.top}>
                <h2>Login</h2>
                <p>Que bom te ver aqui</p>
                <p>Surgiu alguma dúvida?</p>
              </section>
              <section className={styles.bottom}>
                <form onSubmit={handleSignup} className={styles.loginForm}>
                  <label className={styles.formLabel}>Usuário</label>
                  {/* Input do nome de usuário */}
                  <input
                    className={styles.formInput}
                    type="text"
                    placeholder="Insira seu nome"
                    value={registerData.username}
                    onChange={(e) =>
                      setRegisterData({
                        ...registerData,
                        username: e.target.value,
                      })
                    }
                    required
                  />
                  <label className={styles.formLabel}>Email</label>
                  {/* Input do e-mail */}
                  <input
                    className={styles.formInput}
                    type="email"
                    placeholder="Insira seu e-mail"
                    value={registerData.email}
                    onChange={(e) =>
                      setRegisterData({
                        ...registerData,
                        email: e.target.value,
                      })
                    }
                    required
                  />
                  <label className={styles.formLabel}>Senha</label>
                  {/* Input do senha */}
                  <input
                    className={styles.formInput}
                    type="password"
                    placeholder="Insira sua senha"
                    value={registerData.password}
                    onChange={(e) =>
                      setRegisterData({
                        ...registerData,
                        password: e.target.value,
                      })
                    }
                    required
                  />
                  <label className={styles.formLabel}>Telefone</label>
                  {/* Input do telefone */}
                  <input
                    className={styles.formInput}
                    type="tel"
                    placeholder="Insira seu telefone"
                    value={registerData.phone}
                    onChange={(e) =>
                      setRegisterData({
                        ...registerData,
                        phone: emptyToNull(e.target.value),
                      })
                    }
                  />
                  <button type="submit" className={styles.formSubmitButton}>
                    Cadastrar
                  </button>
                  <Link to="/login" replace>
                    Já possui uma conta?
                  </Link>
                </form>
              </section>
            </div>
          }
        />
      </Routes>
    </main>
  );
}

export default Login;
