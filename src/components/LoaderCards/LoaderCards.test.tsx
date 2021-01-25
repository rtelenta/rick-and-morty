import { render, screen } from "@testing-library/react";
import LoaderCards from "./";

describe("LoaderCards tests", () => {
  test("renders content", () => {
    const wrapperTestId = "wrapper";
    const cardsNumber = 4;

    render(
      <div data-testid={wrapperTestId}>
        <LoaderCards />
      </div>
    );

    const content = screen.getByTestId(wrapperTestId);

    expect(content.childNodes.length).toBe(cardsNumber);
  });
});
