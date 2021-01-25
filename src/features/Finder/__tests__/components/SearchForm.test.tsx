import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import renderWithProviders from "__mocks__/renderWithProviders";
import SearchForm from "./../../components/SearchForm";

describe("SearchForm tests", () => {
  test("renders content", () => {
    renderWithProviders(<SearchForm />);

    const content = screen.getByTestId("SearchForm");

    expect(content).toBeInTheDocument();
  });

  test("submit form", () => {
    renderWithProviders(<SearchForm />);

    const options = {
      alive: "alive",
      dead: "dead",
      unknown: "unknown",
    };

    const inputText = "Hello world";

    userEvent.type(screen.getByRole("textbox"), inputText);
    userEvent.selectOptions(screen.getByTestId("SearchForm__select"), [
      options.alive,
    ]);

    const aliveOption = screen.getByTestId(options.alive) as HTMLOptionElement;
    const deadOption = screen.getByTestId(options.dead) as HTMLOptionElement;
    const unknownOption = screen.getByTestId(
      options.unknown
    ) as HTMLOptionElement;

    userEvent.click(screen.getByRole("button"));

    expect(screen.getByRole("textbox")).toHaveValue(inputText);
    expect(aliveOption.selected).toBe(true);
    expect(deadOption.selected).toBe(false);
    expect(unknownOption.selected).toBe(false);
    expect(screen.getByRole("button"));
  });
});
