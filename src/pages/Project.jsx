import { useHorizontalScroll } from "../hooks/useHorizontalScroll";
import Card from "../components/Card";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

function Project(props) {
  const projectData = props.data;
  const scrollRef = useHorizontalScroll();
  const projectScroll = document.querySelector("#project-scroller");

  const handleRightScroll = () => {
    const left = projectScroll.scrollLeft;
    projectScroll.scrollTo(left + 750, 90);
  };
  const handleLeftScroll = () => {
    const left = projectScroll.scrollLeft;
    projectScroll.scrollTo(left - 750, left + 90);
  };

  return (
    <section className="relative mt-20 mb-20 md:mt-40 md:mb-40">
      <div className="flex flex-col w-full items-center gap-10 h-full">
        <div className="flex justify-center items-baseline gap-20">
          <div className="relative">
            <h1>Projects</h1>
            <div className="absolute h-0.5 w-full bg-grass-500"></div>
          </div>
        </div>
        <button
          className="absolute left-5 top-[60%] translate-y-1/2 z-[99] py-2"
          onClick={handleLeftScroll}
        >
          <BiChevronLeft />
        </button>
        <button
          className="absolute right-5 top-[60%] translate-y-1/2 z-[99] py-2"
          onClick={handleRightScroll}
        >
          <BiChevronRight />
        </button>
        <div
          className="relative cards w-full overflow-x-scroll flex gap-10 md:gap-20 px-10 md:px-20 cursor-all-scroll"
          id="project-scroller"
          ref={scrollRef}
        >
          {projectData.map((item) => {
            return (
              <Card
                key={item.id}
                name={item.Name}
                type={item.Type}
                cover={item.Cover}
                software1={item.Software1}
                id={item.id}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Project;
