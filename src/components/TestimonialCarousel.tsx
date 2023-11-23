// Carousel.tsx
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image1 from "../assets/atul.jpeg";

import Testimonials from "./Testimonials";
import "./Carousel.css"; // Your custom styles
import { Bold } from "react-feather";
function SampleNextArrow(props: { className: any; style: any; onClick: any }) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        fontSize: "18px", // Adjust the font size as needed
        color: "red", // Arrow color
        marginRight: "28px", // Adjust spacing from the right
      }}
      onClick={onClick}
    >
      &#8594; {/* Unicode character for right arrow */}
    </div>
  );
}

function SamplePrevArrow(props: { className: any; style: any; onClick: any }) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        font: Bold,
        fontSize: "18px ", // Adjust the font size as needed
        color: "gray", // Arrow color
        marginLeft: "-32px", // Adjust spacing from the left
      }}
      onClick={onClick}
    >
      &#8592; {/* Unicode character for left arrow */}
    </div>
  );
}

const TestimonialCarousel: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
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
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const cards = [
    {
      image: "/atul.jpeg",
      description:
        "Sadhana brings a strong and very insightful approach to her work. Her point of view on different aspect of a consulting or advisory project has always impressed me and was also being used as a benchmark for rest of the team. For instance, her work on X-ray inspection technologies, and Discrete manufacturing setup analysis for Industrial IoT was very well received by the client which was a major technology supplier in the IoT space. I have had the honor of working and knowing Sadhana in different projects in my tenure at MarketsandMarkets and I would strongly recommend her for any strategy, market research, and advisory roles in future.",
      name: "Atul Srivastava",
      designation: "Engagement Manager at Zinnov | Ex Deloitte",
    },
    {
      image: "/susmit.jpeg",
      description:
        "Sadhana is a highly consummate professional and a highly talented individual. Any organization is blessed to have a resource like her who goes the extra mile to deliver excellence, quality and efficiency at work",
      name: "Sushmit Chakraborty",
      designation:
        "Growth catalyst for enterprises across Al, Analytics, IoT & Digitization ",
    },
    {
      image: "/sebastian.jpeg",
      description:
        "I'm amazed by Sadhana's ability to learn quickly and gather exact client requirements, a skill she uses to benefit when making presentations to clients and her team. She is a highly focused person as well as analytical and can add to any team she is a part of. Her energy to make things happen was contagious and it helped us achieve great goals. One of the best market analysts I have worked with for sure.",
      name: "Sebastian David",
      designation:
        "Business Analyst at Servisource Recruitment, ECBA, IIBA Member. MSc Business Analytics",
    },
    {
      image: "/sharad.jpeg",
      description:
        "She is a great team player. She is really focused towards achieving her goals at the same time ensuring team and client success.",
      name: "Sharad Tapkir",
      designation: "Assistant Vice President | EXL Health",
    },
    {
      image: "/rahul.jpeg",
      description:
        "Sadhana is a gifted critical thinker with a rare combination of patience, spunk, and research skills. She is a very dedicated and attentive colleague. Her insights have helped me a lot to explore things in a very different perspective. She is an asset to the company and one of the best market researchers I have worked with so far",
      name: "Rahul Donge",

      designation:
        "Senior Analyst at MarketsandMarkets | Forecasting | Analytics | Primary & Secondary Research | Electronics & Semiconductor | ICT ",
    },
  ];

  const CustomPrevArrow: React.FC = () => <div className="arrow">&#9664;</div>; // Unicode character for left arrow
  const CustomNextArrow: React.FC = () => <div className="arrow">&#9654;</div>; // Unicode character for right arrow

  return (
    <Slider {...settings}>
      {cards.map((card, index) => (
        <div key={index} className="">
          <Testimonials
            description={card.description}
            name={card.name}
            designation={card.designation}
            image={card.image}
          />
        </div>
      ))}
    </Slider>
  );
};

export default TestimonialCarousel;
