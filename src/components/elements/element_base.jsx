import styled from "@emotion/styled";
import React, { useState, useEffect } from "react";

export const ShiftOutHOC = props => {
  const [visible, setVisible] = useState(false);
  const [shiftOutFactor, setshiftOutFactor] = useState(0);
  const [screenWidths, setscreenWidths] = useState(
    window.scrollY / window.outerHeight
  );

  const defaultShiftInFactor = () => {
    const _defaultShiftInFactor =
      Math.floor(screenWidths) * window.outerHeight +
      window.outerHeight -
      window.scrollY;
    if (_defaultShiftInFactor < 0) {
      return 0;
    } else {
      return _defaultShiftInFactor;
    }
  };

  const defaultShiftOutFactor = () => {
    const _defaultShiftOutFactor = -(
      window.scrollY -
      Math.floor(screenWidths) * window.outerHeight
    );
    if (_defaultShiftOutFactor >= 0) {
      return 0;
    } else {
      return _defaultShiftOutFactor;
    }
  };

  useEffect(() => {
    setscreenWidths(window.scrollY / window.outerHeight);
    const SlideStarts = Math.floor(screenWidths) === props.startingSlide;
    const SlideEnds = Math.floor(screenWidths) === props.endingSlide;

    const drawInSlide = () => {
      if (SlideStarts) {
        setVisible(true);
        setshiftOutFactor(defaultShiftInFactor());
      }
    };

    const widthdrawSlide = () => {
      if (SlideEnds) {
        setVisible(true);
        setshiftOutFactor(defaultShiftOutFactor());
      }
    };

    const makeSlideInvisOutsideofContext = () => {
      if (
        screenWidths < props.startingSlide ||
        screenWidths > props.endingSlide + 1
      ) {
        setVisible(false);
      } else {
        setVisible(true);
      }
    };

    drawInSlide();
    widthdrawSlide();
    makeSlideInvisOutsideofContext();
    // eslint-disable-next-line
  }, [window.scrollY, shiftOutFactor]);

  return (
    <Container
      goUpBy={shiftOutFactor}
      display={visible ? "flex" : "none"}
      height={props.height}
      width={props.width}
      opacity={
        props.opacity === "text"
          ? 1
          : shiftOutFactor !== 0
          ? ".4"
          : props.opacity
      }
      over={props.over}
    >
      {props.children}
    </Container>
  );
};

export const ShiftOutImageHOC = props => {
  return (
    <ShiftOutHOC
      startingSlide={props.startingSlide}
      endingSlide={props.endingSlide}
      opacity="1"
    >
      <svg height="100%" width="100%">
        <image height="100%" width="100%" href={props.imgURL} />
      </svg>
    </ShiftOutHOC>
  );
};

//styles

export const OutlinedAbsoluteDiv = styled.div({
  position: "fixed",
  display: "flex",
  alignItems: "flex-start",
  justifyContent: "center"
});

const Container = styled(OutlinedAbsoluteDiv)(props => ({
  width: props.width ? props.width : "100%",
  height: props.height ? props.height : "100%",
  display: props.display,
  transition: "all 100ms linear",
  transform: props.over
    ? `translate(${props.goUpBy}px,0)`
    : `translate(0,${props.goUpBy}px)`,
  flexDirection: "column",
  opacity: props.opacity
}));

const TextDivWidth = window.innerWidth * 0.2;
const BufferWidth = window.innerWidth * 0.01;
const DividerWidth = window.innerWidth * 0.05;
const DisplayWidth =
  window.innerWidth - TextDivWidth - DividerWidth - BufferWidth * 6;
const DisplayHeight = window.innerHeight * 0.6;
const TitleHeight = window.innerHeight * 0.25;

const TopBuffer = TitleHeight + BufferWidth * 2;

export const elementDimensions = {
  TextDivWidth,
  BufferWidth,
  DividerWidth,
  DisplayWidth,
  DisplayHeight,
  TitleHeight,
  TopBuffer
};

export const StyledSVG = styled.svg({
  overflow: "visible !important",
  height: "100%",
  width: "77px"
});
