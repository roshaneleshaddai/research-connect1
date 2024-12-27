import "./globals.css";
import Header from "./components/Header/page";
import Footer from "./components/Footer/page";
//import { SessionProvider } from "next-auth/react";


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
      {/* <SessionProvider> */}
        <Header/>
        <div className="min-h-screen">{children}</div>
        <Footer/>
        {/* </SessionProvider> */}
      </body>
    </html>
  );
}
