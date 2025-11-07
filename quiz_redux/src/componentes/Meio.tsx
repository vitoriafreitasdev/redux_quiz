/* eslint-disable @typescript-eslint/no-unused-vars */
import { useDispatch, useSelector } from "react-redux"
import { type AppDispatch, type RootState } from "../redux/store.ts"

const Meio = () => {
  const dispatch = useDispatch<AppDispatch>()  
  const questions = useSelector((state: RootState) => state.quiz.questions)

  console.log(questions)
  return (
    <div>
      {questions.map((question, questionIndex) => (
        <div key={questionIndex}>
          <h2>{question.question}</h2>
          <div>
            {question.options.map((option, optionIndex) => (
              <div key={optionIndex}>
                <input 
                  type="radio" 
                  name={`${questionIndex}`} 
                  id={`${questionIndex}${optionIndex}`}
                  value={option}
                />
                <label htmlFor={`${questionIndex}${optionIndex}`}>
                  {option}
                </label>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export default Meio