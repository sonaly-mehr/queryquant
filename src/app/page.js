import { Suspense } from "react";
import Hero from "./components/Hero";
import ProductOverview from "./components/ProductOverview";
import Preview from "./components/Preview";
import Waitlist from "./components/Waitlist";
import { Toaster } from "sonner";
import WhatIsQueryQuant from "./components/WhatIsQueryQuant";
import HowItWorks from "./components/HowItWorks";
import WhoIsItFor from "./components/WhoIsItFor";
import WhyChooseQueryQuant from "./components/WhyChooseQueryQuant";
import FAQ from "./components/Faq";

export default function Home() {
  return (
    <main>
      <Toaster position="top-center" richColors />

      <Suspense fallback={<div className="h-screen bg-black" />}>
        <Hero />
        <WhatIsQueryQuant />
        <HowItWorks />
        {/* <ProductOverview /> */}
        <WhoIsItFor />
        <WhyChooseQueryQuant />
        <FAQ />
        <Waitlist />
      </Suspense>
    </main>
  );
}
