import { render } from "@testing-library/react";
import AppProvider from "state";

function renderWithProviders(ui: JSX.Element) {
  const Wrapper: React.FC = ({ children }) => (
    <AppProvider>{children}</AppProvider>
  );

  return render(ui, { wrapper: Wrapper });
}

export default renderWithProviders;
