import React from "react";

import { ShiftOutHOC } from "../../elements/element_base";
import s from "../storyStarts";

export default function IntroText() {
  return (
    <svg
      id="Layer_1"
      data-name="Layer 1"
      height="100%"
      width="100%"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 576.18 369.03"
      fill="white"
    >
      testing
      <text transform="translate(180 127.79)" fontSize="84">
        <ShiftOutHOC
          startingSlide={s._10_strt}
          endingSlide={s._10_strt +4}
          height="25%"
        >SUMMARY</ShiftOutHOC>
      </text>
      <text transform="translate(180 127.79)" fontSize="84">
        <ShiftOutHOC
          startingSlide={s._10_strt + 4}
          endingSlide={s._10_strt + 7}
          height="25%"
        >THE END</ShiftOutHOC>
      </text>
    </svg>
  );
}
