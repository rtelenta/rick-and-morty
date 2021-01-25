import { render, screen } from "@testing-library/react";
import Badge from "./";

describe("Badge tests", () => {
  test("renders content with props", () => {
    const contentTestId = "contentTestId";
    const iconTestId = "iconTestId";

    render(
      <Badge bg="teal.200" icon={<i data-testid={iconTestId} />}>
        <div data-testid={contentTestId} />
      </Badge>
    );

    const content = screen.getByTestId("Badge");
    const innerContent = screen.getByTestId(contentTestId);
    const icon = screen.getByTestId(iconTestId);

    expect(content).toBeInTheDocument();
    expect(innerContent).toBeInTheDocument();
    expect(icon).toBeInTheDocument();
  });
});
