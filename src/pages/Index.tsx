import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhatWeDo from "@/components/WhatWeDo";
import Plans from "@/components/Plans";
import Workflows from "@/components/Workflows";
import ChatDemo from "@/components/ChatDemo";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <WhatWeDo />
      <Plans />
      <Workflows />
      <ChatDemo />
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default Index;
