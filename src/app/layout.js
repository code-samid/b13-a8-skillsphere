import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Toaster } from "react-hot-toast";

export const metadata = {
  title: {
    default: "SkillSphere",
    template: "%s | SkillSphere",
  },
  description: "Learn, share, and grow your skills",
  
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <Toaster />
        {children}
        <Footer />
      </body>
    </html>
  );
}