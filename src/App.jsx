import "./App.css";
import Contact from "./sections/Contact/Contact";
import Footer from "./sections/Footer/Footer";
import Hero from "./sections/Hero/Hero";
import Projects from "./sections/Projects/Projects";
import Skills from "./sections/Skills/Skills";
import { Toaster } from 'react-hot-toast';


function App() {
  return (
    <>
      <Hero />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
      <Toaster
        position="top-center"
        reverseOrder={false}
        gutter={12}
        containerStyle={{ margin: "8px" }}
        toastOptions={{
          success: { duration: 3000 },
          error: { duration: 5000 },
          style: {
            fontFamily: "Roboto Mono",
            fontSize: "15px",
            width: "50%",
            padding: "16px 24px",
            backgroundColor: "#fff",
            color: "#374151",
            borderRadius: "30px",
          },
        }}
      />
    </>
  );
}

export default App;
