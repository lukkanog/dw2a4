import { render, waitFor, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import List from "./List";

describe("App Component", () => {
  it("Should render list items", async () => {
    const { getByText, rerender, queryByText, unmount } = render(
      <List initialItems={["Fulano", "Beltrano", "Ciclano"]} />
    );

    expect(getByText("Fulano")).toBeInTheDocument();
    expect(getByText("Beltrano")).toBeInTheDocument();
    expect(getByText("Ciclano")).toBeInTheDocument();

    unmount();
    rerender(<List initialItems={["Julia"]} />);

    expect(getByText("Julia")).toBeInTheDocument();
    expect(queryByText("Ciclano")).not.toBeInTheDocument();
  });

  it("Should be able to add new item to the list", async () => {
    const { getByText, findByText, getByPlaceholderText } = render(
      <List initialItems={[]} />
    );

    const inputElement = getByPlaceholderText("Novo item");
    const addButton = getByText("Adicionar");

    userEvent.type(inputElement, "Novo");
    userEvent.click(addButton);

    expect(await findByText("Novo")).toBeInTheDocument();
  });

  it("Should be able to remove item from the list", async () => {
    const { getAllByText, queryByText } = render(
      <List initialItems={["Fulano", "Beltrano", "Ciclano"]} />
    );

    const removeButtons = getAllByText("Remover");

    userEvent.click(removeButtons[0]);

    await waitFor(() => {
      expect(queryByText("Fulano")).not.toBeInTheDocument();
    });
  });
});
