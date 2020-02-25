import React, { useContext, useState, useEffect } from 'react';
import story from '../../narrative/story';
import { store } from 'utils/store';
import styleUtils from 'utils/styles';
import styled from '@emotion/styled';

import { animateScroll as scroll } from 'react-scroll';

import { StyledSVG } from '../element_base';

export const handleClickPlay = () => {
  const lastStory = story[story.length - 1];
  scroll.scrollTo(lastStory.center * window.outerHeight, {
    duration: 100000,
    // delay: 50,
    smooth: 'linear'
  });
};

export default function PresentationLegend(props) {
  const [circles, setCircles] = useState('');
  const [hoveredSectionStart, sethoveredSectionStart] = useState('none');
  const { state } = useContext(store);
  const currentSlide = story[state.currentSlideNumber];

  let backgroundColorBasedOnTheme;
  switch (currentSlide.theme) {
    case 'MainIdeasTeal':
      backgroundColorBasedOnTheme = styleUtils.brightTeal;
      break;
    case 'caseStudyGrey':
      backgroundColorBasedOnTheme = styleUtils.darkGray;
      break;
    case 'dataStatsWhite':
      backgroundColorBasedOnTheme = styleUtils.offWhite;
      break;
    default:
      backgroundColorBasedOnTheme = styleUtils.brightTeal;
      break;
  }

  const handleClick = e => {
    if (e.target.id > 0) {
      scroll.scrollTo(e.target.id * window.outerHeight);
    }
  };

  const handleMouseIn = e => {
    e.target.style.r = '15';
    sethoveredSectionStart(e.target.id);
  };

  const handleMouseOut = e => {
    e.target.style.r = '8';
    sethoveredSectionStart('');
  };

  const createCircles = () => {
    return (
      <StyledSVG
        fill='none'
        stroke={props.outlineColorBasedOnTheme}
        strokeLinecap='round'
        id='testing'
      >
        {story.map(function(item, i) {
          const transitionDistance = 40;
          const isSectionCircleHovered =
            hoveredSectionStart === item.center.toString();
          const LegendItem =
            item.section === currentSlide.section ? (
              <LegendCircleWhenClicked
                key={`${item.section}_${i}`}
                yPosition={transitionDistance * i - 15}
                stroke={props.outlineColorBasedOnTheme}
              />
            ) : (
              <React.Fragment key={`${item.section}_${i}`}>
                <g
                  onMouseEnter={e => handleMouseIn(e)}
                  onMouseLeave={e => handleMouseOut(e)}
                  onClick={e => handleClick(e)}
                  key={`container_${item.section}_${i}`}
                >
                  <circle
                    css={{
                      transition: 'all 1000ms linear'
                    }}
                    id={item.center}
                    key={`legend_${item.section}_${i}`}
                    cx='39'
                    cy={transitionDistance * i}
                    r='8'
                    fill={props.outlineColorBasedOnTheme}
                    opacity={isSectionCircleHovered ? '1' : '.5'}
                  />
                  {isSectionCircleHovered ? (
                    <>
                      <LegendCircleWhenClicked
                        key={`hover_animation_${i}`}
                        yPosition={transitionDistance * i - 15}
                        stroke={backgroundColorBasedOnTheme}
                      />
                      <text
                        css={{
                          transition: 'all 1000ms linear'
                        }}
                        x='0'
                        textAnchor='end'
                        y={transitionDistance * i + 3}
                      >
                        {item.section}
                      </text>
                    </>
                  ) : (
                    ''
                  )}
                </g>
              </React.Fragment>
            );

          return LegendItem;
        })}
      </StyledSVG>
    );
  };

  useEffect(() => {
    const circles = createCircles();
    setCircles(circles);
  }, [currentSlide, hoveredSectionStart]);

  return (
    <>
      <PlayButton
        color={props.outlineColorBasedOnTheme}
        handleClickPlay={handleClickPlay}
        width={50}
      />
      {/* <PauseButton color={props.outlineColorBasedOnTheme} onClick={handleClick} /> */}
      <SectionTitle />
      <SectionTitle
        background={backgroundColorBasedOnTheme}
        color={props.outlineColorBasedOnTheme}
        position='fixed'
        right='5px'
        top='60px'
        textAlign='right'
      >
        {currentSlide.section}
      </SectionTitle>
      <SectionTitle />
      {circles}
    </>
  );
}

