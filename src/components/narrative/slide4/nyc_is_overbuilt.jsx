import React from "react";

import { ShiftOutImageHOC } from "../../elements/element_base";
import s from "../storyStarts";

// import Image from "prewar_nyc_buildings.png"

export default function CaseStudyDisplay() {
  return (
    <>
      <ShiftOutImageHOC
        imgURL={require("./prewar_nyc_buildings.png")}
        startingSlide={s._4_strt}
        endingSlide={s._4_strt + 5}
      />
      <ShiftOutImageHOC
        imgURL={require("./nyc_is_overbuilt-02.svg")}
        startingSlide={s._4_strt + 2}
        endingSlide={s._4_strt + 5}
      />
    </>
  );
}
