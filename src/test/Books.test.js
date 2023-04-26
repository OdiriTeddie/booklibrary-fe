import { fireEvent, render, screen } from "@testing-library/react";
import Books from "../components/Books";
import { BrowserRouter } from "react-router-dom";

test("page contains the add new button", () => {
  render(
    <BrowserRouter>
      <Books />
    </BrowserRouter>
  );
  const addNewBtn = screen.getByRole("link", {
    name: "Add New",
  });
  expect(addNewBtn).toBeInTheDocument();
});

test("page contains the add new button", () => {
  render(
    <BrowserRouter>
      <Books />
    </BrowserRouter>
  );
  const addNewBtn = screen.getByRole("link", {
    name: "Add New",
  });
  fireEvent.click(addNewBtn);
  expect(window.location.pathname).toBe("/book/create");
});

// import React from "react";
// import { render, fireEvent } from "@testing-library/react";
// import { MemoryRouter } from "react-router-dom";
// import { editItem } from "./api";
// import ItemList from "./ItemList";

// jest.mock("./api");

// const itemList = [
//   { id: 1, name: "Item 1", description: "Description of item 1" },
//   { id: 2, name: "Item 2", description: "Description of item 2" },
//   { id: 3, name: "Item 3", description: "Description of item 3" },
// ];

// test("clicking the edit button navigates to the edit item page", () => {
//   const { getByRole } = render(
//     <MemoryRouter initialEntries={["/"]}>
//       <ItemList itemList={itemList} />
//     </MemoryRouter>
//   );

//   const editButton = getByRole("button", { name: "Edit Item 1" });
//   fireEvent.click(editButton);

//   expect(editItem).toHaveBeenCalledWith(1);
//   expect(window.location.pathname).toBe("/edit-item/1");
// });
