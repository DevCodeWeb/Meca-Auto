import "@/styles/globals.css";
import type { AppProps } from "next/app";

import { Header } from "@/components/organism/shared/Header";
import { Footer } from "@/components/organism/shared/Footer";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Component {...pageProps} />;
      <Footer />
    </>
  );
}
