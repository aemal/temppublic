export interface IPlayer {
  firstname: string;
  lastname: string;
  birthday: string;
}

export interface ICard {
  id: number;
  player: IPlayer;
}

export async function fetchCollection() {
  const res = await fetch('http://localhost:8001/cards', {
    method: 'get',
  });

  return await res.json() as ICard[];
}
