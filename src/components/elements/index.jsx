import React, { useContext, useEffect } from 'react';
import Title from './title';
import Source from './source';
import Discuss from './discuss';
import Divider from './divider';
import Display from './display';
import Background from './background';
import { store } from '../../utils/store';
import story from '../narrative/story';
import styled from '@emotion/styled';

const AbsoluteElements = props => {
  const { state, dispatch } = useContext(store);
  const currentSlideNumber = state.currentSlideNumber;
  const currentSlide = story[currentSlideNumber];

  useEffect(() => {
    const screenWidths = window.scrollY / window.outerHeight;
    console.log(
      window.outerHeight, 
      screenWidths,
      window.scrollY,
      currentSlide.start,
      currentSlide.end,
      currentSlide.center,
      currentSlide.center * screenWidths
    );
    if (screenWidths > currentSlide.end) {
      const nextSlideNumber = currentSlideNumber + 1;
      dispatch({
        type: 'SET_SLIDE_NUMBER',
        payload: nextSlideNumber
      });
    } else if (screenWidths < currentSlide.start) {
      const nextSlideNumber = currentSlideNumber - 1;
      dispatch({
        type: 'SET_SLIDE_NUMBER',
        payload: nextSlideNumber
      });
    }
    // eslint-disable-next-line
  }, [window.scrollY]);

  return (
    <AbsoluteElementsContainer>
      <SlideInstructions>
        slide down 🔻 for animated content at your own pace
      </SlideInstructions>
      <br></br>
      <br></br>
      <SlideInstructions>
        or click play{' '}
        <svg height='12' width='30' viewBox='0 0 700 700'>
          <path
            fill='white'
            xmlns='http://www.w3.org/2000/svg'
            d='M486.413,221.412L122.347,12.916c-52.938-30.318-95.852-5.44-95.852,55.563v415.652c0,61.004,42.914,85.882,95.852,55.563    l364.066-208.49C539.351,300.887,539.351,251.731,486.413,221.412z'
          />
        </svg>{' '}
        to scroll automatically{' '}
      </SlideInstructions>
      <Background />
      <Title />
      <Display />
      <Discuss />
      <Divider />
      <Source />
    </AbsoluteElementsContainer>
  );
};

export default AbsoluteElements;

export const AbsoluteElementsContainer = styled.div({
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  height: '100%'
});

export const SlideInstructions = styled.p({
  color: 'white'
});
