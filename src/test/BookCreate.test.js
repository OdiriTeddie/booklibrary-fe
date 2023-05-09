import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import BookCreate from "../components/BookCreate";

describe("BookCreate component", () => {
  it("renders the form elements", () => {
    render(
      <MemoryRouter>
        <BookCreate />
      </MemoryRouter>
    );

    expect(screen.getByLabelText("ID")).toBeInTheDocument();
    expect(screen.getByLabelText("Title")).toBeInTheDocument();
    expect(screen.getByLabelText("Author")).toBeInTheDocument();
    expect(screen.getByLabelText("Category")).toBeInTheDocument();
    expect(screen.getByLabelText("Description")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Save" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Back" })).toBeInTheDocument();
  });

  it("submits the form", async () => {
    const mockFetch = jest.fn(() => Promise.resolve());
    global.fetch = mockFetch;

    render(
      <MemoryRouter>
        <BookCreate />
      </MemoryRouter>
    );

    fireEvent.change(screen.getByLabelText("Title"), {
      target: { value: "Test Book" },
    });
    fireEvent.change(screen.getByLabelText("Author"), {
      target: { value: "Test Author" },
    });
    fireEvent.change(screen.getByLabelText("Category"), {
      target: { value: "Test Category" },
    });
    fireEvent.change(screen.getByLabelText("Description"), {
      target: { value: "Test Description" },
    });
    fireEvent.submit(screen.getByTestId("form"));

    expect(mockFetch).toHaveBeenCalledTimes(1);
    expect(mockFetch).toHaveBeenCalledWith(
      "https://mi-linux.wlv.ac.uk/~2236664/crud-book-api/public/api/books",
      expect.objectContaining({
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          title: "Test Book",
          author: "Test Author",
          category: "Test Category",
          description: "Test Description",
        }),
      })
    );
  });
});
