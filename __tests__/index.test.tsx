import { render, screen } from '@testing-library/react'
import Home from '@/pages/index'

describe('Home', () => {
  it("renders button correctly", ()=>{
    const {getByTestId} = render(<Home />)

    const img = screen.getByRole("img");

    expect(img).toBeInTheDocument();
    expect(getByTestId(/text/i).textContent).toBe("Create a New Diagram");
  })

  it("renders footer", ()=>{
    render(<Home />)

    const footer = screen.getByTestId("footer");

    expect(footer).toBeInTheDocument();
    expect(footer.textContent).toBe("Michał Warchoł © "+new Date().getFullYear()+". All rights reserved.");
  })
})
