import React from "react";

import { ShiftOutImageHOC } from "../../elements/element_base";
import s from "../storyStarts";

export default function _8_SFHOverbuilding() {
  return (
    <>
      <ShiftOutImageHOC
        imgURL={require("./housing_bubble-01.svg")}
        startingSlide={s._9_strt + 1}
        endingSlide={s._9_strt + 6}
      />
      <ShiftOutImageHOC
        imgURL={require("./housing_bubble-02.svg")}
        startingSlide={s._9_strt + 3}
        endingSlide={s._9_strt+5}
      />
    </>
  );
}
