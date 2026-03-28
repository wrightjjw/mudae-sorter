import { expect, test } from "vitest";
import { Parser } from "./parser";
import type Character from "./types/character";

test("correctly converts $mmai-s input", () => {
  const mockInput = `Ahsoka - 1/3
Baylan Skoll - https://mudae.net/uploads/3513168/NFyQf_B~nrOg2Lwpx.png

ARMS - 2/18
Ribbon Girl - https://mudae.net/uploads/5126491/CmiEVpG~oLl05Ij.png
Twintelle - https://mudae.net/uploads/6720203/nOMwoVY~rxb5Qbi.png`;

  const expected: Character[] = [
    {
      charName: "Baylan Skoll",
      seriesName: "Ahsoka",
      imageUrl: "https://mudae.net/uploads/3513168/NFyQf_B~nrOg2Lwpx.png",
      isRanked: false,
      isSkip: false,
    },
    {
      charName: "Ribbon Girl",
      seriesName: "ARMS",
      imageUrl: "https://mudae.net/uploads/5126491/CmiEVpG~oLl05Ij.png",
      isRanked: false,
      isSkip: false,
    },
    {
      charName: "Twintelle",
      seriesName: "ARMS",
      imageUrl: "https://mudae.net/uploads/6720203/nOMwoVY~rxb5Qbi.png",
      isRanked: false,
      isSkip: false,
    },
  ];
  const actual = Parser.parseSeriesImages(mockInput);
  expect(actual).toEqual(expected);
});
