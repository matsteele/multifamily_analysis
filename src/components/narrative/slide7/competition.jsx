import React from "react";

import { ShiftOutImageHOC } from "../../elements/element_base";
import s from "../storyStarts";

export default function Competition() {
  return (
    <>
      <ShiftOutImageHOC
        imgURL={
         require("./housing_not_competitive-01.svg")
        }
        startingSlide={s._7_strt}
        endingSlide={s._7_strt + 4}
      />
      <ShiftOutImageHOC
        imgURL={
         require("./housing_not_competitive-02.svg")
        }
        startingSlide={s._7_strt + 1}
        endingSlide={s._7_strt + 4}
      />
      <ShiftOutImageHOC
        imgURL={
         require("./housing_not_competitive-03.svg")
        }
        startingSlide={s._7_strt + 2}
        endingSlide={s._7_strt + 4}
      />
    </>
  );
}
