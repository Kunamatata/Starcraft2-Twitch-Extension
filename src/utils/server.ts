import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

export const getStreams = async (): Promise<any> => {
  const { data } = await axios.get(`${process.env.API_URL}/api/sc2/streams`);
  return data.data;
};
