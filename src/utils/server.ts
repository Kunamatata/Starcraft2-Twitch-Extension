import axios from "axios";
import config from "../config";

export const getStreams = async (): Promise<any> => {
  const { data } = await axios.get(`${config.API_URL}/api/sc2/streams`);
  return data.data;
};
