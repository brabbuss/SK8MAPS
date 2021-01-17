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
import AppContext from "../App/AppContext";
import { tddMockState, tddMockData } from "../../tddMockData";
import { MemoryRouter } from "react-router-dom";
import App from "../App/App";
import { saveToLocal, getFromLocal } from "../Common/Utilities/localStorage";
import { myReducer } from "../Common/Utilities/myReducer";
jest.mock("../Common/Utilities/myReducer")
jest.mock("../Common/Utilities/localStorage")

// const mockReducer = myReducer

beforeEach(() => {
  myReducer.mockResolvedValue(tddMockState)
  saveToLocal("SELECTED-SK8MAP", tddMockData.mockSpotAllData)
  saveToLocal("USER-SK8MAPS", tddMockData.mockAPIData)
  saveToLocal("ALL-SK8MAPS", tddMockData.mockAPIData)
  // myReducer.mockResolvedValue(tddMockState);  // )(*)(*)(*)
  // jest.resetModules();
  // initialize();
});

afterEach(cleanup);

describe("DetailsForm", () => {
  it("Elements render properly", async () => {
    render(
      <MemoryRouter initialEntries={["/add/details"]}>
        <AppContext.Provider value={[tddMockState, jest.fn()]}>
          <App>
            <DetailsForm />
          </App>
        </AppContext.Provider>
      </MemoryRouter>
    );

    const titleInput = screen.getByRole('textbox')
    expect(titleInput).toBeInTheDocument();
  });

  // it("spot details render properly", async () => {
  //   let match = {
  //     params: { spot_id: "3" },
  //   };

  //   render(
  //     <MemoryRouter initialEntries={["/spots/3"]}>
  //       <AppContext.Provider value={[tddMockState, jest.fn()]}>
  //         <App>
  //           <DetailsForm match={match} />
  //         </App>
  //       </AppContext.Provider>
  //     </MemoryRouter>
  //   );

  //   const description = screen.getByText("25 stair drop with good landing");
  //   const none = screen.getAllByRole("heading", { name: /❌/i });
  //   const title = screen.getByRole("heading", { name: /big 25 stair drop/i });
  //   const image = screen.getByRole("img", { name: /skating a curb/i });
  //   const stairsDescription = screen.getByText(
  //     "big 15 stairs with good runway"
  //   );

  //   expect(description).toBeInTheDocument();
  //   expect(none[0]).toBeInTheDocument();
  //   expect(title).toBeInTheDocument();
  //   expect(image).toBeInTheDocument();
  //   expect(stairsDescription).toBeInTheDocument();
  // });
});
