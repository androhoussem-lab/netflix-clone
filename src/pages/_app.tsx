import "@/styles/globals.css";
import type { AppProps } from "next/app";
import SharedLayout from "@/modules/SharedLayout";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SharedLayout>
      <Component {...pageProps} />
    </SharedLayout>
  );
}
