import React from "react";
import {
  render,
  screen,
  waitFor,
  waitForElementToBeRemoved,
  cleanup,
} from "@testing-library/react";
import SpotDetails from "./SpotDetails";
import "@testing-library/jest-dom";
import AppContext from "../App/AppContext";
import { tddMockState, tddMockData } from "../../tddMockData";
import { MemoryRouter } from "react-router-dom";
import App from "../App/App";
import { saveToLocal, getFromLocal } from "../Common/Utilities/localStorage";
import { myReducer } from "../Common/Utilities/myReducer";
// jest.mock('../Common/Utilities/localStorage')
// jest.mock('../Common/Utilities/myReducer.js')
// myReducer.mockResolvedValue(tddMockState)

// beforeEach(() => {
//   saveToLocal("SELECTED-SK8MAP", tddMockData.mockSpotAllData)
//   saveToLocal("USER-SK8MAPS", tddMockData.mockAPIData)
//   saveToLocal("ALL-SK8MAPS", tddMockData.mockAPIData)
//   // getFromLocal.mockResolvedValue(tddMockState)
//   // myReducer.mockResolvedValue(tddMockState);  // )(*)(*)(*)
//   // jest.resetModules();
//   // initialize();
// });

afterEach(cleanup);

describe("SpotDetails", () => {
  it("Elements render properly", async () => {
    let match = {
      params: { spot_id: "3" },
    };

    render(
      <MemoryRouter initialEntries={["/spots/3"]}>
        <AppContext.Provider value={[tddMockState, jest.fn()]}>
          <App>
            <SpotDetails match={match} />
          </App>
        </AppContext.Provider>
      </MemoryRouter>
    );

    const curbs = screen.getByRole("heading", { name: /curbs/i });
    const flats = screen.getByRole("heading", { name: /flats/i });
    const rails = screen.getByRole("heading", { name: /rails/i });
    const stairs = screen.getByRole("heading", { name: /stairs/i });

    expect(curbs).toBeInTheDocument();
    expect(flats).toBeInTheDocument();
    expect(rails).toBeInTheDocument();
    expect(stairs).toBeInTheDocument();
  });

  it("spot details render properly", async () => {
    let match = {
      params: { spot_id: "3" },
    };

    render(
      <MemoryRouter initialEntries={["/spots/3"]}>
        <AppContext.Provider value={[tddMockState, jest.fn()]}>
          <App>
            <SpotDetails match={match} />
          </App>
        </AppContext.Provider>
      </MemoryRouter>
    );

    const description = screen.getByText("25 stair drop with good landing");
    const none = screen.getAllByRole("heading", { name: /❌/i });
    const title = screen.getByRole("heading", { name: /big 25 stair drop/i });
    const image = screen.getByRole("img", { name: /skating a curb/i });
    const stairsDescription = screen.getByText(
      "big 15 stairs with good runway"
    );

    expect(description).toBeInTheDocument();
    expect(none[0]).toBeInTheDocument();
    expect(title).toBeInTheDocument();
    expect(image).toBeInTheDocument();
    expect(stairsDescription).toBeInTheDocument();
  });
});
