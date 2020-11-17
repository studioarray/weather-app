import lerp from "@sunify/lerp-color";

export const useColourFromTemp = (temp) => {
  const RANGE_FRACTION = 1 / 40;

  // Constrain within -10 to +30
  // Then add 10 to map to colour range index
  const index =
    (Math.min(Math.max(parseInt(temp), -10), 30) + 10) * RANGE_FRACTION;

  // Linear Interpolation of given colours
  return lerp(["#00ffff", "#fff700", "#ff8c00"], index);
};

/*
#00ffff ​for -10 degrees and below
#fff700 ​for +10 degrees
#ff8c00 ​for +30 degrees and above
*/
