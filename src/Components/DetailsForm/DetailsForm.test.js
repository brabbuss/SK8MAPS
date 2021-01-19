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

    const inputs = screen.getAllByRole('textbox')
    expect(inputs.length).toBe(7);
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
