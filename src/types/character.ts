/** The Character type encapsulates data needed to convey a character's information. */
export default interface Character {
  /** The character's name. This is often their selected alias in Mudae,
   * but ultimately the exact name doesn't matter.
   * This value is only used to display the name in the app. */
  charName: string;

  /** The character's series name. Used only for display. */
  seriesName: string;

  /** URL to the characer's display image.
   * This image will be downloaded and displayed in the app. */
  imageUrl: string;

  /** Set to true when the character has been ranked by the user.
   * Unranked characters are sorted into the list of ranked ones. */
  isRanked: boolean;

  /** Set to true when the user has indicated that this character will be skipped in the ranking.
   * Skipped characters are completely disregarded when ranking. */
  isSkip: boolean;
}
