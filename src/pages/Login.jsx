// Dependencies
import { useState, useEffect } from "react";
import { useLocalStorage } from "@uidotdev/usehooks";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth.js";

// Stylesheets
import styles from "./Login.module.css";

function Login() {
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [registerData, setRegisterData] = useState({
    username: "",
    email: "",
    pass: "",
    phone: "",
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

      // Envia o usuário para tela de perfil
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

    console.log(result);

    // Verifica o resultado da operação
    if (result && result.message) {
      setMessage(result.message);

      if (result && result.success) {
        // Envia o usuário para tela de perfil
        navigate("/profile");
      }
    } else {
      setMessage("❌ Algo deu errado, tente novamente mais tarde.");
    }
  };

  return (
    <main id={styles.loginContainer}>
      <Routes>
        <Route
          path="/"
          element={
            <div className={styles.formContainer}>
              <section className={styles.top}>
                <h2>Login</h2>
                <p>É bom te ver de novo.</p>
                <p>Surgiu alguma dúvida?</p>
              </section>
              <section className={styles.bottom}>
                <form onSubmit={handleLogin} className={styles.loginForm}>
                  <label className={styles.formLabel}>Email</label>
                  <input
                    type="text"
                    value={loginData.email}
                    placeholder="Informe o seu email"
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
                    placeholder="Digite sua senha"
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
                  <Link to="/login/sign-up">Não possui conta?</Link>
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
                <form onSubmit="" className={styles.loginForm}>
                  <label className={styles.formLabel}>Usuário</label>
                  {/* Input do nome de usuário */}
                  <input
                    className={styles.formInput}
                    type="text"
                    placeholder="Nome"
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
                    placeholder="Email"
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
                    placeholder="Senha"
                    value={registerData.pass}
                    onChange={(e) =>
                      setRegisterData({
                        ...registerData,
                        pass: e.target.value,
                      })
                    }
                    required
                  />
                  <label className={styles.formLabel}>Telefone</label>
                  {/* Input do telefone */}
                  <input
                    className={styles.formInput}
                    type="tel"
                    placeholder="Telefone"
                    value={registerData.phone}
                    onChange={(e) =>
                      setRegisterData({
                        ...registerData,
                        phone: e.target.value,
                      })
                    }
                  />
                  <button type="submit" className={styles.formSubmitButton}>
                    Entrar
                  </button>
                  <Link to="/login">Já possui uma conta?</Link>
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
