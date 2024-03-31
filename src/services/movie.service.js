import axios from "axios";
import { CommonConstants } from "src/constants/common.constants";

const MovieService = {
  getMovies: async (params, signal) => {
    try {
      const response = await axios.get(CommonConstants.BASE_URL, {
        params: {
          ...params,
          searchBy: 'title',
          sortOrder: 'asc',
          filter: params.filter?.join(',')
        },
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

  getMovieById: async (id) => {
    try {
      const response = await axios.get(`${CommonConstants.BASE_URL}/${id}`);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
};

export default MovieService;