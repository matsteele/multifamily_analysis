import React, { useContext } from "react";
import { store } from "utils/store";
import story from "../../narrative/story";
import styleUtils from "utils/styles";
import styled from "@emotion/styled";

import {
  ShiftOutHOC,
  elementDimensions,
  OutlinedAbsoluteDiv
} from "../element_base";

// TODO transparent after 50% of screenHeight

const width = elementDimensions.DisplayWidth * 0.7;
const height = elementDimensions.TitleHeight;

const Title = () => {
  const { state } = useContext(store);
  const currentSlide = story[state.currentSlideNumber];

  let emphasisColorBasedOnTheme;
  switch (currentSlide.theme) {
    case "MainIdeasTeal":
      emphasisColorBasedOnTheme = styleUtils.offWhite;
      break;
    case "caseStudyGrey":
      emphasisColorBasedOnTheme = styleUtils.offWhite;
      break;
    case "dataStatsWhite":
      emphasisColorBasedOnTheme = styleUtils.darkGray;
      break;
  }

  return (
    <SourceDiv color={emphasisColorBasedOnTheme}>
      {currentSlide.source
        ? currentSlide.source.map(eachpoint => {
            return (
              <ShiftOutHOC
                startingSlide={eachpoint.start}
                endingSlide={eachpoint.end}
                height={height}
                width={width}
                over={true}
              >
                source: {eachpoint.text}
              </ShiftOutHOC>
            );
          })
        : ""}
    </SourceDiv>
  );
};

//styles


const SourceDiv = styled(OutlinedAbsoluteDiv)(props => ({
  width: width,
  height: height,
  left: elementDimensions.DisplayWidth *.5,
  top:
    elementDimensions.DisplayHeight +
    elementDimensions.TitleHeight ,
  color: props.color,
  fontSize: "20px",
  lineHeight: 1
}));


export default Title;
