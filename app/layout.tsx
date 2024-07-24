import { Navbar, Footer } from "@/components";
import { Toaster } from "sonner";
import "./globals.css";

export const metadata = {
  title: "Fresh Cars",
  description: "Discover world's best car showcase application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="relative">
        <Navbar />
        {children}
        <Toaster richColors />
        <Footer />
      </body>
    </html>
  );
}
