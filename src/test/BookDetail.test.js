import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import BookDetail from "../components/BookDetail";

const bookDetailProps = {
  title: "Deep Focus",
  author: "Carl Newport",
  category: "Self Development",
  description:
    "Deep work is the ability to focus without distraction on a cognitively demanding task. It's a skill that allows you to quickly master complicated information and produce better results in less time.",
};

describe("Book Detail", () => {
  test("should show title of single book", () => {
    render(
      <BrowserRouter>
        <BookDetail />
      </BrowserRouter>
    );
    const title = screen.getByRole("heading", {
      title: "Deep Focus",
    });
    expect(title).toBeInTheDocument();
  });

  test("should show author of single book", () => {
    render(
      <BrowserRouter>
        <BookDetail />
      </BrowserRouter>
    );
    const author = screen.getByRole("heading", {
      author: "Carl Newport",
    });
    expect(author).toBeInTheDocument();
  });

  test("should show category of single book", () => {
    render(
      <BrowserRouter>
        <BookDetail />
      </BrowserRouter>
    );
    const category = screen.getByRole("heading", {
      category: "self development/",
    });
    expect(category).toBeInTheDocument();
  });

  test("should show description of single book", () => {
    render(
      <BrowserRouter>
        <BookDetail {...bookDetailProps} />
      </BrowserRouter>
    );
    const description = screen.getByText("heading", {
      description:
        /Deep work is the ability to focus without distraction on a cognitively demanding task./i,
    });

    expect(description).toBeInTheDocument();
  });
});

test("page contains the add new button", () => {
  render(
    <BrowserRouter>
      <BookDetail />
    </BrowserRouter>
  );
  const backToListing = screen.getByRole("link", {
    name: "Back to listing",
  });
  expect(backToListing).toBeInTheDocument();
});

test("page contains the back to listing button", () => {
  render(
    <BrowserRouter>
      <BookDetail />
    </BrowserRouter>
  );
  const backToListing = screen.getByRole("link", {
    name: "Back to listing",
  });
  fireEvent.click(backToListing);
  expect(window.location.pathname).toBe("/");
});
