import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect'
import userEvent from "@testing-library/user-event";
import Map from "./Map";
import AppContext from '../../App/AppContext'
import {tddMockData} from '../../../tddMockData'
import createGoogleMapsMock from 'jest-google-maps-mock';

describe("Map", () => {
  let googleMaps;

  beforeEach(() => {
    googleMaps = createGoogleMapsMock();
  });

  const customRender = (component, { providerProps, ...renderOptions }) => {
    return render(
      <AppContext.Provider {...providerProps}>
        {component}
      </AppContext.Provider>,
      renderOptions
    )
  }  

  it("renders a Map", () => {
    
    const providerProps = {
      state: {appView: "find-spot",
      storedSpots: [tddMockData.mockSpotAllData]}
    }

    // customRender(<Map />, {providerProps})
    const wrapper = ({children}) => (
      <AppContext.Provider value={providerProps}>
        {children}
      </AppContext.Provider>
    )

    render(<Map />, {wrapper})


    const map = screen.getByTestId('google-map')

    expect(map).toBeInTheDocument();
  });
    
});
