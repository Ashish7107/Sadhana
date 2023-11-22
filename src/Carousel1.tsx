// Carousel.tsx
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Testimonials from "./components/Testimonials";
import "./Carousel.css"; // Your custom styles
function SampleNextArrow(props: { className: any; style: any; onClick: any }) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props: { className: any; style: any; onClick: any }) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "green" }}
      onClick={onClick}
    />
  );
}

const Carousel: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: (
      <SampleNextArrow
        className={undefined}
        style={undefined}
        onClick={undefined}
      />
    ),
    prevArrow: (
      <SamplePrevArrow
        className={undefined}
        style={undefined}
        onClick={undefined}
      />
    ),
  };

  const cards = [
    {
      image: "../assets/man.jpeg",
      description:
        "Sadhana brings a strong and very insightful approach to her work. Her point of view on different aspect of a consulting or advisory project has always impressed me and was also being used as a benchmark for rest of the team. For instance, her work on X-ray inspection technologies, and Discrete manufacturing setup analysis for Industrial IoT was very well received by the client which was a major technology supplier in the IoT space. I have had the honor of working and knowing Sadhana in different projects in my tenure at MarketsandMarkets and I would strongly recommend her for any strategy, market research, and advisory roles in future.",
      name: "Atul Srivastava",
      designation: "Engagement Manager at Zinnov | Ex Deloitte",
    },
    {
      image: "../assets/man.jpeg",
      description:
        "Sadhana brings a strong and very insightful approach to her work. Her point of view on different aspect of a consulting or advisory project has always impressed me and was also being used as a benchmark for rest of the team. For instance, her work on X-ray inspection technologies, and Discrete manufacturing setup analysis for Industrial IoT was very well received by the client which was a major technology supplier in the IoT space. I have had the honor of working and knowing Sadhana in different projects in my tenure at MarketsandMarkets and I would strongly recommend her for any strategy, market research, and advisory roles in future.",
      name: "Atul Srivastava",
      designation: "Engagement Manager at Zinnov | Ex Deloitte",
    },
    {
      image: "../assets/man.jpeg",
      description:
        "Sadhana brings a strong and very insightful approach to her work. Her point of view on different aspect of a consulting or advisory project has always impressed me and was also being used as a benchmark for rest of the team. For instance, her work on X-ray inspection technologies, and Discrete manufacturing setup analysis for Industrial IoT was very well received by the client which was a major technology supplier in the IoT space. I have had the honor of working and knowing Sadhana in different projects in my tenure at MarketsandMarkets and I would strongly recommend her for any strategy, market research, and advisory roles in future.",
      name: "Atul Srivastava",
      designation: "Engagement Manager at Zinnov | Ex Deloitte",
    },
    {
      image: "../assets/man.jpeg",
      description:
        "Sadhana brings a strong and very insightful approach to her work. Her point of view on different aspect of a consulting or advisory project has always impressed me and was also being used as a benchmark for rest of the team. For instance, her work on X-ray inspection technologies, and Discrete manufacturing setup analysis for Industrial IoT was very well received by the client which was a major technology supplier in the IoT space. I have had the honor of working and knowing Sadhana in different projects in my tenure at MarketsandMarkets and I would strongly recommend her for any strategy, market research, and advisory roles in future.",
      name: "Atul Srivastava",
      designation: "Engagement Manager at Zinnov | Ex Deloitte",
    },
    {
      image: "../assets/man.jpeg",
      description:
        "Sadhana brings a strong and very insightful approach to her work. Her point of view on different aspect of a consulting or advisory project has always impressed me and was also being used as a benchmark for rest of the team. For instance, her work on X-ray inspection technologies, and Discrete manufacturing setup analysis for Industrial IoT was very well received by the client which was a major technology supplier in the IoT space. I have had the honor of working and knowing Sadhana in different projects in my tenure at MarketsandMarkets and I would strongly recommend her for any strategy, market research, and advisory roles in future.",
      name: "Atul Srivastava",
      designation: "Engagement Manager at Zinnov | Ex Deloitte",
    },
  ];

  const CustomPrevArrow: React.FC = () => <div className="arrow">&#9664;</div>; // Unicode character for left arrow
  const CustomNextArrow: React.FC = () => <div className="arrow">&#9654;</div>; // Unicode character for right arrow

  return (
    <Slider {...settings}>
      {cards.map((card, index) => (
        <div key={index}>
          <Testimonials
            description={card.description}
            name={card.name}
            designation={card.designation}
            image={""}
          />
        </div>
      ))}
    </Slider>
  );
};

export default Carousel;
