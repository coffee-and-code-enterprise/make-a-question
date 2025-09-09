import styles from './Introduction.module.css';

// Criando o componente da Introdução:
function Introduction() {
    return (
        <main>
            <section>
                <div>
                    <h1>MakeAQuestion</h1>
                    <h4>A dúvida é o motor do conhecimento. Faça uma pergunta!</h4>
                </div>

                <div>
                    <button>Entrar</button>
                    <p>▼</p>
                </div>
            </section>
        </main>
    )
}   

export default Introduction;