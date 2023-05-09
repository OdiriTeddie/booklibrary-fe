import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import BookDetail from "../components/BookDetail";

describe("BookDetail component", () => {
  beforeEach(() => {
    jest.spyOn(global, "fetch").mockResolvedValueOnce({
      json: async () => ({
        data: {
          title: "The Great Gatsby",
          author: "F. Scott Fitzgerald",
          category: "Fiction",
          description: "A tale of love, greed, and betrayal.",
        },
      }),
    });
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("renders book details", async () => {
    render(
      <MemoryRouter initialEntries={[`/books/1`]}>
        <Routes>
          <Route path="/books/:bookid" Component={BookDetail} />
        </Routes>
      </MemoryRouter>
    );

    await screen.findByText("The Great Gatsby");
    expect(screen.getByText("F. Scott Fitzgerald")).toBeInTheDocument();
    expect(screen.getByText("Fiction")).toBeInTheDocument();
    expect(
      screen.getByText("A tale of love, greed, and betrayal.")
    ).toBeInTheDocument();
  });

  it("renders a link back to the book list", async () => {
    render(
      <MemoryRouter initialEntries={[`/books/1`]}>
        <Routes>
          <Route path="/books/:bookid" Component={BookDetail} />
        </Routes>
      </MemoryRouter>
    );

    const linkElement = screen.getByRole("link", { name: /back to listing/i });
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute("href", "/");
  });

  it("fetches book data from API", async () => {
    render(
      <MemoryRouter initialEntries={[`/books/1`]}>
        <Routes>
          <Route path="/books/:bookid" Component={BookDetail} />
        </Routes>
      </MemoryRouter>
    );

    expect(global.fetch).toHaveBeenCalledTimes(1);
    expect(global.fetch).toHaveBeenCalledWith(
      "https://mi-linux.wlv.ac.uk/~2236664/crud-book-api/public/api/books/1"
    );
  });

  it("handles API error gracefully", async () => {
    jest.spyOn(console, "log").mockImplementationOnce(() => {});

    jest.spyOn(global, "fetch").mockRejectedValueOnce(new Error("API error"));

    render(
      <MemoryRouter initialEntries={[`/books/1`]}>
        <Routes>
          <Route path="/books/:bookid" Component={BookDetail} />
        </Routes>
      </MemoryRouter>
    );

    expect(global.fetch).toHaveBeenCalledTimes(1);
    expect(screen.queryByText("The Great Gatsby")).not.toBeInTheDocument();
  });
});
