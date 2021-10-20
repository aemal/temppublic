export interface IPlayer {
  firstname: string;
  lastname: string;
  birthday: string;
  imgUrl: string;
}

export interface ICard {
  id: number;
  player: IPlayer;
}

export function fetchCollection() {
  /**
   * Step 2: Instead of directly returning the collection, fetch it from http://localhost:8001/cards
   */
  return [
    {
      id: 1,
      player: {
        firstname: 'John',
        lastname: 'Doe',
        birthday: '1993-07-22T08:38:50.090Z',
        imgUrl: 'https://citacoes.in/media/authors/john-doe-musician.jpeg',
      },
    },
  ] as ICard[];
}
