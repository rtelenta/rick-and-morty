import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import renderWithProviders from "__mocks__/renderWithProviders";
import MockSwitchMode from "__mocks__/MockSwitchMode";
import AlertMessage from "./../../components/AlertMessage";

describe("AlertMessage tests", () => {
  test("renders content", () => {
    const contentText = "contentText";

    renderWithProviders(
      <AlertMessage actions={<button />}>{contentText}</AlertMessage>
    );

    const content = screen.getByText(contentText);
    const button = screen.getByRole("button");

    expect(content).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });

  test("image change with theme", () => {
    renderWithProviders(
      <div>
        <MockSwitchMode />
        <AlertMessage actions={<div />} />
      </div>
    );

    const imageLight = screen.getByAltText("R and M light");
    const imageDark = screen.getByAltText("R and M dark");

    const switchModeBtn = screen.getByTestId("MockSwitchMode");

    const initClassNameLight = imageLight.className;
    const initClassNameDark = imageDark.className;

    userEvent.click(switchModeBtn);

    expect(imageLight.className).not.toBe(initClassNameLight);
    expect(imageDark.className).not.toBe(initClassNameDark);
  });
});
