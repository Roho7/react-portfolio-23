import Logo from "./assets/logo.png";
import Noise from "./assets/noise-blog.png";
import "./App.css";
import { FaStarOfLife } from "react-icons/fa";
import Topbar from "./components/Topbar";
import Project from "./pages/Project";
import About from "./pages/About";
import Footer from "./pages/Footer";
import Skills from "./pages/Skills";

const handleScrollSvg = () => {
  const svg = document.querySelectorAll(".svg-object");
  const noise = document.querySelector(".noise");
  const streamer1 = document.querySelector(".streamer-container1");
  const streamer2 = document.querySelector(".streamer-container2");
  var widthScreen = document.documentElement.clientWidth || window.innerWidth;

  console.log(widthScreen);

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
  "javascript",
  "typescript",
  "reactjs",
  "tailwind",
  "html",
  "css",
  "after effects",
  "illustrator",
  "obsidian",
  "firebase",
];
const streamerArray2 = [
  "motion graphics",
  "ui/ux",
  "frontend",
  "hci",
  "digital arts",
  "web design",
  "creative coding",
  "product development",
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
        <div className="svg-grid">
          <div className="svg-row">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100%"
              height="auto"
              viewBox="0 0 216 216"
              fill="none"
              className="circle anti-clock-wise"
            >
              <path
                d="M-9.44166e-06 108C-7.57428e-06 129.361 6.33408 150.241 18.2013 168.002C30.0685 185.762 46.9358 199.605 66.6702 207.779C86.4046 215.953 108.12 218.092 129.07 213.925C150.02 209.758 169.263 199.472 184.368 184.368C199.472 169.264 209.758 150.02 213.925 129.07C218.092 108.12 215.953 86.4047 207.779 66.6703C199.605 46.9359 185.762 30.0686 168.002 18.2014C150.241 6.33422 129.36 0.00012939 108 0.000131512L108 108L-9.44166e-06 108Z"
                fill="#AEC926"
                className="svg-object "
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="auto"
              height="100%"
              viewBox="0 0 216 216"
              fill="none"
              className="circle rotate-180 clock-wise"
            >
              <path
                d="M0.00106339 108.001C0.00106294 93.818 2.79457 79.7741 8.22208 66.6709C13.6496 53.5677 21.6048 41.6619 31.6335 31.6332C41.6623 21.6045 53.5681 13.6492 66.6713 8.22173C79.7744 2.79422 93.8183 0.00072246 108.001 0.000727701C122.184 0.000732942 136.228 2.79424 149.331 8.22176C162.434 13.6493 174.34 21.6045 184.369 31.6332C194.397 41.662 202.353 53.5678 207.78 66.671C213.208 79.7742 216.001 93.818 216.001 108.001L108.001 108.001L0.00106339 108.001Z"
                fill="#AEC926"
                className="svg-object "
              />
            </svg>
          </div>
          <div className="svg-row">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100%"
              height="auto"
              viewBox="0 0 217 216"
              fill="none"
              className="circle clock-wise"
            >
              <path
                d="M108.996 216C87.6357 216 66.755 209.666 48.9945 197.799C31.234 185.932 17.3914 169.065 9.2171 149.33C1.04283 129.596 -1.09593 107.881 3.07128 86.9306C7.23848 65.9807 17.5245 46.7369 32.6286 31.6328C47.7326 16.5288 66.9764 6.24275 87.9263 2.07555C108.876 -2.09165 130.591 0.0471087 150.326 8.22137C170.06 16.3956 186.928 30.2383 198.795 47.9988C210.662 65.7593 216.996 86.64 216.996 108L108.996 108L108.996 216Z"
                fill="#AEC926"
                className="svg-object"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100%"
              height="auto"
              viewBox="0 0 216 216"
              fill="none"
              className="circle anti-clock-wise"
            >
              <path
                d="M107.999 0.000727701C129.36 0.000726767 150.24 6.33482 168.001 18.202C185.761 30.0692 199.604 46.9365 207.778 66.6709C215.953 86.4053 218.091 108.121 213.924 129.07C209.757 150.02 199.471 169.264 184.367 184.368C169.263 199.472 150.019 209.758 129.069 213.926C108.119 218.093 86.4039 215.954 66.6695 207.78C46.9351 199.605 30.0678 185.763 18.2006 168.002C6.33341 150.242 -0.000675429 129.361 -0.000676108 108.001L107.999 108.001L107.999 0.000727701Z"
                fill="#AEC926"
                className="svg-object"
              />
            </svg>
          </div>
          <div className="flex items-start justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="auto"
              height="100%"
              viewBox="0 0 216 216"
              fill="none"
              className="circle anti-clock-wise"
            >
              <path
                d="M0.00106339 108.001C0.00106294 93.818 2.79457 79.7741 8.22208 66.6709C13.6496 53.5677 21.6048 41.6619 31.6335 31.6332C41.6623 21.6045 53.5681 13.6492 66.6713 8.22173C79.7744 2.79422 93.8183 0.00072246 108.001 0.000727701C122.184 0.000732942 136.228 2.79424 149.331 8.22176C162.434 13.6493 174.34 21.6045 184.369 31.6332C194.397 41.662 202.353 53.5678 207.78 66.671C213.208 79.7742 216.001 93.818 216.001 108.001L108.001 108.001L0.00106339 108.001Z"
                fill="#AEC926"
                className="svg-object"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100%"
              height="auto"
              viewBox="0 0 217 216"
              fill="none"
              className="circle clock-wise"
            >
              <path
                d="M216.998 108.001C216.998 129.361 210.664 150.242 198.797 168.002C186.929 185.763 170.062 199.605 150.328 207.78C130.593 215.954 108.878 218.093 87.9281 213.926C66.9782 209.758 47.7344 199.472 32.6303 184.368C17.5263 169.264 7.24026 150.02 3.07305 129.07C-1.09415 108.121 1.04461 86.4053 9.21887 66.6709C17.3931 46.9365 31.2358 30.0692 48.9963 18.202C66.7568 6.33482 87.6375 0.000732167 108.998 0.000732422L108.998 108.001L216.998 108.001Z"
                fill="#AEC926"
                className="svg-object"
              />
            </svg>
          </div>
        </div>

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
      <About />
      <Skills />
      <Footer />
    </>
  );
}

export default App;
