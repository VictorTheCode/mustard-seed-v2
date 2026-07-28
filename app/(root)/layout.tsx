import Footer from "@/components/layout/footer";
import Navbar from "@/components/layout/navbar";
import React from "react";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main>
      <Navbar />
      {children}
      <Footer />
    </main>
  );
};

export default RootLayout;
