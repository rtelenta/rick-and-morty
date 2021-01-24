import { QueryClientProvider } from "react-query";
import queryClient from "./queryClient";

const QueryProvider: React.FC = ({ children }) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);

export default QueryProvider;
