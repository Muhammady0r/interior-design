import "./App.css";
import "ldrs/ring";
import "ldrs/helix";
import Header from "./components/Header";
import Showcase from "./components/Showcase";
import HowWork from "./components/HowWork";
import Previews from "./components/Previews";
import Projects from "./components/Projects";
import Work from "./components/Work";
import Footer from "./components/Footer";

import { Toaster } from "@/components/ui/sonner";

function App() {
  return (
    <>
      <Header />
      <Showcase />
      <HowWork />
      <br />
      <br />
      <Previews />
      <br />
      <br />
      <Projects />
      <br />
      <br />
      <br />
      <br />
      <Work />
      <Footer />
      <Toaster />
    </>
  );
}

export function getImages(random = false) {
  const imgs = [
    "/img-0.jpg",
    "/img-1.jpg",
    "/img-2.jpg",
    "/img-3.jpg",
    "/img-4.jpg",
    "/img-5.jpg",
    "/img-6.jpg",
    "/img-7.jpg",
    "/img-8.jpg",
    "/img-9.jpg",
  ];

  return random ? imgs[Math.floor(Math.random() * imgs.length)] : imgs;
}

export default App;
