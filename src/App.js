import "./styles/statics.scss";
import Header from "../src/components/Header.jsx";
import Home from "../src/components/Home.jsx";
import Work from "./components/Work.jsx";
import Timeline from "../src/components/Timeline.jsx";
import Services from "../src/components/Services.jsx";
import Contact from "../src/components/Contact";
import Footer from "../src/components/Footer.jsx";
import { Toaster } from "react-hot-toast";
import { useEffect, useState } from "react";
function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
<>

<Header/>
<Home/>
<Work/>
<Timeline/>
<Services/>
<Contact/>
<Footer/>
<Toaster/>
</>

  
  );
}

export default App;
