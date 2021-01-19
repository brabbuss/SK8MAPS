import React from "react";
import {
  render,
  screen,
  waitFor,
  waitForElementToBeRemoved,
  cleanup,
} from "@testing-library/react";
import DetailsForm from "./DetailsForm";
import "@testing-library/jest-dom";
import { tddMockData } from "../../tddMockData";
import { MemoryRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";

afterEach(cleanup);

describe("DetailsForm", () => {
  const {mockNewSk8Map} = tddMockData

  it("Elements render properly", async () => {
    render(
      <MemoryRouter initialEntries={["/add/details"]}>
        <DetailsForm
          newSk8Map={mockNewSk8Map}
          saveNewSk8Map={jest.fn}
        />
      </MemoryRouter>
    );

    const curbs = screen.getByRole("heading", { name: /curbs/i });
    const flats = screen.getByRole("heading", { name: /flats/i });
    const rails = screen.getByRole("heading", { name: /rails/i });
    const stairs = screen.getByRole("heading", { name: /stairs/i });
    const inputs = screen.getAllByRole('textbox')
    const button = screen.getByRole('button', { name: /submit/i })

    expect(curbs).toBeInTheDocument();
    expect(flats).toBeInTheDocument();
    expect(rails).toBeInTheDocument();
    expect(stairs).toBeInTheDocument();
    expect(inputs.length).toBe(7);
    expect(button).toBeInTheDocument()
  });

  it("Renders user input", async () => {
    render(
      <MemoryRouter initialEntries={["/add/details"]}>
        <DetailsForm
          newSk8Map={mockNewSk8Map}
          saveNewSk8Map={jest.fn}
        />
      </MemoryRouter>
    );

    const inputs = screen.getAllByRole('textbox')

    userEvent.type(inputs[0], 'Rad Spot')
    userEvent.type(inputs[1], 'Rad Spot details')
    userEvent.type(inputs[2], 'http://someimagelink.com')
    userEvent.type(inputs[3], 'very curby')
    userEvent.type(inputs[4], 'very flatty')
    userEvent.type(inputs[5], 'very raily')
    userEvent.type(inputs[6], 'very stairsy')
    
    expect(inputs[0]).toHaveValue('Rad Spot')
    expect(inputs[1]).toHaveValue('Rad Spot details')
    expect(inputs[2]).toHaveValue('http://someimagelink.com')
    expect(inputs[3]).toHaveValue('very curby')
    expect(inputs[4]).toHaveValue('very flatty')
    expect(inputs[5]).toHaveValue('very raily')
    expect(inputs[6]).toHaveValue('very stairsy')
  });

  it("Calls fxn to add new spot w/correct params", async () => {
    const mockSaveNewSk8Map = jest.fn()
    
    render(
      <MemoryRouter initialEntries={["/add/details"]}>
        <DetailsForm
          newSk8Map={mockNewSk8Map}
          saveNewSk8Map={mockSaveNewSk8Map}
        />
      </MemoryRouter>
    );

    const inputs = screen.getAllByRole('textbox')
    const button = screen.getByRole('button', { name: /submit/i })

    userEvent.type(inputs[0], 'Rad Spot')
    userEvent.type(inputs[1], 'Rad Spot details')
    userEvent.type(inputs[2], 'http://someimagelink.com')
    userEvent.type(inputs[3], 'very curby')
    userEvent.type(inputs[4], 'very flatty')
    userEvent.type(inputs[5], 'very raily')
    userEvent.type(inputs[6], 'very stairsy')
    
    userEvent.click(button)

    expect(mockSaveNewSk8Map).toHaveBeenCalledTimes(1)
    expect(mockSaveNewSk8Map).toHaveBeenCalledWith({"description": "Rad Spot details", "difficulty": 0, "features": [{"condition": 5, "description": "very curby", "has": true, "type": "Curbs"}, {"condition": 3, "description": "very flatty", "has": true, "type": "Flats"}, {"condition": 3, "description": "very raily", "has": true, "type": "Rails"}, {"condition": 5, "description": "very stairsy", "has": true, "type": "Stairs"}], "id": 12345, "images": ["http://someimagelink.com"], "location": {"lat": 33, "lng": 33}, "safety": {"hazards": "some big cracks", "public": false, "security": {"cheese_level": 1, "description": "guards were chill", "has": true}}, "title": "Rad Spot"})
  });
  
});
