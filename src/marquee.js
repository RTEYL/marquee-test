import { makeStyles } from "@material-ui/styles";
import React from "react";
import Arrow from "./arrow.svg";

const useStyles = makeStyles({
  headline: (props) => ({
    backgroundImage: `url(./${props.background})`,
    width: "45%",
  }),
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
    backgroundColor: "white",
    color: "black",
  },
});

const Marquee = ({ data }) => {
  const classes = useStyles({ ...data.blocks[0] });

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
