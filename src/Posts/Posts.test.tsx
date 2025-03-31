import { screen, render, fireEvent } from "@testing-library/react";
import { Posts } from ".";
import { http } from 'msw';
import { setupServer, SetupServer} from 'msw/node'


describe("Post component",()=>{

    const worker = setupServer(
        http.get("https://jsonplaceholder.typicode.com/users", (req, res, ctx)=>{
            return res(
                ctx.status(200),
                ctx.json([
                    {
                        "id": 1,
                        "name": "Leanne Graham",
                        "username": "Bret",
                        "email": "Sincere@april.biz",
                        "address": {
                        "street": "Kulas Light",
                        "suite": "Apt. 556",
                        "city": "Gwenborough",
                        "zipcode": "92998-3874",
                        "geo": {
                        "lat": "-37.3159",
                        "lng": "81.1496"
                        }
                        },
                        "phone": "1-770-736-8031 x56442",
                        "website": "hildegard.org",
                        "company": {
                        "name": "Romaguera-Crona",
                        "catchPhrase": "Multi-layered client-server neural-net",
                        "bs": "harness real-time e-markets"
                        }
                        },
                ])
            )
        })
    )

    beforeAll(()=>worker.listen())
    afterAll( ()=> worker.resetHandlers())
    afterAll( ()=> worker.close())
    it("should fetch api and show users", async()=>{
        render(<Posts/>)

        const buttonElement = screen.getByText("Buscar usuarios")
        fireEvent.click(buttonElement);

        const nameUser = await screen.findByText("Leanne Graham")
        expect(nameUser).toBeInTheDocument();
    })
})