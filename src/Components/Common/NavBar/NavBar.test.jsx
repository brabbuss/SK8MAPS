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

    const navHome = screen.getByRole("link", { name: /home/i });
    const navFav = screen.getByRole("link", { name: /favorites/i });
    const heading = screen.getByRole("heading", { name: /moodytunes/i });

    expect(heading).toBeInTheDocument();
    expect(navHome).toBeInTheDocument();
    expect(navFav).toBeInTheDocument();
  });
});
