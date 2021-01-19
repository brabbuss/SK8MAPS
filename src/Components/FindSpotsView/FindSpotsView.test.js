import React from "react";
import {
  render,
  screen,
  waitFor,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import FindSpotsView from "./FindSpotsView";
import "@testing-library/jest-dom";

describe("FindSpotsView", () => {
  it("Elements render properly", async () => {
    render(<FindSpotsView />);

    const findHeader = screen.getByRole("heading", { name: /find spots by:/i });
    const filter1 = screen.getByTestId("f-1");
    const filter2 = screen.getByTestId("f-2");
    const filter3 = screen.getByTestId("f-3");
    const filter4 = screen.getByTestId("f-4");
    const filter5 = screen.getByTestId("f-5");
    const filter6 = screen.getByTestId("f-6");
    const filter7 = screen.getByTestId("f-7");
    expect(findHeader).toBeInTheDocument();
    expect(filter1).toBeInTheDocument();
    expect(filter2).toBeInTheDocument();
    expect(filter3).toBeInTheDocument();
    expect(filter4).toBeInTheDocument();
    expect(filter5).toBeInTheDocument();
    expect(filter6).toBeInTheDocument();
    expect(filter7).toBeInTheDocument();
  });

  it("renders a loading message", async () => {
    render(<FindSpotsView />);

    const mapLoad = await waitFor(() =>
      screen.getByText("Now where did I put that map...")
    );
    expect(mapLoad).toBeInTheDocument();
  });
});
