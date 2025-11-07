
import "./Inicial.css"

import {  useDispatch } from "react-redux"
import { type AppDispatch } from "../redux/store.ts"
import { startGame } from "../redux/slices/quizSlice.ts"

const Inicial = () => {
  const dispatch = useDispatch<AppDispatch>()

  const iniciarJogo = () => {
    dispatch(startGame())
  }
  return (
    <div className="inicial">
      <h2>Quiz de JavaScript/React JS</h2>
      <button onClick={iniciarJogo} className="buttonIniciar">INICIAR QUIZ</button>
    </div>
  )
}

export default Inicial