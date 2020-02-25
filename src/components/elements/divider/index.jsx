import React, { useContext } from 'react';
import IntroDivider from './intro_divider';
import PresentationLegend from './presentation_legend';
import story from '../../narrative/story';
import { store } from 'utils/store';
import styleUtils from 'utils/styles';
import styled from '@emotion/styled';

import { handleClickPlay, PlayButton } from './presentation_legend';

import {
  ShiftOutHOC,
  elementDimensions,
  OutlinedAbsoluteDiv,
  StyledSVG
} from '../element_base';

const width = elementDimensions.DividerWidth;
const height = '100%';

const Divider = props => {
  const { state } = useContext(store);
  const currentSlide = story[state.currentSlideNumber];

  let outlineColorBasedOnTheme;
  switch (currentSlide.theme) {
    case 'MainIdeasTeal':
      outlineColorBasedOnTheme = styleUtils.offWhite;
      break;
    case 'caseStudyGrey':
      outlineColorBasedOnTheme = styleUtils.offWhite;
      break;
    case 'dataStatsWhite':
      outlineColorBasedOnTheme = styleUtils.darkGray;
      break;
    default:
      outlineColorBasedOnTheme = styleUtils.offWhite;
      break;
  }

  return (
    <DividerDiv>
      {currentSlide.end <= 6 ? (
        <PlayButton
          width={30}
          style={{position: 'fixed', top: '0px', right: '28%', zIndex:100}}
          color='white'
          handleClickPlay={handleClickPlay}
        />
      ) : (
        ' '
      )}
      <StyledSVG>
        <line
          className='cls-5'
          stroke={outlineColorBasedOnTheme}
          x1='39'
          y1='-9.4'
          x2='39'
          y2={window.outerHeight}
        />
      </StyledSVG>
      <ShiftOutHOC
        startingSlide={0}
        endingSlide={6}
        height={height}
        width={width}
        opacity='1'
      >
        <IntroDivider />
      </ShiftOutHOC>
      <ShiftOutHOC opacity='1' startingSlide={6} height={height} width={width}>
        <PresentationLegend
          outlineColorBasedOnTheme={outlineColorBasedOnTheme}
        />
      </ShiftOutHOC>
    </DividerDiv>
  );
};

//styles

const DividerDiv = styled(OutlinedAbsoluteDiv)({
  width: width,
  height: height,
  flexDirection: 'column',
  right: elementDimensions.BufferWidth * 3 + elementDimensions.TextDivWidth
});

export default Divider;
