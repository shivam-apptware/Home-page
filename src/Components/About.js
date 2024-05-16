import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import mobile1 from "../Assets/mobile1.jpg";
import mobile2 from "../Assets/mobile2.jpg";
import mobile3 from "../Assets/mobile3.jpg";
import Navbar from "./Navbar";
import "../About.css";

const About = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div>
      <Navbar />
      <div className="carousel-container">
        <Slider {...sliderSettings}>
          <div className="carousel-slide">
            <img src={mobile1} alt="Mobile 1" className="carousel-image" />
          </div>
          <div className="carousel-slide">
            <img src={mobile2} alt="Mobile 2" className="carousel-image" />
          </div>
          <div className="carousel-slide">
            <img src={mobile3} alt="Mobile 3" className="carousel-image" />
          </div>
        </Slider>
        <div className="accordion-section">
          <Accordion defaultExpanded>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <Typography variant="h6">Who We Are</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                We are a leading mobile shop dedicated to providing the latest
                and greatest in mobile technology to our customers. Our team is
                passionate about helping you find the perfect device to fit your
                needs and lifestyle.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2-content"
              id="panel2-header"
            >
              <Typography variant="h6">Our Mission</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Our mission is to make the latest mobile technology accessible
                to everyone. We strive to offer competitive prices, exceptional
                customer service, and a wide selection of products to ensure
                that every customer finds exactly what they're looking for.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel3-content"
              id="panel3-header"
            >
              <Typography variant="h6">Why Choose Us</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                - Extensive Selection: We carry a wide range of mobile phones
                from top brands to suit every budget and preference.
                <br />
                - Expert Advice: Our knowledgeable staff is here to provide
                expert advice and help you make informed decisions about your
                purchase.
                <br />
                - Convenient Location: Located in the heart of the city, our
                store is easily accessible and convenient for all customers.
                <br />- Exceptional Service: We pride ourselves on providing
                exceptional customer service and support before, during, and
                after your purchase.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default About;
