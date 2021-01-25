import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import renderWithProviders from "__mocks__/renderWithProviders";
import Header from "./";

describe("Header tests", () => {
  const { location } = window;

  beforeAll(() => {
    delete (window as any).location;
    (window as any).location = { reload: jest.fn() };
  });

  afterAll(() => {
    window.location = location;
  });

  test("renders content", () => {
    renderWithProviders(<Header />);

    const content = screen.getByTestId("Header");

    expect(content).toBeInTheDocument();
  });

  test("reload page when click on logo", () => {
    renderWithProviders(<Header />);

    const logoBtn = screen.getByTestId("Header__logo");

    userEvent.click(logoBtn);

    expect(window.location.reload).toHaveBeenCalledTimes(1);
  });

  test("switch mode", () => {
    renderWithProviders(<Header />);

    const switchModeBtn = screen.getByTestId("Header__switchMode");

    const facesLight = screen.getByAltText("R and M");
    const facesDark = screen.getByAltText("Toxic R and M");

    const initClassNameLight = facesLight.className;
    const initClassNameDark = facesDark.className;

    userEvent.click(switchModeBtn);

    expect(facesLight.className).not.toBe(initClassNameLight);
    expect(facesDark.className).not.toBe(initClassNameDark);
  });
});
