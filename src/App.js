import { NavBar } from "./components/NavBar";
import { Home } from "./components/Home";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Work } from "./components/Work";
import { Contact } from "./components/Contact";

import { useContext } from "react"
import { DarkModeContext } from "./context/DarkModeContext"

function App() {

  const { darkMode } = useContext(DarkModeContext)

  return (
    <div className={darkMode ? 'dark' : 'light'}>
      <NavBar />
      <Home />
      <About />
      <Skills />
      <Work />
      <Contact />
    </div>
  );
}

export default App;
