import { render, screen } from "@testing-library/react";
import CharactersGrid from "./../../components/CharactersGrid";

describe("CharactersGrid tests", () => {
  test("renders content", () => {
    const customTestId = "customTestId";

    render(
      <CharactersGrid>
        <div data-testid={customTestId} />
      </CharactersGrid>
    );

    const content = screen.getByTestId(customTestId);

    expect(content).toBeInTheDocument();
  });
});
