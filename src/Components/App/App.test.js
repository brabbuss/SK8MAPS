import React from "react";
import { MemoryRouter } from "react-router-dom";
import App from "./App";
import {
  render,
  screen,
  waitFor,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { tddMockData } from "../../tddMockData";
import createGoogleMapsMock from 'jest-google-maps-mock';
jest.mock('../Common/Map/Map')

describe("App", () => {
  const {mockSpotAllData, mockAPIData, mockNewSk8Map} = tddMockData

  beforeEach(() => {
    localStorage.setItem('USER-SK8MAPS', JSON.stringify(mockAPIData))
    localStorage.setItem('SELECTED-SK8MAP', JSON.stringify(mockSpotAllData))
    localStorage.setItem('ALL-SK8MAPS', JSON.stringify(mockAPIData))
  });
  
  it("Renders home page", () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );

    
    const title = screen.getByRole('heading', { name: /welcome to sk8maps !/i })
    const welcomeCopy1 = screen.getByText('click to find some spots')
    const welcomeCopy2 = screen.getByText('click to add a new spot')
    const navSearchBtn = screen.getAllByRole("link", { name: /search/i });
    const navContributeBtn = screen.getAllByRole("link", { name: /contribute/i });

    expect(title).toBeInTheDocument();
    expect(welcomeCopy1).toBeInTheDocument();
    expect(welcomeCopy2).toBeInTheDocument();
    expect(navSearchBtn[0]).toBeInTheDocument();
    expect(navContributeBtn[0]).toBeInTheDocument();
  });

  it("Navigates to search view", async () => {
    render(
      <MemoryRouter>
          <App />
      </MemoryRouter>
    );

    const navSearchBtn = screen.getAllByRole("link", { name: /search/i });
    userEvent.click(navSearchBtn[0])

    const findViewHeader = screen.getByRole("heading", {name: /find spots by:/i });
    expect(findViewHeader).toBeInTheDocument();

  });

  it("Navigates to Add Sk8Map view", async () => {
    render(
      <MemoryRouter>
          <App />
      </MemoryRouter>
    );

    const navAddSk8MapBtn = screen.getAllByRole("link", { name: /add a sk8map/i });    
    userEvent.click(navAddSk8MapBtn[0])

    const addSk8MapHeader = screen.getByRole('heading', { name: /click the map to add a new sk8map/i })
    expect(addSk8MapHeader).toBeInTheDocument();

  });

  it("Navigates to a specific spot by url", async () => {
    render(
      <MemoryRouter initialEntries={["/spots/1"]}>
        <App />
      </MemoryRouter>
    );
  
    const spotDetailTitle = await waitFor(() => screen.getByRole('heading', { name: /old church/i }))
    const description1 = screen.getByText('some wax, recently poured')
    const mainDescription = screen.getByText('some description,some fine cracks, small pebbles can kill,stairs front of school good lan')
    
    expect(spotDetailTitle).toBeInTheDocument()
    expect(description1).toBeInTheDocument()
    expect(mainDescription).toBeInTheDocument()
  });
  
  it("shows helpful redirect text at invalid endoint", async () => {
    render(
      <MemoryRouter initialEntries={["/spots/0000"]}>
        <App />
      </MemoryRouter>
    );
  
    const redirectText1 = await waitFor(() => screen.getByRole('heading', { name: /looks like that's not a valid url/i }))
    const redirectText2 = screen.getByRole('heading', { name: /try double checking that the url is correct,/i })
    const redirectText3 = screen.getByRole('heading', { name: /or head over to the/i })
    
    expect(redirectText1).toBeInTheDocument()
    expect(redirectText2).toBeInTheDocument()
    expect(redirectText3).toBeInTheDocument()

  });
  
  it("be able to open a saved map", async () => {
    
    render(
      <MemoryRouter initialEntries={["/search"]}>
        <App />
      </MemoryRouter>
    );
  
    const googleMap = await waitFor(() => screen.getByTestId("google-map"));
    expect(googleMap).toBeInTheDocument();
    
    const markerTitle = screen.getByRole('link', { name: /old church/i })
    expect(markerTitle).toBeInTheDocument();
    userEvent.click(markerTitle)

    const spotDetailTitle = await waitFor(() => screen.getByRole('heading', { name: /old church/i }))
    const mainDescription = screen.getByText('some description,some fine cracks, small pebbles can kill,stairs front of school good lan')
    expect(spotDetailTitle).toBeInTheDocument()
    expect(mainDescription).toBeInTheDocument()
  });

  it("be able to create a new map", async () => {
    
    render(
      <MemoryRouter initialEntries={["/add"]}>
        <App />
      </MemoryRouter>
    );
  
    const googleMap = await waitFor(() => screen.getByTestId("google-map"));
    expect(googleMap).toBeInTheDocument();
    userEvent.click(googleMap)
    
    const confirmMarker = await waitFor(() => screen.getByRole('button', { name: /confirm placement/i }));
    expect(confirmMarker).toBeInTheDocument();
    userEvent.click(confirmMarker)

    const feature1 = await waitFor(() => screen.getByRole('heading', { name: /curbs/i }))
    const feature2 = screen.getByRole('heading', { name: /flats/i })
    const feature3 = screen.getByRole('heading', { name: /rails/i })
    const feature4 = screen.getByRole('heading', { name: /stairs/i })

    expect(feature1).toBeInTheDocument()
    expect(feature2).toBeInTheDocument()
    expect(feature3).toBeInTheDocument()
    expect(feature4).toBeInTheDocument()
  });

  it("Redirect to home if navigating directly to add a spot", async () => {
    render(
      <MemoryRouter initialEntries={["/add/details"]}>
        <App />
      </MemoryRouter>
    );
  
    const title = screen.getByRole('heading', { name: /welcome to sk8maps !/i })
    const welcomeCopy1 = screen.getByText('click to find some spots')
    const welcomeCopy2 = screen.getByText('click to add a new spot')

    expect(title).toBeInTheDocument();
    expect(welcomeCopy1).toBeInTheDocument();
    expect(welcomeCopy2).toBeInTheDocument();
  });
});




// const loading = screen.getByText("Now where did I put that map...")
// await waitForElementToBeRemoved(loading)
// const googleMap = await waitFor(() => screen.getByTestId("google-map"));
// const googleMap = await waitFor(() => screen.getByTestId("google-map"));
// expect(googleMap).toBeInTheDocument();
// const loading = screen.getByText("Now where did I put that map...")
// const googleMap = await waitFor(() => screen.getByTestId("google-map"));
// await waitForElementToBeRemoved(loading)

// screen.debug()