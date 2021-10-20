import { API_URL } from "../constants";
import axios from 'axios';

axios.defaults.baseURL = API_URL;

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
  const res = await axios.get(`/cards`);
  return res.data;
}

export async function postPlayer(player: IPlayer) {
  return await axios.post(`/cards`, { player });
}
