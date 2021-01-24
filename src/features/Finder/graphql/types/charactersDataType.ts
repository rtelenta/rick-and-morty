export type characterType = {
  id: string;
  name: string;
  image: string;
  species: string;
  status: "unknown" | "Alive" | "Dead";
};

export type pageInfoType = {
  next: number | null;
};

export type charactersDataType = {
  characters: {
    info: pageInfoType;
    results: characterType[];
  };
};
