import { useState } from 'react'
import './App.css'
import { User } from './User'
import { Form } from './Form'
import { Posts } from './Posts'

function App() {
  const [message, setMessage] = useState("Bem vindo ao projeto!" )
 

  return (
    <div>

      <h1 className='titulo' data-testid='header'> Erick Albert</h1>
      <p>{message}</p>

      

      <button onClick={()=> setMessage("Estudando testes com reactJS")}>
        Alterar mensagem
      </button>
      <hr></hr><br/>

      <Form/><br/>
      <Posts/>
    </div>
  )
}

export default App
