import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Skills from "@/components/Skills";
import WorkProcess from "@/components/WorkProcess";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import BackgroundKineticLoop from "@/components/BackgroundKineticLoop";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#050505] text-[#ededed] flex flex-col selection:bg-red-600 selection:text-white">
      {/* Top Navbar */}
      <Navbar />

      <main className="flex-1">
        {/* Hero Section (Preserved completely untouched) */}
        <Hero />

        {/* Entire Website Below Hero: Kinetic Shifting Loop Texts & Gradient Grain Touch */}
        <div className="relative overflow-hidden bg-[#050505]">
          {/* Kinetic Shifting & Slipping Looping Background Typography */}
          <BackgroundKineticLoop />

          {/* Gradient Grain Touch Overlay */}
          <div className="absolute inset-0 pointer-events-none z-10">
            {/* Multi-Stop Atmospheric Ambient Radial Gradients */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_85%_12%,rgba(185,28,28,0.09)_0%,transparent_55%),radial-gradient(ellipse_at_12%_50%,rgba(220,38,38,0.06)_0%,transparent_55%),radial-gradient(ellipse_at_50%_88%,rgba(185,28,28,0.07)_0%,transparent_60%)]" />

            {/* Tactile Fine Film Grain Texture Touch */}
            <div
              className="absolute inset-0 opacity-[0.045] mix-blend-overlay"
              style={{
                backgroundImage: "url('/images/grain-pattern.png')",
                backgroundRepeat: "repeat",
              }}
            />
          </div>

          {/* Foreground Content Sections */}
          <div className="relative z-20">
            {/* Selected Projects */}
            <Projects />

            {/* 3-Column Section: Education, Technical Skills & Work Process (Open, Spacious Layout matching template) */}
            <section
              id="education-skills-process"
              className="py-16 sm:py-24 border-t border-zinc-900/90 relative"
            >
              <div className="w-full px-4 sm:px-8 lg:px-12 xl:px-16">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 sm:gap-12 lg:gap-14 xl:gap-16">
                  {/* Column 1: Education */}
                  <div className="pb-10 border-b border-zinc-900/80 lg:border-b-0 lg:pb-0 lg:border-r lg:border-zinc-900/80 lg:pr-10 xl:pr-12">
                    <Education />
                  </div>

                  {/* Column 2: Technical Skills */}
                  <div className="pb-10 border-b border-zinc-900/80 lg:border-b-0 lg:pb-0 lg:border-r lg:border-zinc-900/80 lg:px-6 xl:px-8">
                    <Skills />
                  </div>

                  {/* Column 3: Work Process */}
                  <div className="lg:pl-6 xl:pl-8">
                    <WorkProcess />
                  </div>
                </div>
              </div>
            </section>

            {/* Contact Section */}
            <Contact />
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
