import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import BackToTop from "./";

describe("BackToTop tests", () => {
  const { scrollTo } = window;

  beforeAll(() => {
    delete (window as any).scrollTo;
    (window as any).scrollTo = jest.fn();
  });

  afterAll(() => {
    window.scrollTo = scrollTo;
  });

  test("renders content", () => {
    render(<BackToTop />);

    const content = screen.getByRole("button");

    expect(content).toBeInTheDocument();
  });

  test("scroll and click button", () => {
    render(<BackToTop />);

    const content = screen.getByRole("button");

    fireEvent.scroll(window, { target: { scrollY: 500 } });
    userEvent.click(content);

    expect(window.scrollTo).toHaveBeenCalledTimes(1);
  });
});
