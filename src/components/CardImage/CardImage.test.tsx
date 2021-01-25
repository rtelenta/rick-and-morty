import { render, screen } from "@testing-library/react";
import CardImage from "./";

const badgeTestId = "badgeTestId";
const props = {
  title: "Card title",
  description: "Card description",
  image: "https://via.placeholder.com/330",
  badge: <div data-testid={badgeTestId} />,
};

function buildCardImage() {
  return <CardImage {...props} />;
}

describe("CardImage tests", () => {
  test("renders content with props", () => {
    const cardImage = buildCardImage();
    render(cardImage);

    const content = screen.getByTestId("CardImage");
    const badge = screen.getByTestId(badgeTestId);
    const title = screen.getByText(props.title);
    const description = screen.getByText(props.description);

    expect(content).toBeInTheDocument();
    expect(badge).toBeInTheDocument();
    expect(title).toBeInTheDocument();
    expect(description).toBeInTheDocument();
  });
});
