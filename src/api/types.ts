
export interface Verse {
  verse: string;
  number: number;
  study: string;
  id: number;
}

export interface Book {
  num_chapters: number;
  vers: Verse[];
};

export interface Chapter {
  testament: string;
  name: string;
  num_chapters: number;
  chapter: number;
  vers: Verse[];
}
