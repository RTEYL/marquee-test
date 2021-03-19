import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import Arrow from "./arrow.svg";
import img1 from "./slide_one.jpg";
import img2 from "./slide_two.jpg";
import img3 from "./slide_three.jpg";

const useStyles = makeStyles({
  headline: {
    width: "45%",
  },
  subhead: {
    width: "45%",
  },
  container: {
    maxWidth: "1440px",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    color: "white",
    wordBreak: "break-all",
  },
  cta: {
    padding: "5%",
    backgroundColor: "white",
    maxWidth: "1440px",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    wordBreak: "break-all",
    color: "black",
  },
});

const Marquee = ({ data }) => {
  const classes = useStyles({ ...data.blocks[0] });
  React.useEffect(() => {
    const img = [img1, img2, img3].filter((img) => {
      if (
        img.toString().split(/[/.]/g)[3] ===
        data.blocks[0].background.split(".")[0]
      )
        return img;

      return null;
    });
    document.querySelector(
      ".app-container"
    ).style.backgroundImage = `url(./${img})`;
  }, [data]);

  return (
    <>
      <div className={classes.container}>
        <h1 className={classes.headline}>{data.blocks[0].headline}</h1>
        <p className={classes.subhead}>{data.blocks[0].subhead}</p>
      </div>
      <div className={`${classes.cta} ${classes.container}`}>
        <p style={{ fontWeight: "bold" }}>{data.blocks[0].cta}</p>
        <p>
          LET"S TALK. <img src={Arrow} alt="arrow-icon" />
        </p>
      </div>
    </>
  );
};

export default Marquee;
