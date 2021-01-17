import React from "react";
import { render, screen, waitFor, waitForElementToBeRemoved } from "@testing-library/react";
import FindSpotsView from "./FindSpotsView";
import "@testing-library/jest-dom";
import AppContext from "../App/AppContext";
import { tddMockState } from "../../tddMockData";

describe("FindSpotsView", () => {
  it("Elements render properly", async () => {
    render(
      <AppContext.Provider value={[tddMockState, jest.fn()]}>
        <div>
          <FindSpotsView />
        </div>
      </AppContext.Provider>
    );

    const findHeader = screen.getByRole('heading', { name: /find spots by:/i })
    const searchOption1 = screen.getByTestId('f-1')
    const searchOption2 = screen.getByTestId('f-2')
    const searchOption3 = screen.getByTestId('f-3')
    const searchOption4 = screen.getByTestId('f-4')
    const searchOption5 = screen.getByTestId('f-5')
    const searchOption6 = screen.getByTestId('f-6')
    expect(findHeader).toBeInTheDocument();
    expect(searchOption1).toBeInTheDocument();
    expect(searchOption2).toBeInTheDocument();
    expect(searchOption3).toBeInTheDocument();
    expect(searchOption4).toBeInTheDocument();
    expect(searchOption5).toBeInTheDocument();
    expect(searchOption6).toBeInTheDocument();
  });

  it("renders a loading message", async () => {
    render(
      <AppContext.Provider value={[tddMockState, jest.fn()]}>
        <div>
          <FindSpotsView />
        </div>
      </AppContext.Provider>
    );

    const mapLoad = await waitFor(() => screen.getByText('Now where did I put that map...'));
    expect(mapLoad).toBeInTheDocument();
  });
});