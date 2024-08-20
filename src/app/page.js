"use client";
import Header from "./components/Header";
import Main from "./main/Main";
import Footer from "./components/Footer";
export default function Example() {
  
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <>
      <Header scrollToSection={scrollToSection}/>
      <Main scrollToSection={scrollToSection}/>
      <Footer scrollToSection={scrollToSection}/>
    </>
  );
}
