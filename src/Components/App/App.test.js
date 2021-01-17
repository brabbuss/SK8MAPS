import React from "react";
import { BrowserRouter, MemoryRouter } from "react-router-dom";
import AppContext from "./AppContext";
import App from "./App";
import ReactDOM from 'react-dom';

import {
  render,
  screen,
  waitFor,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { tddMockData } from "../../tddMockData";
import { myReducer } from "../Common/Utilities/myReducer";
import { initialize } from "@googlemaps/jest-mocks";
import { getFromLocal, saveToLocal } from "../Common/Utilities/localStorage";
// jest.mock('../Common/Utilities/localStorage.js')
// jest.mock("../Common/Utilities/myReducer", () => ({ myReducer: jest.fn() })); //**&*(&) */

describe("App", () => {
  
  const tddMockDispatch = jest.fn();
  const tddMockState = {
    selectedSpot: tddMockData.mockSpotAllData,
    storedSpots: tddMockData.mockAPIData,
    appView: "find-spot",
    newSk8Map: tddMockData.mockNewSk8Map,
  };


  // jest.mock('../Common/Utilities/myReducer', () => {
  //   const reducer = require.myReducer('../Common/Utilities/myReducer')
  //   return {
  //      myReducer: (state, action) => {
  //       switch (action.type) {
  //         case "SYNC_DATA":
  //           const userMaps = getFromLocal("USER-SK8MAPS")
  //           const allMaps = getFromLocal("ALL-SK8MAPS")
  //           return { ...state, storedSpots: allMaps, userMaps: userMaps };
  //         case "UPDATE_SELECTED_SPOT":
  //           const selectedSpot = action.selectedSpot;
  //           saveToLocal("SELECTED-SK8MAP", selectedSpot);
  //           return { ...state, selectedSpot: selectedSpot };
  //         case "CHANGE_VIEW":
  //           const currentView = action.view;
  //           return { ...state, appView: currentView };
  //         case "ADD_CONFIRMATION_MARKER":
  //           const marker = action.marker;
  //           return { ...state, marker: marker };
  //         case "CREATE_SK8MAP":
  //           const newSk8Map = action.newSk8Map
  //           return { ...state, newSk8Map: newSk8Map };
  //         case "SAVE_NEW_SK8MAP":
  //           const newUserSk8Map = action.newSk8Map
  //           const updatedSk8Maps = [...state.storedSpots, newUserSk8Map]
  //           saveToLocal("ALL-SK8MAPS", updatedSk8Maps)
  //           saveToLocal("USER-SK8MAPS", updatedSk8Maps)
  //           return { ...state, storedSpots: updatedSk8Maps };
  //         default:
  //           return state;
  //       }
  //     }
  //   }
  // })

  beforeEach(() => {
    saveToLocal("SELECTED-SK8MAP", tddMockData.mockSpotAllData)
    saveToLocal("USER-SK8MAPS", tddMockData.mockAPIData)
    saveToLocal("ALL-SK8MAPS", tddMockData.mockAPIData)
    // myReducer.mockResolvedValue(tddMockState);  // )(*)(*)(*)
    // jest.resetModules();
    // initialize();
  });
  
  // const mockedAppContext = (context = tddMockState) => {
  
  //   // Will then mock the LocalizeContext module being used in our LanguageSelector component
  //   jest.doMock('./AppContext.js', () => {
  //     return {
  //       AppContext: {
  //         Consumer: (props) => props.children(context)
  //       }
  //     }
  //   });
    
  //   // you need to re-require after calling jest.doMock.
  //   // return the updated LanguageSelector module that now includes the mocked context
  //   // return require('./myReducer').myReducer;
  //   return require('./App').App;
  // };

  it("Renders home page", () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );

    const title = screen.getByRole("link", { name: /sk8maps logo/i });
    const landingMessage = screen.getByRole("heading", {
      name: /find some skate spots or add one/i,
    });
    const navSearchBtn = screen.getByRole("link", { name: /search/i });
    const navContributeBtn = screen.getByRole("link", { name: /contribute/i });

    expect(title).toBeInTheDocument();
    expect(landingMessage).toBeInTheDocument();
    expect(navSearchBtn).toBeInTheDocument();
    expect(navContributeBtn).toBeInTheDocument();
  });

  it("Navigates to search view", async () => {
    render(
      <MemoryRouter>
        <AppContext.Provider value={tddMockState}>
          <App />
        </AppContext.Provider>
      </MemoryRouter>
    );

    const navSearchBtn = screen.getByRole("link", { name: /search/i });
    userEvent.click(navSearchBtn);

    const findViewHeader = screen.getByRole("heading", {
      name: /find spots by:/i,
    });
    expect(findViewHeader).toBeInTheDocument();

  });

  it("Navigates to contribute view", async () => {
    render(
      <MemoryRouter>
        <AppContext.Provider value={tddMockState}>
          <App />
        </AppContext.Provider>
      </MemoryRouter>
    );

    const navContributeBtn = screen.getByRole("link", { name: /contribute/i });
    userEvent.click(navContributeBtn);

    const contributeHeader = screen.getByRole("heading", {
      name: /click to add a spot/i,
    });
    expect(contributeHeader).toBeInTheDocument();

    // const googleMap = await waitFor(() => screen.getByTestId("google-map"));
    // expect(googleMap).toBeInTheDocument();
    // const loading = screen.getByText("Now where did I put that map...")
    // const googleMap = await waitFor(() => screen.getByTestId("google-map"));
    // await waitForElementToBeRemoved(loading)
  });

  it("Navigates to a specific spot by url", async () => {
    render(
      // <BrowserRouter initialEntries={["/spot/1"]}>
      <BrowserRouter >
        {/* <AppContext.Provider value={tddMockState}> */}
          <App />
        {/* </AppContext.Provider> */}
      </BrowserRouter>
    );
    const navContributeBtn = screen.getByRole("link", { name: /contribute/i });
    userEvent.click(navContributeBtn);
    const loading = screen.getByText("Now where did I put that map...")
    await waitForElementToBeRemoved(loading)
    const googleMap = await waitFor(() => screen.getByTestId("google-map"));

    screen.debug()
  });
});