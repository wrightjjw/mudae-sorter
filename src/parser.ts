import type Character from "./types/character";

/**
 * Contains functions for parsing user input.
 */
export class Parser {
  /**
   * Parse input from $mmai-s and convert it into a character list.
   */
  static parseSeriesImages(input: string): Character[] {
    const lines = input.split("\n");
    let series = "";
    const chars: Character[] = [];

    const matchMap = [
      {
        regex: /.* - \d*\/\d*/,
        callback: (line: string) => {
          series = line.split("-")[0].trimEnd();
        },
      },
      {
        regex: /.* - http.*/,
        callback: (line: string) => {
          chars.push(this.createCharFromSeriesImageLine(line, series));
        },
      },
    ];

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      if (!line) continue;

      const match = matchMap.find((m) => m.regex.test(line));
      if (match) {
        match.callback(line);
      } else {
        console.error(`Could not match line "${line}"`);
      }
    }

    return chars;
  }

  /**
   * Creates a character from a single line output of $mmai-s.
   * Since a single line does not have series information,
   * the name of the series must be provided.
   * @param line - The text of the line from $mmai-s.
   * @param series - The name of the series to attach to the character.
   * @returns - The newly created character.
   */
  private static createCharFromSeriesImageLine(
    line: string,
    series: string,
  ): Character {
    const lineSplit = line.split("-");
    const charName = lineSplit[0].trimEnd();
    const imgUrl = lineSplit[1].trimStart();
    return {
      charName: charName,
      seriesName: series,
      imageUrl: imgUrl,
      isRanked: false,
      isSkip: false,
    };
  }
}
