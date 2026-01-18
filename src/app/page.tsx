import Image from "next/image";
import MenuBar from "./sections/MenuBar";
import Hero from "./sections/Hero";
import About from "./sections/about";
import Works from "./sections/Works";
export default function Home() {
  return (
    <div className="">
      <div className="h-screen">
        <MenuBar />
        <Hero />
      </div>

      <About  />
      <Works/>
    </div>
  );
}
