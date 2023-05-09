import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Books from "../components/Books";

describe("Books component", () => {
  const bookData = {
    data: [
      {
        id: 1,
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        category: "Fiction",
        description: "A tale of love, greed, and betrayal.",
      },
      {
        id: 2,
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        category: "Fiction",
        description: "A story of racial injustice and the loss of innocence.",
      },
    ],
  };

  it("renders book data and Add New link", () => {
    const LoadBookDetail = jest.fn();
    const RemoveBook = jest.fn();
    const EditBook = jest.fn();

    render(
      <MemoryRouter>
        <Books
          bookData={bookData}
          LoadBookDetail={LoadBookDetail}
          RemoveBook={RemoveBook}
          EditBook={EditBook}
        />
      </MemoryRouter>
    );

    expect(screen.getByText("Add New")).toBeInTheDocument();

    expect(screen.getByText("The Great Gatsby")).toBeInTheDocument();
    expect(screen.getByText("F. Scott Fitzgerald")).toBeInTheDocument();
    expect(
      screen.getByText("A tale of love, greed, and betrayal.")
    ).toBeInTheDocument();

    expect(screen.getByText("To Kill a Mockingbird")).toBeInTheDocument();
    expect(screen.getByText("Harper Lee")).toBeInTheDocument();
    expect(
      screen.getByText("A story of racial injustice and the loss of innocence.")
    ).toBeInTheDocument();

    expect(LoadBookDetail).not.toHaveBeenCalled();
    expect(RemoveBook).not.toHaveBeenCalled();
    expect(EditBook).not.toHaveBeenCalled();
  });
});
