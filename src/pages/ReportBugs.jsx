import styles from './ReportBugs.module.css'

function ReportBugs() {
    return (
        <main className={styles.hero}>
            <section className={styles.heroContent}>
                <h1 className={styles.heroTitle}>Relatar problema</h1>
                <p className={styles.heroPa}>Encontrou um problema? Relate!</p>
            </section>
            <section className={styles.formSection}>
                <form className={styles.formControl}>
                    <div>
                        <div><label htmlFor="Nome">Nome</label></div>
                        <input type="text" placeholder='Nome Completo' required />
                    </div>
                    <div>
                        <div>
                            <br />
                            <label htmlFor="Email">Email</label>
                        </div>
                        <input type="text" placeholder='Email' required />
                    </div>
                    <div>
                        <br />
                        <div><label htmlFor="Problema">Problema</label></div>
                        <select name="Problema" id={styles.problem} required>
                            <option value="">Selecionar problema</option>
                            <option value="erro">Problemas em perguntar/responder</option>
                            <option value="bug">Bugs Visuais</option>
                            <option value="other">Outro</option>
                        </select>
                        <div>
                            <br />
                            <div><label htmlFor="Outro">Outro</label></div>
                            <input className={styles.other} type="text" placeholder='Texto' required />
                        </div>
                    </div>
                    <br />
                    <button type='Submit' className={styles.btn}>Enviar
                        
                    </button>
                </form>


            </section>
        </main>
    )
}

export default ReportBugs