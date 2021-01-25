import { render, screen } from "@testing-library/react";
import Layout from "./";

describe("Layout tests", () => {
  test("renders content", () => {
    const customTestId = "customTestId";

    render(
      <Layout>
        <div data-testid={customTestId} />
      </Layout>
    );

    const content = screen.getByTestId(customTestId);

    expect(content).toBeInTheDocument();
  });
});
