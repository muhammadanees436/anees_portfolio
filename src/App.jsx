import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Services from "./components/Services";
import WayOfWorking from "./components/WayOfWorking";
import Blogs from "./components/Blogs";
import Contact from "./components/Contact";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Services />
      <WayOfWorking />
      <Blogs />
      <Contact />
    </div>
  );
}
