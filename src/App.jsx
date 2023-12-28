import Logo from "./assets/logo.png";
import Noise from "./assets/noise-blog.png";
import "./App.css";
import { FaStarOfLife } from "react-icons/fa";
import Topbar from "./components/Topbar";
import Project from "./pages/Project";
import About from "./pages/About";
import Footer from "./pages/Footer";
import Skills from "./pages/Skills";
import SvgGrid from "./components/SvgGrid";
import Quote from "./components/Quote";

const handleScrollSvg = () => {
  const noise = document.querySelector(".noise");
  const streamer1 = document.querySelector(".streamer-container1");
  const streamer2 = document.querySelector(".streamer-container2");
  var widthScreen = document.documentElement.clientWidth || window.innerWidth;

  const scrollPos = window.scrollY;
  const moveAmt = scrollPos / 4;

  noise.style.transform = `translateX(${moveAmt}px) translateY(${-moveAmt}px)`;
  if (widthScreen > 767) {
    streamer1.style.transform = `translateX(${-moveAmt}px)`;
    streamer2.style.transform = `translateX(${moveAmt}px)`;
  } else {
    streamer1.style.transform = `translateX(${-moveAmt * 7}px)`;
    streamer2.style.transform = `translateX(${moveAmt * 7}px)`;
  }
};

const streamerArray1 = [
  "html",
  "javascript",
  "css",
  "typescript",
  "reactjs",
  "nextjs",
  "tailwind",
  "nodejs",
  "firebase",
  "illustrator",
  "after effects",
];
const streamerArray2 = [
  "motion graphics",
  "ui/ux",
  "full-stack",
  "frontend",
  "hci",
  "web design",
  "software development",
  "product design",
];

function App(props) {
  const projectData = props.data;
  window.addEventListener("scroll", handleScrollSvg);
  window.addEventListener("touchmove", handleScrollSvg);

  return (
    <>
      <Topbar />
      <div className="flex relative mt-10">
        <div className="mx-4 lg:mx-20">
          <div className="h-10 w-10 mb-3 object-contain">
            <img src={Logo} alt="" />
          </div>
          <h2>Rohosen Bhattacharya</h2>
          <h1>Research</h1>
          <h1 className="text-grass-500">Design</h1>
          <h1>Development</h1>
        </div>
        <SvgGrid />
        <div className="noise absolute top-1/4 opacity-60">
          <img src={Noise} alt="" />
        </div>
      </div>
      <div className="mt-20 md:mt-80 overflow-x-hidden">
        <div className="streamer-container1">
          {streamerArray1.map((txt) => {
            return (
              <div className="streamer-text ">
                <span>{txt}</span>
                <FaStarOfLife className="mx-4 text-grass-500" />
              </div>
            );
          })}
        </div>
        <div className="streamer-container2 ">
          {streamerArray2.map((txt, index) => {
            return (
              <div key={index} className="streamer-text ">
                <span>{txt}</span>
                <FaStarOfLife className="mx-4 text-grass-500" />
              </div>
            );
          })}
        </div>
      </div>
      <Project data={projectData} />
      <Quote />
      <About />
      <Skills />
      <Footer />
    </>
  );
}

export default App;
