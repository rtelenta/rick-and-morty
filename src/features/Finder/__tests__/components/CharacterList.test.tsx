import {
  fireEvent,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import renderWithProviders from "__mocks__/renderWithProviders";
import { server } from "__mocks__/server";
import CharacterList from "./../../components/CharacterList";
import { graphql } from "msw";

describe("CharacterList tests", () => {
  test("renders content", async () => {
    renderWithProviders(<CharacterList />);

    const loader = screen.queryAllByTestId("LoaderCard");

    expect(loader[0]).toBeInTheDocument();

    await waitForElementToBeRemoved(loader[0]);

    expect(loader[0]).not.toBeInTheDocument();
  });

  test("infinite scroll", async () => {
    renderWithProviders(<CharacterList />);

    await waitForElementToBeRemoved(screen.queryAllByTestId("LoaderCard")[0]);

    fireEvent.scroll(window, { target: { scrollY: 500 } });

    await screen.findAllByTestId("LoaderCard");
  });

  test("renders with api error", async () => {
    server.use(
      graphql.query("getCharacters", (req, res, ctx) => {
        return res(
          ctx.errors([
            {
              message: "404 not found",
            },
          ])
        );
      })
    );

    renderWithProviders(<CharacterList />);

    const loader = screen.queryAllByTestId("LoaderCard");

    await waitForElementToBeRemoved(loader[0]);

    expect(
      screen.getByText("Personaje no encontrado en esta realidad")
    ).toBeInTheDocument();
  });
});
