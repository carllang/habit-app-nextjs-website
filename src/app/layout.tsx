import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "./components/Navigation";
import { metadata } from "./metadata";

const inter = Inter({ subsets: ["latin"] });

export { metadata };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-400 min-h-screen bg-gradient-to-b bg-[#121212] font-sans text-slate-300`}
      >
        <div className="fixed left-0 top-0 -z-10 h-full w-full">
          <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
        </div>

        <Navigation />

        {/* Main Content */}
        <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mt-20 md:mt-24">{children}</div>
        </main>
      </body>
    </html>
  );
}
