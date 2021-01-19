import { render, screen } from "@testing-library/react";
import NavBar from "./NavBar";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";

describe("NavBar", () => {
  it("should render with buttons and heading", () => {
    render(
      <MemoryRouter>
        <NavBar />
      </MemoryRouter>
    );

    const contribute = screen.getByRole("link", { name: /contribute/i });
    const search = screen.getByRole('link', { name: /search/i })
    const heading = screen.getByRole('link', { name: /sk8maps/i })

    expect(heading).toBeInTheDocument();
    expect(contribute).toBeInTheDocument();
    expect(search).toBeInTheDocument();
  });
});
