
import { useState, FormEvent } from "react";

export function Form(){
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")

    function handleSubmit(e: FormEvent ){
        e.preventDefault();

        console.log("Cadastrado com sucesso!")
        setName("")
        setEmail("")
    }
    return(
        <div>
            <form onSubmit={handleSubmit}>

                <label>Digite seu Nome</label>
                <input
                type="text"
                placeholder="Digite seu nome"
                value={name}
                onChange={(e)=> setName(e.target.value)}
                ></input>

                <label>Digite seu email</label>
                <input
                type="text"
                placeholder="Digite seu email"
                value={email}
                onChange={(e)=> setEmail(e.target.value)}
                ></input>

                <button type="submit">Cadastrar</button>
            </form>
        </div>
    )
}