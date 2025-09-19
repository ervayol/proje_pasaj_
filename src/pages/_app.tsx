

import "@/styles/globals.css";
import type { AppProps } from "next/app";

import DebugBoundary from "@/components/DebugBoundary";
import { FavoritesProvider } from "@/context/FavoritesContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <DebugBoundary>
      <FavoritesProvider>
        <Component {...pageProps} />
      </FavoritesProvider>
    </DebugBoundary>
  );
}

