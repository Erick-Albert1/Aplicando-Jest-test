
import { useState } from "react";
import axios from "axios";

interface UsersProps{
    id: number;
    name: string;
    email: string;
    username: string;
}

export function Posts(){
    const [users, setUsers] = useState<UsersProps[]>([])

    async function handleGetUsers(){
        const response = await axios.get("https://jsonplaceholder.typicode.com/users")
        setUsers(response.data);
    }
    return(
        <div>
            <button onClick={handleGetUsers}>Buscar usuarios</button>

            {users.map((user)=>(
                <div key={user.id}>
                    <h2>{user.name}</h2>
                    <strong>{user.username}</strong>
                </div>

            ))}
        </div>
    )
}