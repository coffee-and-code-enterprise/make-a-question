import styles from './ReportBugs.module.css'

function ReportBugs() {
    return (
        <main className={styles.hero}>
            <section className={styles.heroContent}>
                <h1 className={styles.heroTitle}>Relatar problema</h1>
                <p className={styles.heroPa}>Encontrou um problema? Relate!</p>
            </section>
            <section className={styles.formSection}>
                <h2>Nome</h2>
                <h2>Email</h2>
                <h2>Problema</h2>
                <h2>Outro</h2>

            </section>
        </main>
    )
}

export default ReportBugs