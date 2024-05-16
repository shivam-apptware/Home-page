import React from "react";
import Navbar from "./Navbar";
import Box from "@mui/material/Box";
import { makeStyles } from "@material-ui/core/styles";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import mobile1 from "../Assets/mobile1.jpg";
import mobile2 from "../Assets/mobile2.jpg";
import mobile3 from "../Assets/mobile3.jpg";
import "../Home.css";

const useStyles = makeStyles({
  root: {
    marginBottom: 20,
  },
  image: {
    width: "100%",
    height: 200,
    objectFit: "cover",
  },
});

const Home = () => {
  const classes = useStyles();

  const cards = [
    {
      image: mobile1,
      title: "Best Deal On Mobile !",
      description: "Grab your dream mobile. Buy! We assure you the best.",
    },
    {
      image: mobile2,
      title: "Discount Section On Mobile",
      description: "Help you to get best Discount! Well Discount on each  .",
    },
    {
      image: mobile3,
      title: "Get information about mobile",
      description: "Get more information of your dream mobile and get it",
    },
  ];

  const accordionContent = [
    {
      title: "Best Mobile information",
      content: `This cell phone can be used to communicate over long distances without wires. It works by communicating with a nearby base station (also called a "mobile tower") which connects it to the main phone network. When moving, if the mobile phone gets too far away from the cell it is connected to, that cell sends a message to another cell to tell the new cell to take over the call. This is called a "hand off," and the call continues with the new cell the phone is connected to. The hand-off is done so well and carefully that the user will usually never even know that the call was transferred to another cell. As smart phones became more popular, they began to cost lesser money, and more people could afford them. Monthly plans became available for rates as low as US$30 or US$40 a month. Cell phones have become so cheap to own that they have mostly replaced pay phones and phone booths except for urban areas with many people.`,
    },
  ];

  return (
    <Box>
      <Navbar />
      <div className="page-container">
        <Grid container spacing={3} className="grid-container">
          {cards.map((card, index) => (
            <Grid key={index} item xs={12} sm={6} md={4}>
              <Card className={classes.root}>
                <img
                  src={card.image}
                  alt={`Mobile ${index + 1}`}
                  className={classes.image}
                />
                <CardContent>
                  <Typography variant="h6" component="h2">
                    {card.title}
                  </Typography>
                  <Typography variant="body2" component="p">
                    {card.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
      <div className="accordion-container">
        {accordionContent.map((content, index) => (
          <Accordion key={index} defaultExpanded>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls={`panel${index + 1}-content`}
              id={`panel${index + 1}-header`}
            >
              <Typography variant="h6">{content.title}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{content.content}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </div>
    </Box>
  );
};

export default Home;
