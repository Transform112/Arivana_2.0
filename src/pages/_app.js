import "@/styles/globals.css";
import { Inter, Syne } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import Script from "next/script";

const display = Syne({
  subsets: ["latin"],
  variable: "--font-display",
});
const body = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});
export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="light"
      enableSystem
      disableTransitionOnChange
    >
      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.13.0/gsap.min.js"
        strategy="afterInteractive"
        integrity="sha512-NcZdtrT77bJr4STcmsGAESr06BYGE8woZdSdEgqnpyqac7sugNO+Tr4bGwGF3MsnEkGKhU2KL2xh6Ec+BqsaHA=="
        crossOrigin="anonymous"
      />
      <main
        className={`${display.variable} ${body.variable} flex min-h-screen flex-col font-body text-base-600 dark:text-base-500 bg-base-50 dark:bg-base-950`}
      >
        <Component {...pageProps} />
      </main>
    </ThemeProvider>
  );
}
