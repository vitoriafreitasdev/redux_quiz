
import "./Fim.css"
import { useDispatch, useSelector } from "react-redux"
import { type AppDispatch, type RootState } from "../redux/store.ts"
import { correctingAnswers } from "../redux/slices/quizSlice.ts"
import { useEffect } from "react"

const Fim = () => {
    const dispatch = useDispatch<AppDispatch>()  
    const correctAnswer = useSelector((state: RootState) => state.quiz.correctAnswer)
    const wrongAnswer = useSelector((state: RootState) => state.quiz.wrongAnswer)

   useEffect(() => {
    dispatch(correctingAnswers())
   }, [])

  return (
    <div className="results-container">
        <div>
          <h2>Acertos e Erros</h2>
          <p>Erradas: {wrongAnswer}</p>
          <p>Acertos: {correctAnswer}</p>
        </div>
    </div>
  )
}

export default Fim