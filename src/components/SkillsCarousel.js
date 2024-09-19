import React, { useState } from "react";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
//import Pagination from "docs/src/modules/components/Pagination";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const styles = {
  root: {
    position: "relative",
  },
  slide: {
    padding: 15,
    minHeight: 100,
    color: "#fff",
  },
  slide1: {
    backgroundColor: "#FEA900",
  },
  slide2: {
    backgroundColor: "#B3DC4A",
  },
  slide3: {
    backgroundColor: "#6AC0FF",
  },
};

const SkillsCarousel = () => {
  const [index, setIndex] = useState(0);
  //   const handleChangeIndex = (index) => {
  //     setIndex(index);
  //   };
  return (
    <>
      <div style={styles.root}>
        <AutoPlaySwipeableViews
          index={index}
          onChangeIndex={this.handleChangeIndex}
        >
          <div style={Object.assign({}, styles.slide, styles.slide1)}>
            slide n°1
          </div>
          <div style={Object.assign({}, styles.slide, styles.slide2)}>
            slide n°2
          </div>
          <div style={Object.assign({}, styles.slide, styles.slide3)}>
            slide n°3
          </div>
        </AutoPlaySwipeableViews>
        {/* <Pagination dots={3} index={index} onChangeIndex={handleChangeIndex} /> */}
      </div>
    </>
  );
};

export default SkillsCarousel;
