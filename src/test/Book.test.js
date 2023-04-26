import { render, screen } from "@testing-library/react";
import Book from "../components/Book";

const bookProps = {
  title: "Deep Focus",
  author: "Carl Newport",
  category: "Self Development",
  description:
    "Deep work is the ability to focus without distraction on a cognitively demanding task. It's a skill that allows you to quickly master complicated information and produce better results in less time.",
};

describe("Book Content", () => {
  test("should show title of book", () => {
    render(<Book {...bookProps} />);
    const title = screen.getByRole("heading", {
      title: "Deep Focus",
    });
    expect(title).toBeInTheDocument();
  });

  test("should show author of book", () => {
    render(<Book {...bookProps} />);
    const author = screen.getByText(/carl newport/i);
    expect(author).toBeInTheDocument();
  });

  test("should show category of book", () => {
    render(<Book {...bookProps} />);
    const category = screen.getByText(/self development/i);
    expect(category).toBeInTheDocument();
  });

  test("should show description of book", () => {
    render(<Book {...bookProps} />);
    const description = screen.getByText(
      /Deep work is the ability to focus without distraction/i
    );
    expect(description).toBeInTheDocument();
  });
});

describe("Book buttons", () => {
  test("page contains the edit button", () => {
    render(<Book />);
    const editBtn = screen.getByRole("button", {
      name: "Edit",
    });
    expect(editBtn).toBeInTheDocument();
  });

  test("page contains the delete button", () => {
    render(<Book />);
    const deleteBtn = screen.getByRole("button", {
      name: "Delete",
    });
    expect(deleteBtn).toBeInTheDocument();
  });

  test("page contains the detail button", () => {
    render(<Book />);
    const DetailBtn = screen.getByRole("button", {
      name: "Detail",
    });
    expect(DetailBtn).toBeInTheDocument();
  });
});

// describe("CRUD operations", () => {
//   test("adds a new item to the list", () => {
//     const { getByPlaceholderText, getByText } = render(<App />);
//     const input = getByPlaceholderText("Enter item name");
//     const addButton = getByText("Add");
//     fireEvent.change(input, { target: { value: "New item" } });
//     fireEvent.click(addButton);
//     const item = getByText("New item");
//     expect(item).toBeInTheDocument();
//   });

//   test("edits an existing item in the list", () => {
//     const { getByLabelText, getByPlaceholderText, getByText } = render(<App />);
//     const editButton = getByLabelText("Edit");
//     fireEvent.click(editButton);
//     const input = getByPlaceholderText("Enter new item name");
//     fireEvent.change(input, { target: { value: "Updated item" } });
//     const saveButton = getByLabelText("Save");
//     fireEvent.click(saveButton);
//     const item = getByText("Updated item");
//     expect(item).toBeInTheDocument();
//   });

//   test("deletes an existing item from the list", () => {
//     const { getByLabelText, queryByText } = render(<App />);
//     const deleteButton = getByLabelText("Delete");
//     fireEvent.click(deleteButton);
//     const item = queryByText("Updated item");
//     expect(item).not.toBeInTheDocument();
//   });
// });
