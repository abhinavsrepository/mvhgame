import { Inter, Dela_Gothic_One } from "next/font/google";
import "./globals.css";

const InterBodyFont = Inter({
  subsets: ["latin"],
  variable: "--body-font",
});

const DeltaHeadingFont = Dela_Gothic_One({
  subsets: ["latin"],
  variable: "--heading-font",
  weight:"400"
});
export const metadata = {
  title: "mvhgames",
  description: "Play and win",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${InterBodyFont.variable} ${DeltaHeadingFont.variable} antialiased bg-main`}
      >
        {children}
      
      </body>
    </html>
  );
}
