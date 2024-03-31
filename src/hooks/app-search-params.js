import { useEffect, useReducer, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { getInitialSearchParams, searchParamsReducer } from "../reducers/search-params.reducer";
import { GENRE_ALL } from "src/constants/genre.constants";
import { formatUrlParams } from "src/formatters/url-params.formatter";
import { CommonConstants } from "src/constants/common.constants";

export const useAppSearchParams = () => {
  const [controller, setController] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const [state, dispatch] = useReducer(searchParamsReducer, getInitialSearchParams(searchParams));

  const abortController = () => {
    if (controller) {
      controller.abort();
      setController(null);
    }
  };

  const setGenres = (genres) => {
    abortController();
    dispatch({
      query: CommonConstants.QUERY.FILTER,
      value: genres
    });
  };

  const setSearchQuery = (searchQuery) => {
    abortController();
    dispatch({
      query: CommonConstants.QUERY.SEARCH,
      value: searchQuery
    });
  };

  const setSortControl = (sortControl) => {
    abortController();
    dispatch({
      query: CommonConstants.QUERY.SORT_BY,
      value: sortControl
    });
  };

  useEffect(() => {
    const requestParams = {
      search: state.searchQuery,
      sortBy: state.sortControl,
      filter: state.genres.includes(GENRE_ALL) ? null : state.genres
    };

    setSearchParams(formatUrlParams(requestParams));
  }, [setSearchParams, state]);

  return [state, searchParams, setGenres, setSearchQuery, setSortControl, setController];
}