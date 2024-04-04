'use client'; 
import Image from "next/image";
import About from "./components/About/About";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Skills from "./components/Skills/Skills";
import WorkExperience from "./components/WorkExperience/WorkExperience";



export default function Home() {
  return (
    <main className="bg-[#1F2235] text-white h-screen snap-y snap-mandatory overflow-scroll" >
     <title>Kelly Rivas's Portfolio</title>
     <Header/>
    <section id="hero" className="snap-start">
      <Hero/>
    </section>
    <section id="about" className="snap-center">
      <About/>
    </section>
    <section id="experience" className="snap-center">
      <WorkExperience/>
    </section>
    <section id="skills" className="snap-start">
       <Skills />
    </section>

     {/* Project */}
    <section id="project"></section>
      {/* Contact Me*/}
    </main>
  );
}
