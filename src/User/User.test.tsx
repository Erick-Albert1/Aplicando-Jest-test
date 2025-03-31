
import { fireEvent, render, screen } from "@testing-library/react"; 
import { User } from ".";


describe("User component",()=>{

    it("should check if the name is not displayerd when component is mounted",()=>{
        render(<User/>)

        const message = screen.queryByText("Usuário online: Erick Albert");


        expect(message).not.toBeInTheDocument();


    })

    it("should display the name after typing in the input and click on button",()=>{
        render(<User/>)

        const input = screen.getByPlaceholderText("Digite o nome")
        const button = screen.getByRole("button", { name: "Cadastrar"})

        fireEvent.change(input, {target: { value: "Erick Albert"}})
        fireEvent.click(button)

        const message = screen.getByText("Usuário online: Erick Albert")

        expect(message).toBeInTheDocument();
    })
})

export default {};