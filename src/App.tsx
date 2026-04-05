import { ThemeProvider } from "next-themes";
import { Hero } from "./app/components/Hero";
import { About } from "./app/components/About";
import { Portfolio } from "./app/components/Portfolio";
import { Services } from "./app/components/Services";
import { Testimonials } from "./app/components/Testimonials";
import { Contact } from "./app/components/Contact";
import { Footer } from "./app/components/Footer";
import { Navbar } from "./app/components/Navbar";
import { LoadingScreen } from "./app/components/LoadingScreen";
import { Toaster } from "./app/components/ui/sonner";
import { useState, useEffect } from "react";

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading screen
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }
  
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      <div className="relative">
        <Navbar />
        <Hero />
        <About />
        <Portfolio />
        <Services />
        <Testimonials />
        <Contact />
        <Footer />
        <Toaster position="top-right" richColors />
      </div>
    </ThemeProvider>
  );
}