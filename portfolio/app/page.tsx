
import About from "./Components/Home/About";
import Contact from "./Components/Home/Contact";
import Home from "./Components/Home/Home";
import Projects from "./Components/Home/Projects";
import ValueAdd from "./Components/Home/ValueAdd";
export default function Page() {
  return (
    <main className="font-dmsans">
     <Home/>
     <About/>
     <ValueAdd/>
     <Projects/>
     <Contact/>
    </main>
  );
}
