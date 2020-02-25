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

const Title = (props) => {
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
      emphasisColorBasedOnTheme = styleUtils.brightTeal;
      break;
  }
  let keyIndex = 0;
  // key won't attach
  return (
    <TitleDiv color={emphasisColorBasedOnTheme}>
      {currentSlide.title
        ? currentSlide.title.map(eachpoint => {
            keyIndex += 1
            return (
              <React.Fragment key={`title_${keyIndex}`}>
                <ShiftOutHOC
                  key={`title_${keyIndex}`}
                  startingSlide={eachpoint.start}
                  endingSlide={eachpoint.end}
                  height={height}
                  width={width}
                  over={true}
                >
                  {eachpoint.text}
                </ShiftOutHOC>
              </React.Fragment>
            );
          })
        : ""}
    </TitleDiv>
  );
};

//styles


const TitleDiv = styled(OutlinedAbsoluteDiv)(props => ({
  width: width,
  height: height,
  left: 20,
  top: elementDimensions.BufferWidth,
  color: props.color,
  fontSize: "50px",
  lineHeight: 1
}));


export default Title;
