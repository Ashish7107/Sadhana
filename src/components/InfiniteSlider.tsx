const LOGOS = [
  {
    logo: "/automation.png",
    name: "Automation",
  },
  {
    logo: "/automotive.png",
    name: "Automotive",
  },
  {
    logo: "/electronics.png",
    name: "Electronics",
  },
  {
    logo: "/factory.png",
    name: "Industries",
  },
  {
    logo: "/management.png",
    name: "Transportation",
  },
  {
    logo: "/Technology.png",
    name: "Technology",
  },
];

export const InfiniteSlider = () => {
  return (
    <div
      className="relative m-auto w-[500px] overflow-hidden bg-white before:absolute before:left-0 before:top-0 before:z-[2] 
    before:h-full before:w-[100px] before:bg-[linear-gradient(to_right,white_0%,rgba(255,255,255,0)_100%)] before:content-[''] 
    after:absolute after:right-0 after:top-0 after:z-[2] after:h-full after:w-[100px] after:-scale-x-100 after:bg-[linear-gradient(to_right,white_0%,rgba(255,255,255,0)_100%)] after:content-['']"
    >
      <div className="animate-infinite-slider flex w-[calc(250px*10)] ">
        {LOGOS.map((logo, index) => (
          <div
            className="slide flex w-[125px] items-center justify-center flex-col px-5"
            key={index}
          >
            <img src={logo.logo} alt="" />
            <p className="flex flex-col mb-4"> {logo.name}</p>
          </div>
        ))}
        {LOGOS.map((logo, index) => (
          <div
            className="slide flex w-[125px] items-center justify-center flex-col px-5"
            key={index}
          >
            <img src={logo.logo} alt="" />
            <p className="flex flex-col mb-4"> {logo.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