const SectionTitle = styled.div(props => ({
  position: props.position,
  right: props.right,
  top: props.top,
  textAlign: props.textAlign,
  width: 200,
  height: '15%',
  display: 'flex',
  color: props.color,
  fontSize: '2em',
  background: props.background ? props.background : '',
  transition: 'background-color 1000ms linear'
}));

const LegendCircleWhenClicked = props => (
  <svg
    width='30'
    height='30'
    x='24'
    y={props.yPosition}
    viewBox='0 0 320 320'
    stroke={props.stroke}
    strokeLinecap='round'
    xmlns='http://www.w3.org/2000/svg'
    xlink='http://www.w3.org/1999/xlink'
  >
    <defs>
      <path id='r1'>
        <animate
          id='p1'
          attributeName='d'
          values='m160,160l0,0 0,0;m130,110l30,-17 30,17;m130,60l30,-17 30,17;m160,20l0,0 0,0'
          dur='6s'
          repeatCount='indefinite'
        />
        <animate
          attributeName='stroke-width'
          values='0;4;4;4;0'
          dur='6s'
          repeatCount='indefinite'
          begin='p1.begin'
        />
      </path>
      <path id='r2'>
        <animate
          attributeName='d'
          values='m160,160l0,0 0,0;m130,110l30,-17 30,17;m130,60l30,-17 30,17;m160,20l0,0 0,0'
          dur='6s'
          repeatCount='indefinite'
          begin='p1.begin+1s'
        />
        <animate
          attributeName='stroke-width'
          values='0;4;4;4;0'
          dur='6s'
          repeatCount='indefinite'
          begin='p1.begin+1s'
        />
      </path>
      <path id='r3'>
        <animate
          attributeName='d'
          values='m160,160l0,0 0,0;m130,110l30,-17 30,17;m130,60l30,-17 30,17;m160,20l0,0 0,0'
          dur='6s'
          repeatCount='indefinite'
          begin='p1.begin+2s'
        />
        <animate
          attributeName='stroke-width'
          values='0;4;4;4;0'
          dur='6s'
          repeatCount='indefinite'
          begin='p1.begin+2s'
        />
      </path>
      <path id='r4'>
        <animate
          id='p1'
          attributeName='d'
          values='m160,160l0,0 0,0;m130,110l30,-17 30,17;m130,60l30,-17 30,17;m160,20l0,0 0,0'
          dur='6s'
          repeatCount='indefinite'
          begin='p1.begin+3s'
        />
        <animate
          attributeName='stroke-width'
          values='0;4;4;4;0'
          dur='6s'
          repeatCount='indefinite'
          begin='p1.begin+3s'
        />
      </path>
      <path id='r5'>
        <animate
          attributeName='d'
          values='m160,160l0,0 0,0;m130,110l30,-17 30,17;m130,60l30,-17 30,17;m160,20l0,0 0,0'
          dur='6s'
          repeatCount='indefinite'
          begin='p1.begin+4s'
        />
        <animate
          attributeName='stroke-width'
          values='0;4;4;4;0'
          dur='6s'
          repeatCount='indefinite'
          begin='p1.begin+4s'
        />
      </path>
      <path id='r6'>
        <animate
          attributeName='d'
          values='m160,160l0,0 0,0;m130,110l30,-17 30,17;m130,60l30,-17 30,17;m160,20l0,0 0,0'
          dur='6s'
          repeatCount='indefinite'
          begin='p1.begin+5s'
        />
        <animate
          attributeName='stroke-width'
          values='0;4;4;4;0'
          dur='6s'
          repeatCount='indefinite'
          begin='p1.begin+5s'
        />
      </path>
    </defs>
    <use href='#r1' />
    <use href='#r1' transform='rotate(60 160 160)' />
    <use href='#r1' transform='rotate(120 160 160)' />
    <use href='#r1' transform='rotate(180 160 160)' />
    <use href='#r1' transform='rotate(240 160 160)' />
    <use href='#r1' transform='rotate(300 160 160)' />
    <use href='#r2' transform='rotate(30 160 160)' />
    <use href='#r2' transform='rotate(90 160 160)' />
    <use href='#r2' transform='rotate(150 160 160)' />
    <use href='#r2' transform='rotate(210 160 160)' />
    <use href='#r2' transform='rotate(270 160 160)' />
    <use href='#r2' transform='rotate(330 160 160)' />
    <use href='#r3' />
    <use href='#r3' transform='rotate(60 160 160)' />
    <use href='#r3' transform='rotate(120 160 160)' />
    <use href='#r3' transform='rotate(180 160 160)' />
    <use href='#r3' transform='rotate(240 160 160)' />
    <use href='#r3' transform='rotate(300 160 160)' />
    <use href='#r4' transform='rotate(30 160 160)' />
    <use href='#r4' transform='rotate(90 160 160)' />
    <use href='#r4' transform='rotate(150 160 160)' />
    <use href='#r4' transform='rotate(210 160 160)' />
    <use href='#r4' transform='rotate(270 160 160)' />
    <use href='#r4' transform='rotate(330 160 160)' />
    <use href='#r5' />
    <use href='#r5' transform='rotate(60 160 160)' />
    <use href='#r5' transform='rotate(120 160 160)' />
    <use href='#r5' transform='rotate(180 160 160)' />
    <use href='#r5' transform='rotate(240 160 160)' />
    <use href='#r5' transform='rotate(300 160 160)' />
    <use href='#r6' transform='rotate(30 160 160)' />
    <use href='#r6' transform='rotate(90 160 160)' />
    <use href='#r6' transform='rotate(150 160 160)' />
    <use href='#r6' transform='rotate(210 160 160)' />
    <use href='#r6' transform='rotate(270 160 160)' />
    <use href='#r6' transform='rotate(330 160 160)' />
  </svg>
);

