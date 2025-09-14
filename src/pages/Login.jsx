// Dependencies
import { useState } from 'react';

// Stylesheets
import styles from './Login.module.css';



function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [notRobot, setNotRobot] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    if (!username || !password) {
      alert("Preencha todos os campos!");
      return;
    }
    console.log("Usuário:", username, "Senha:", password);
    alert("Login enviado! (futuro: autenticar no backend)");
  }

  return (
    <main id={styles.loginContainer}>
      <div className={styles.formContainer}>
        <section className={styles.top}>
          <h2>Login</h2>
          <p>É bom te ver de novo.</p>
          <p>Surgiu alguma dúvida?</p>
        </section>
        <section className={styles.bottom}>
          <form 
            onSubmit={handleSubmit} 
            className={styles.loginForm}
          >
            <label className={styles.formLabel}>Usuário</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Digite seu usuário"
              className={styles.formInput}
            />

            <label className={styles.formLabel}>Senha</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Digite sua senha"
              className={styles.formInput}
            />

            <label className={styles.formCheckboxLabel}>
              <input 
                type="checkbox" 
                checked={notRobot}
                onChange={(e) => setNotRobot(e.target.checked)}
                className={styles.formInput}
              />
              <span>Não sou um robô</span>
            </label>

            <button 
              type="submit"
              className={styles.formSubmitButton}
            >
              Entrar
            </button>
          </form>
        </section>
      </div>
    </main>
  );
}

export default Login;
