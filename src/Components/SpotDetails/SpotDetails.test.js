import React from "react";
import {
  render,
  screen,
  waitFor,
  cleanup,
} from "@testing-library/react";
import SpotDetails from "./SpotDetails";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";
import {tddMockData} from '../../tddMockData'

afterEach(cleanup);

describe("SpotDetails", () => {
  it("Elements render properly", async () => {
    
    let match = {
      params: { spot_id: "33" },
    };

    render(
      <MemoryRouter initialEntries={["/spots/33"]}>
        <SpotDetails 
          matchedMap={tddMockData.mockSpotAllData}
          setMatchedMap={jest.fn()}
          allSk8Maps={tddMockData.mockAPIData}
          match={match} />
      </MemoryRouter>
    );
    
    const features = screen.getByRole('heading', { name: /features/i })
    const curbs = screen.getByRole("heading", { name: /curbs/i });
    const flats = screen.getByRole("heading", { name: /flats/i });
    const rails = screen.getByRole("heading", { name: /rails/i });
    const stairs = screen.getByRole("heading", { name: /stairs/i });

    expect(features).toBeInTheDocument();
    expect(curbs).toBeInTheDocument();
    expect(flats).toBeInTheDocument();
    expect(rails).toBeInTheDocument();
    expect(stairs).toBeInTheDocument();
  });

  it("SK8MAP details render properly", async () => {
    let match = {
      params: { spot_id: "33" },
    };

    render(
      <MemoryRouter initialEntries={["/spots/33"]}>
        <SpotDetails 
          matchedMap={tddMockData.mockSpotAllData}
          setMatchedMap={jest.fn()}
          allSk8Maps={tddMockData.mockAPIData}
          match={match} 
        />        
      </MemoryRouter>
    );

    const title = screen.getByText("Mock Spot");
    const description = screen.getByText("Mock description");
    const has = screen.getAllByRole('heading', { name: /✅/i })
    const none = screen.getByRole("heading", { name: /❌/i });
    const image = screen.getByRole("img", { name: /skating a curb/i });
    
    const curbsDescription = screen.getByText("Mock description Curbs");
    const flatsDescription = screen.getByText("Mock description Flats");
    const railsDescription = screen.getByText("Mock description Rails");

    expect(description).toBeInTheDocument();
    expect(none).toBeInTheDocument();
    expect(has[0]).toBeInTheDocument();
    expect(title).toBeInTheDocument();
    expect(image).toBeInTheDocument();
    expect(curbsDescription).toBeInTheDocument();
    expect(flatsDescription).toBeInTheDocument();
    expect(railsDescription).toBeInTheDocument();
  });

  it("should make sure that URL endpoint matches w/fxn call with correct params", async () => {
    let props = {
      match: {  
        params: { spot_id: "33" },
      }
    };

    const mockSetMatchedMap = jest.fn()

    render(
      <MemoryRouter initialEntries={["/spots/33"]}>
        <SpotDetails 
          matchedMap={tddMockData.mockSpotMissingData}
          setMatchedMap={mockSetMatchedMap}
          allSk8Maps={tddMockData.mockAPIData}
          {...props}
        />        
      </MemoryRouter>
    );
    await waitFor(() => screen.getByRole('heading', { name: /curbs/i }))
    expect(mockSetMatchedMap).toHaveBeenCalledTimes(1)
    expect(mockSetMatchedMap).toHaveBeenCalledWith(tddMockData.mockAPIData[0])
  });
});