export const PlayButton = props => {
  return (
    <svg
      className='bounceOnHover'
      height='50px'
      width={props.width}
      viewBox='0 -200 1000 1000'
      style={props.style}
    >
      <path
        onClick={e => props.handleClickPlay(e)}
        id='play'
        fill={props.color}
        xmlns='http://www.w3.org/2000/svg'
        d='M486.413,221.412L122.347,12.916c-52.938-30.318-95.852-5.44-95.852,55.563v415.652c0,61.004,42.914,85.882,95.852,55.563    l364.066-208.49C539.351,300.887,539.351,251.731,486.413,221.412z'
      />
    </svg>
  );
};

// const PauseButton = props => {
//   return (
//     <svg
//       version='1.0'
//       xmlns='http://www.w3.org/2000/svg'
//       width='20'
//       height='68'
//       viewBox='0 0 1140.000000 1280.000000'
//       preserveAspectRatio='xMidYMid meet'
//     >
//       <metadata>
//         Created by potrace 1.15, written by Peter Selinger 2001-2017
//       </metadata>
//       <g
//         transform='translate(0.000000,1280.000000) scale(0.100000,-0.100000)'
//         fill='#000000'
//         stroke='none'
//       >
//         <path
//           onClick={e => props.onClick(e)}
//           id='pause'
//           fill={props.color}
//           d='M2157 12789 c-476 -46 -922 -218 -1240 -476 -240 -196 -437 -478
// -527 -754 -139 -425 -242 -1194 -310 -2304 -5 -93 -12 -206 -15 -250 -11 -165
// -35 -775 -47 -1180 -16 -545 -16 -2305 0 -2850 12 -405 36 -1015 47 -1180 3
// -44 10 -156 15 -250 68 -1110 171 -1879 310 -2304 110 -337 353 -646 680 -866
// 108 -72 334 -183 470 -230 544 -188 1152 -192 1695 -10 588 196 1017 600 1185
// 1115 241 743 382 2636 382 5150 0 2514 -141 4407 -382 5150 -204 626 -792
// 1082 -1562 1209 -245 41 -483 51 -701 30z'
//         />
//         <path
//           fill={props.color}
//           d='M8750 12789 c-47 -5 -140 -18 -208 -30 -772 -129 -1358 -583 -1562
// -1209 -241 -743 -382 -2636 -382 -5150 0 -2514 141 -4407 382 -5150 168 -515
// 597 -919 1185 -1115 543 -182 1151 -178 1695 10 136 47 362 158 470 230 327
// 220 570 529 680 866 139 425 242 1194 310 2304 5 94 12 206 15 250 11 165 35
// 775 47 1180 16 545 16 2305 0 2850 -12 405 -36 1015 -47 1180 -3 44 -10 157
// -15 250 -68 1110 -171 1879 -310 2304 -70 214 -196 422 -360 594 -172 180
// -318 286 -545 397 -225 110 -456 181 -718 221 -153 23 -502 33 -637 18z'
//         />
//       </g>
//     </svg>
//   );
// };
