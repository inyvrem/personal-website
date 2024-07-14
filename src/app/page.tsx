// components
import { Navbar, Footer } from "@/components";

// sections
import Hero from "./hero";
import Skills from "./skills";
import Projects from "./projects";
import Testimonial from "./testimonial";
import ContactForm from "./contact-form";

export default function Portfolio() {
  return (
    <>
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <Testimonial />
      <ContactForm />
      <Footer />
    </>
  );
}
