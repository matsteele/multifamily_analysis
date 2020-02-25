import React from "react";

import { ShiftOutImageHOC } from "../../elements/element_base";
import s from "../storyStarts";

export default function Competition() {
  return (
    <>
      <ShiftOutImageHOC
        imgURL={
         require("./whats_not_driving_costs-01.svg")
        }
        startingSlide={s._8_strt}
        endingSlide={s._8_strt + 14}
      />
      <ShiftOutImageHOC
        imgURL={
         require("./whats_not_driving_costs-02.svg")
        }
        startingSlide={s._8_strt + 3}
        endingSlide={s._8_strt + 5}
      />
      <ShiftOutImageHOC
        imgURL={
         require("./whats_not_driving_costs-03.svg")
        }
        startingSlide={s._8_strt + 5}
        endingSlide={s._8_strt + 7}
      />
      <ShiftOutImageHOC
        imgURL={
         require("./whats_not_driving_costs-04.svg")
        }
        startingSlide={s._8_strt + 7}
        endingSlide={s._8_strt + 9}
      />
      <ShiftOutImageHOC
        imgURL={
         require("./whats_not_driving_costs-05.svg")
        }
        startingSlide={s._8_strt + 9}
        endingSlide={s._8_strt + 14}
      />
      <ShiftOutImageHOC
        imgURL={
         require("./whats_not_driving_costs-06.svg")
        }
        startingSlide={s._8_strt + 10}
        endingSlide={s._8_strt + 14}
      />
      <ShiftOutImageHOC
        imgURL={
         require("./whats_not_driving_costs-07.svg")
        }
        startingSlide={s._8_strt+12}
        endingSlide={s._8_strt + 14}
      />
    </>
  );
}
