
import React, { useContext} from "react";
import { store } from "utils/store";
import story from "../../narrative/story";
import { ShiftOutHOC } from "../element_base";
//styles
import styled from "@emotion/styled";
import styleUtils from 'utils/styles';

const Background = () => {
  const { state } = useContext(store);
  const currentSlide = story[state.currentSlideNumber];
  let backgroundColorBasedOnTheme;

  switch (currentSlide.theme) {
    case "MainIdeasTeal":
      backgroundColorBasedOnTheme = styleUtils.brightTeal;
      break;
    case "caseStudyGrey":
      backgroundColorBasedOnTheme = styleUtils.darkGray;
      break;
    case "dataStatsWhite":
      backgroundColorBasedOnTheme = styleUtils.offWhite;
      break;
    default:
      backgroundColorBasedOnTheme = styleUtils.brightTeal;
      break;
      
  }

  return (
    <BackgroundColor  backColor={backgroundColorBasedOnTheme}>
      {currentSlide.background ? (
        <ShiftOutHOC
          height={window.outerHeight}
          width={window.outerWidth}
          endingSlide={currentSlide.background.end}
          startingSlide={currentSlide.background.start}
          opacity="1"
        >
          <svg height="100%" width="100%">
            <image
              height="100%"
              width="100%"
              x={currentSlide.background.xCenter}
              y={currentSlide.background.yCenter}
              href={currentSlide.background.image}
            />
          </svg>
        </ShiftOutHOC>
      ) : (
        ""
      )}
    </BackgroundColor>
  );
};

export default Background;


const BackgroundColor = styled.div(props => ({
  backgroundColor: props.backColor,
  width: "100%",
  height: "100%",
  position: "fixed",
  zIndex: "-1",
  transition: "background-color 1000ms linear"
}));
