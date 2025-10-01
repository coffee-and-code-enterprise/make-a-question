import styles from "./Contact.module.css";

function Contact() {
    return (
        <main className={styles.contact_container}>
            <div className={styles.info_section}>
                <h1>Contate-nos</h1>
                <p>
                    Possui uma pergunta?
                    <br />
                    Entre em contato conosco!
                </p>
            </div>
            <div className={styles.form_section}>
                <form>
                    <input type="text" placeholder="Nome Completo" required />
                    <input type="tel" placeholder="Telefone" required />
                    <textarea placeholder="Mensagem" rows="5" required></textarea>
                    <button type="submit">Contatar</button>
                </form>
            </div>
        </main>
    )
}

export default Contact;