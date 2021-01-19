import React from "react";
import { render, screen, waitFor, waitForElementToBeRemoved } from "@testing-library/react";
import AddSpotView from "./AddSpotView";
import "@testing-library/jest-dom";

describe("AddSpotView", () => {
  it("Elements render properly", async () => {
    render(
      <AddSpotView />
    );

    const addASpotText = screen.getByRole('heading', { name: /click the map to add a new sk8map/i })
    expect(addASpotText).toBeInTheDocument();
  });

  it("renders a loading message", async () => {
    render(
      <AddSpotView />
    );

    const mapLoad = await waitFor(() => screen.getByText('Now where did I put that map...'));
    expect(mapLoad).toBeInTheDocument();
  });
});
