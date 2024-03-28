import "@/styles/globals.css";
import { Toaster } from "react-hot-toast";
import NextNProgress from "nextjs-progressbar";
import Applayout from "@/components/shared/Applayout";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <>
      <NextNProgress color="#DF4584" options={{ showSpinner: false }} />
      <Applayout>
        <Component {...pageProps} />
      </Applayout>

      <Toaster />
    </>
  );
}
