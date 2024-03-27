import "./App.css";
import Header from "./components/Header";
import "ldrs/ring";
import Showcase from "./components/Showcase";
import HowWork from "./components/HowWork";
import Previews from "./components/Previews";

function App() {
  return (
    <>
      <Header />
      <Showcase />
      <HowWork />
      <br />
      <br />
      <Previews />
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
