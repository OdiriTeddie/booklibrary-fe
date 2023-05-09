import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import Book from "../components/Book";

const book = {
  id: 1,
  title: "The Great Gatsby",
  author: "F. Scott Fitzgerald",
  category: "Classic Literature",
  description: "A story about the Jazz Age and the American Dream",
};

test("renders book information and buttons", () => {
  const LoadBookDetail = jest.fn();
  const RemoveBook = jest.fn();
  const EditBook = jest.fn();
  render(
    <Book
      id={book.id}
      title={book.title}
      author={book.author}
      category={book.category}
      description={book.description}
      LoadBookDetail={LoadBookDetail}
      RemoveBook={RemoveBook}
      EditBook={EditBook}
    />
  );

  expect(screen.getByText(book.title)).toBeInTheDocument();
  expect(screen.getByText(book.author)).toBeInTheDocument();
  expect(screen.getByText(book.category)).toBeInTheDocument();
  expect(screen.getByText(book.description)).toBeInTheDocument();

  fireEvent.click(screen.getByText("Detail"));
  expect(LoadBookDetail).toHaveBeenCalledWith(book.id);

  fireEvent.click(screen.getByText("Delete"));
  expect(RemoveBook).toHaveBeenCalledWith(book.id);

  fireEvent.click(screen.getByText("Edit"));
  expect(EditBook).toHaveBeenCalledWith(book.id);

  expect(screen.getByRole("img")).toHaveAttribute("alt", "");
  expect(screen.getByRole("button", { name: "Detail" })).toBeInTheDocument();
  expect(screen.getByRole("button", { name: "Delete" })).toBeInTheDocument();
  expect(screen.getByRole("button", { name: "Edit" })).toBeInTheDocument();
});
