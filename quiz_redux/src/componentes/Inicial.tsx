
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
      <div className="imagem"></div>
      <div className="conteudo">
        <h2>Quiz de JavaScript/React JS</h2>
        <button onClick={iniciarJogo} className="buttonIniciar">INICIAR QUIZ</button>
      </div>
      
    </div>
  )
}

export default Inicial