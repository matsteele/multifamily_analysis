import React from "react";
import { css } from "@emotion/core";
import { ShiftOutHOC, elementDimensions } from "../../elements/element_base";
import styled from "@emotion/styled";

import s from "../storyStarts";


export default function MajorProblems() {
  return (
    <>
      <UpperDiv>two major problems in the urban real estate market</UpperDiv>
      <div
        css={css`
          margin-left: 10%;
          justify-content: space-evenly;
          flex-direction: column;
          display: flex;
          height: 100%;
        `}
      >
        <BaseDiv>
          <ShiftOutHOC
            startingSlide={s._2_strt + 1}
            endingSlide={s._2_strt + 5}
            height="25%"
            width="75%"
          >
            <h1>
              <strong>1. access to capital </strong>
            </h1>
            <TabbedText>for multi-family developers</TabbedText>
          </ShiftOutHOC>
        </BaseDiv>
        <br />
        <br />
        <br />
        <br />
        <br />
        <BaseDiv>
          <ShiftOutHOC
            startingSlide={s._2_strt + 3}
            endingSlide={s._2_strt + 5}
            height="25%"
            width="75%"
          >
            <h1>
              <strong>2. misalignment of interests </strong>
            </h1>
            <TabbedText>with local stakeholders for more density</TabbedText>
          </ShiftOutHOC>
        </BaseDiv>
      </div>
    </>
  );
}



const BaseDiv = styled.div({
  width: "50%",
  height: "20%",
  left: elementDimensions.BufferWidth*2,
  top: elementDimensions.TopBuffer,
  color: "white",
  lineHeight: 1,
});

const UpperDiv = styled(BaseDiv)({
  width: '90%',
  top: '20%',
  marginBottom: 100,
  fontSize: '60px'
});


const TabbedText = styled.div({
  marginLeft: "10%"
})
