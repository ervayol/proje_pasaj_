import "@/styles/globals.css";
import type { AppProps } from "next/app";

import DebugBoundary from "@/components/DebugBoundary";

export default function App({ Component, pageProps }: AppProps) {
  return(
    <DebugBoundary>
     <Component {...pageProps} />;
     </DebugBoundary>
  );
}
