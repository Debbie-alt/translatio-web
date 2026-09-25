import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { HowItWorks } from "./components/HowItWorks";
import { ApiSection } from "./components/ApiSection";
import { ReactSection } from "./components/ReactSection";
import { Languages } from "./components/Languages";
import { CodeExample } from "./components/CodeExample";
import { Features } from "./components/Features";
import { Workflow } from "./components/Workflow";
import { FinalCta } from "./components/FinalCta";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-canvas text-ink">
      <Nav />
      <main>
        <Hero />
        <HowItWorks />
        <ApiSection />
        <ReactSection />
        <Languages />
        <CodeExample />
        <Features />
        <Workflow />
        <FinalCta />
      </main>
      <Footer />
    </div>
  );
}

export default App;