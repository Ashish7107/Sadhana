import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import image1 from "./assets/research.png";
import image2 from "./assets/analysis.png";
import image3 from "./assets/visualize.png";
import image4 from "./assets/content.png";
import image5 from "./assets/farmbill.jpeg";
import image6 from "./assets/automation1.png";
import image7 from "./assets/automotive.png";

import Carousel from "./components/Carousel";
import img1 from "./assets/1.png";
import Card from "./components/Card";
import Intro from "./components/Intro";
import { InfiniteSlider } from "./components/InfiniteSlider";
import Blogs from "./components/Blogs";
import Testimonials from "./components/Testimonials";
import TestimonialCarousel from "./components/TestimonialCarousel";
import SubHeading from "./components/SubHeading";

function App() {
  const slides = [img1, img1, img1];
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <nav className=" ">
          <Navbar />
        </nav>

        <main className="flex-grow">
          <div className="flex ">
            <Intro />
          </div>

          <SubHeading name={"Area of Experties"} />
          <div className="md:flex md:flex-col-1 md:gap-8 pb-6 pl-9 justify-between ">
            <Card
              heading="Research"
              image={image1}
              text={
                "As a research analyst, my expertise lies in both secondary and primary research. I have the ability to find a needle in a haystack!"
              }
            />
            <Card
              heading="Analyse "
              image={image2}
              text={
                "I have the proficiency to analyse unprocessed historical qualitative and quantitative data. By leveraging this information, I conduct a comprehensive evaluation of market dynamics and can project anticipated data trends accordingly."
              }
            />
            <Card
              heading="Visualize"
              image={image3}
              text={
                "A detail oriented number person with data visualization capabilities and a knack for informative and eye-catching presentation skills using MS office, Power BI, and Tableau "
              }
            />
            <Card
              heading="Content"
              image={image4}
              text={
                "Crafting narratives and storyboarding from data trends is another strength of mine."
              }
            />
          </div>
          <div className="pt-8">
            <SubHeading name={"Industries"} />
            <InfiniteSlider />
          </div>

          <SubHeading name={"Blogs"} />
          <div className="md:flex md:flex-col-1 md:gap-8 pb-6 pl-9 justify-between sm: space-y-6">
            <Blogs
              heading="Economy Degradation and Stepping Up of Automation"
              image={image6}
              text={
                "India's economy, hit by COVID, seeks recovery. Tech and pharma offer hope. IT accelerates digital transformation; supply chains adapt......"
              }
              link={
                "https://medium.com/@yadavsadhana94/economy-degradation-and-stepping-up-of-automation-f6369db41778"
              }
            />
            <Blogs
              heading="Farmer Bill: Opening Floodgates for Multinationals or Building Bridges for our Bread Makers?"
              image={image5}
              text={
                "Opening Floodgates for Multinationals or Building Bridges for our Bread Makers? Before the formation of the Agricultural..."
              }
              link={""}
            />
            <Blogs
              heading="Evolution of Digital Transformation in Automotive"
              image={image7}
              text={
                "Evolution of Digital Transformation in Automotive Every industry is embracing the digital revolution to reap maximum benefits using interactive tools that facilitate communication, decision-making, and..."
              }
              link={
                "https://medium.com/@yadavsadhana94/evolution-of-digital-transformation-in-automotive-ee205501fe66"
              }
            />
          </div>
          <SubHeading name={"Testimonials"} />

          <div className="md:flex md:flex-col-1 md:gap-8 pb-6  justify-center">
            <TestimonialCarousel />
          </div>
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </>
  );
}

export default App;
