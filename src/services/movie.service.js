import axios from "axios";
import { CommonConstants } from "src/constants/common.constants";

const MovieService = {
  getMovies: async (params, signal) => {
    try {
      const response = await axios.get(CommonConstants.BASE_URL, {
        params,
        signal
      });
      return response.data.data;
    } catch (error) {
      console.log(error);
      if (error.message === 'canceled') {
        return [];
      } else return error;
    }
  },
};

export default MovieService;