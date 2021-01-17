import React from "react";
import { render, screen, waitFor, waitForElementToBeRemoved } from "@testing-library/react";
import AddSpotView from "./AddSpotView";
import "@testing-library/jest-dom";
// import { MemoryRouter } from "react-router-dom";
import AppContext from "../App/AppContext";
import { tddMockState } from "../../tddMockData";
// import { myReducer } from "../Common/Utilities/myReducer";


// jest.mock("../Common/Utilities/myReducer", () => ({ myReducer: jest.fn() })); //**&*(&) */
// myReducer.mockResolvedValue(tddMockState);  // )(*)(*)(*)

describe("AddSpotView", () => {
  it("Elements render properly", async () => {
    render(
      <AppContext.Provider value={[tddMockState, jest.fn()]}>
        <div>
          <AddSpotView />
        </div>
      </AppContext.Provider>
    );

    const contributeHeader = screen.getByRole("heading", {
      name: /click to add a spot/i,
    });
    expect(contributeHeader).toBeInTheDocument();
    screen.debug()
  });

  it("renders a loading message", async () => {
    render(
      <AppContext.Provider value={[tddMockState, jest.fn()]}>
        <div>
          <AddSpotView />
        </div>
      </AppContext.Provider>
    );

    const mapLoad = await waitFor(() => screen.getByText('Now where did I put that map...'));
    expect(mapLoad).toBeInTheDocument();
  });
});
