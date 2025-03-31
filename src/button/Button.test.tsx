import { render, screen, fireEvent } from "@testing-library/react"
import { Button } from "."

describe("Button component", ()=>{
    it("should call onClick prop on click", ()=>{

        const onClick = jest.fn();

        render(<Button onClick={ onClick } disabled={true}>Meu botao</Button>)
        const button = screen.getByText("Meu botao");
        fireEvent.click(button);
        expect(onClick).toHaveBeenCalled();
    })
  //deve renderizar a cor gray se desabilitado(false)
  // usando os nossos MATCHES das bibliotecas de teste.
    it("should render with gray background if disabled", ()=>{
        render(<Button onClick={()=>{}} disabled={true}>Meu botao</Button>)
        const button = screen.getByRole("button", {name: "Meu botao"})
        expect(button).toHaveStyle({ backgroundColor:"#fafafa"})
    })
})

export default {}