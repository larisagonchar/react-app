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
      return response.data;
    } catch (error) {
      console.log(error);
    }
  },

  addMovie: async (body) => {
    try {
      await axios.post(`${CommonConstants.BASE_URL}`, body);
    } catch (error) {
      console.log(error);
    }
  },

  editMovie: async (body) => {
    try {
      await axios.put(`${CommonConstants.BASE_URL}`, body);
    } catch (error) {
      console.log(error);
    }
  }
};

export default MovieService;