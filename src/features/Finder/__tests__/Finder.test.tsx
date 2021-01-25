import { screen } from "@testing-library/react";
import renderWithProviders from "__mocks__/renderWithProviders";
import Finder from "./../";

describe("Finder tests", () => {
  test("renders content", () => {
    renderWithProviders(<Finder />);

    const content = screen.getByTestId("Finder");

    expect(content).toBeInTheDocument();
  });
});
