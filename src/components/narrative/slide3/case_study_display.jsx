import React from "react";

import s from "../storyStarts";

import { ShiftOutImageHOC } from "../../elements/element_base";

export default function CaseStudyDisplay() {
  return (
    <>
      <svg height="100%" width="100%">
        <image
          height="100%"
          width="100%"
          href={require("./houstonComparison-01.svg")}
        />
      </svg>
      <ShiftOutImageHOC
        imgURL={require("./houstonComparison-pop.svg")}
        startingSlide={s._3_strt}
        endingSlide={s._3_strt + 2}
      />
      <ShiftOutImageHOC
        startingSlide={s._3_strt + 2}
        endingSlide={s._3_strt + 6}
        imgURL={
         require("./houstonComparison-02.svg")
        }
      />
      <ShiftOutImageHOC
        startingSlide={s._3_strt + 4}
        endingSlide={s._3_strt + 6}
        imgURL={
         require("./houstonComparison-03.svg")
        }
      />
    </>
  );
}
