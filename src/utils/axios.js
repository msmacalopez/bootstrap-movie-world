import axios from "axios";
const apiKey = import.meta.env.VITE_OMDB_API_KEY;

const apiEP = `https://www.omdbapi.com/?apikey=${apiKey}&`;

export const fetchFromApi = async (str) => {
  try {
    const url = apiEP + "t=" + str;
    const response = await axios.get(url);
    console.log(response.data);

    return response.data;
  } catch (error) {
    console.log(error);
  }
};
