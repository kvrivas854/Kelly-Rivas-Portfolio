'use client'; 
import Image from "next/image";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";



export default function Home() {
  return (
    <main className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll" >
     <title>Kelly Rivas's Portfolio</title>
     <Header/>

     {/* Hero */}
    <section id="hero" className="snap-center">
      <Hero/>
    </section>
     {/* About */}

     {/* Experience */}

     {/* Skills*/}

     {/* Project */}

     {/* Contact Me*/}
    </main>
  );
}
