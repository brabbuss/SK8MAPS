import "@testing-library/jest-dom";
import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import userEvent from "@testing-library/user-event";
import Map from "./Map";
import { tddMockData } from "../../../tddMockData";
import { MemoryRouter } from "react-router-dom";
jest.mock("./Map");

describe("Map", () => {
  it("renders a Map", async () => {
    render(
      <MemoryRouter>
        <Map
          markerLocations={tddMockData.mockAPIData}
          updateSelection={jest.fn}
          selectedSpot={tddMockData.mockSpotAllData}
          appView={"add-view"}
        />
      </MemoryRouter>
    );

    const map = await waitFor(() => screen.getByTestId("google-map"));
    expect(map).toBeInTheDocument();
  });

  it("renders sk8map markers", async () => {
    render(
      <MemoryRouter>
        <Map
          markerLocations={tddMockData.mockAPIData}
          updateSelection={jest.fn}
          selectedSpot={tddMockData.mockSpotAllData}
          appView={"add-view"}
        />
      </MemoryRouter>
    );

    await waitFor(() => screen.getByTestId("google-map"));

    const marker1 = await waitFor(() => screen.getByText("Mock Spot"));
    const marker2 = screen.getByText("Old church");
    const marker3 = screen.getByText("Secrest Park");
    const marker4 = screen.getByText("Big 25stair drop");

    expect(marker1).toBeInTheDocument();
    expect(marker2).toBeInTheDocument();
    expect(marker3).toBeInTheDocument();
    expect(marker4).toBeInTheDocument();
  });

  it("calls fxn w/correct params when clicking marker", async () => {
    const mockedUpdateSelection = jest.fn();

    render(
      <MemoryRouter>
        <Map
          markerLocations={tddMockData.mockAPIData}
          updateSelection={mockedUpdateSelection}
          selectedSpot={tddMockData.mockSpotAllData}
          appView={"add-view"}
        />
      </MemoryRouter>
    );

    await waitFor(() => screen.getByTestId("google-map"));

    const marker1 = await waitFor(() => screen.getByText("Mock Spot"));
    userEvent.click(marker1);

    expect(mockedUpdateSelection).toHaveBeenCalledTimes(1);
    expect(mockedUpdateSelection).toHaveBeenCalledWith(
      tddMockData.mockAPIData[0]
    );
  });
});
