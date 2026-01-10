import { createRoot } from "react-dom/client";
import { ConvexAuthProvider } from "@convex-dev/auth/react";
import { ConvexReactClient } from "convex/react";
import { FavoritesProvider } from "./contexts/FavoritesContext";
import { ComparisonProvider } from "./contexts/ComparisonContext";
import { DarkModeProvider } from "./contexts/DarkModeContext";
import { ErrorBoundary } from "./components/ErrorBoundary";
import "./index.css";
import App from "./App";

const convex = new ConvexReactClient(import.meta.env.VITE_CONVEX_URL as string);

createRoot(document.getElementById("root")!).render(
  <ErrorBoundary>
    <ConvexAuthProvider client={convex}>
      <DarkModeProvider>
        <FavoritesProvider>
          <ComparisonProvider>
            <App />
          </ComparisonProvider>
        </FavoritesProvider>
      </DarkModeProvider>
    </ConvexAuthProvider>
  </ErrorBoundary>,
);
