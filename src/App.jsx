import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import TrustBar from "./components/TrustBar";
import Feature from "./components/Feature";
import Industries from "./components/Industries";
import Process from "./components/Process";
import Workflow from "./components/Workflow";
import CTASection from "./components/CTASection";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <TrustBar />

      <div className="main-layout">
        <div>
          <Feature />
          <Industries />
          <Process />
          <Workflow />
          <CTASection />
        </div>

        <div>
          <ContactForm />
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default App;
