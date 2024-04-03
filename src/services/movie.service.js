import axios from "axios";
import { CommonConstants } from "src/constants/common.constants";
import { mapMovieFromServiceToUIMovie } from "src/mappers/movie-form.mapper";

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
      return response.data.data.map(item => mapMovieFromServiceToUIMovie(item));
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
      return mapMovieFromServiceToUIMovie(response.data);
    } catch (error) {
      console.log(error);
    }
  }
};

export default MovieService;