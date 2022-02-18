// import Header from "./header";
import NavApp from "./navApp";
import Home from "./home";
import About from "./about";
import Contact from "./Contact";
import Insights from "./insights";
import Service from "./service";
import { Route, Routes } from "react-router-dom";

export default function Main() {
  return (
    <>
      {/* <Header /> */}
      <NavApp />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Insights" element={<Insights />} />
        <Route path="/Service" element={<Service />} />
      </Routes>
    </>
  );
}
