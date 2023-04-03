import Layout from "@/components/Layout";
import NavBar from "@/components/navbar/NavBar";
import "@/styles/globals.css";
import { AnimatePresence } from "framer-motion";
import type { AppProps } from "next/app";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { ThemeProvider } from "@/context/ThemeProvider";
import { ModalProvider } from "@/context/ModalProvider";
import { Roboto_Mono, Assistant } from "next/font/google";

const robotoMono = Roboto_Mono({
  weight: ["100", "200", "300", "500"],
  style: ["italic", "normal"],
  variable: "--roboto_mono-font",
  display: "swap",
});
const assistant = Assistant({
  weight: ["300", "400", "500", "700"],
  style: ["normal"],
  variable: "--assistant-font",
  display: "swap",
});

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <>
      <ThemeProvider>
        <ModalProvider>
          <div
            className={`${robotoMono.variable} ${assistant.variable} font-sans w-full h-full bg-mainWithe overflow-x-hidden -z-10 transition ease-out duration-500 dark:bg-black `}
          >
            <NavBar />
            <AnimatePresence
              mode="wait"
              onExitComplete={() => window.scrollTo(0, 0)}
            >
              <motion.div
                key={router.asPath}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, transition: { duration: 0.6 } }}
                transition={{ duration: 0.4 }}
                className={"overflow-x-hidden"}
              >
                <Component {...pageProps} />
              </motion.div>
            </AnimatePresence>
          </div>
        </ModalProvider>
      </ThemeProvider>
    </>
  );
}
