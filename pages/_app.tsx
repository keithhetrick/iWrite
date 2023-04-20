import type { AppProps } from 'next/app'
import "../styles/globals.css";
import { Open_Sans } from "next/font/google";
import Navbar from "pages/(shared)/Navbar";
import Footer from "pages/(shared)/Footer";

const openSans = Open_Sans({
  subsets: ["latin"],
})

export const metadata = {
  title: 'iwrite',
  description: 'Blog built in Next.js using ChatGPT-3 AI',
}


export default function App({ Component, pageProps }: AppProps) {
  return (
    <section className={openSans.className}>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </section>
  )

}
