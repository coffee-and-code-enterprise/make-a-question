// Dependencies
import { useNavigate } from "react-router-dom";

// Stylesheets
import styles from "./QuestionButtons.module.css";

// Componente dos botões
function QuestionButtons() {
  const navigate = useNavigate();

  function handleMakeQuestion(anonymous = false) {
    if (anonymous) {
      alert('WIP')
    } else {
      navigate("/make-a-question");
    }
  }

  function handleAnswer(anonymous = false) {
    if (anonymous) {
      alert('WIP')
    } else {
      navigate("/answers");
    }
  }

  return (
    <div className={styles.btnsContainer}>
      <button className={styles.questionBtn} onClick={() => handleMakeQuestion()}>Fazer uma pergunta</button>
      <button className={styles.questionBtn} onClick={() => handleMakeQuestion(true)}>Fazer uma pergunta anônima</button>
      <button className={styles.questionBtn} onClick={() => handleAnswer()}>Responder uma pergunta</button>
      <button className={styles.questionBtn} onClick={() => handleAnswer(true)}>Responder uma pergunta anônima</button>
    </div>
  )
}

export default QuestionButtons;
