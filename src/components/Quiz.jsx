import React from 'react';
import { getDocs , collection, addDoc , doc, deleteDoc } from 'firebase/firestore';
import { database } from "../config/firebase";
import { useEffect, useState } from 'react';


const Quiz = () => {
  const [questionList, setQuestionList] = useState([]);
  const [answer, setAnswer] = useState("");
  const questions = collection(database, 'QuestionAndAnswer');

  useEffect( () => {
    const getQuestions = async () => {

      try {
        const data = await getDocs(questions);
        const filteredData = data.docs.map( (doc) => {
          return {
            id: doc.id,
            ...doc.data()
          }
        })
        setQuestionList(filteredData);
      }catch(error){
        console.log(error);
      }
    }
    getQuestions();
  })

    const handleSubmit = async () => {
        try{
            await addDoc(questions, {
                question: questionList[0].question,
                answer: answer 
            })
        await deleteDoc(doc(database, "QuestionAndAnswer" , questionList[0].id));  
        }catch(error){
            console.log(error);
        }
    }


    return (
    <div>
        {questionList.map( (q) => (
          <div>
            <h3> {q.question} </h3>
            {
                q.answer 
                ? <p> {q.answer} </p> 
                :
                <div>
                    <textarea placeholder='Type your answer here' onChange={(e) => {setAnswer(e.target.value)}}></textarea>
                    <button onClick={handleSubmit}>Submit</button>
                </div>
            }
          </div> 
        ))}
    </div>
  )
}

export default Quiz
