import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import "@splidejs/react-splide/css/skyblue";

const Carousel = ({kontent}) => {
  const options = {
    type: "loop",
    perPage: 3,
    speed: 1000,
    width: "90%",
    perMove: 1,
    gap: 40,
    autoplay: true,
    intervals: 5000,
    keyboard: true,
  };
  return (
    <div className="flex items-center justify-center">
      <Splide
        className="h-[200px]"
        options={options}
        aria-label="My Favorite Images"
      >
        {kontent.map((item, index) => {
          return (
            <SplideSlide key={index}>
              <img src={item.img} alt={`image ${index}`} />
            </SplideSlide>
          );
        })}
      </Splide>
    </div>
  );
}

export default Carousel