import { createRoot } from "react-dom/client";
import SearchParams from "./SearchParams";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import Details from "./Details";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: Infinity,
    },
  },
});
const App = () => {
  return (
    <BrowserRouter>
      <div>
        <h1>Adopt Me!</h1>
        <QueryClientProvider client={queryClient}>
          <Routes>
            <Route path="details/:id" element={<Details />} />
            <Route path="/" element={<SearchParams />} />
          </Routes>
        </QueryClientProvider>
      </div>
    </BrowserRouter>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
