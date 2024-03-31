import { CommonConstants } from "src/constants/common.constants";
import { GENRE_ALL } from "src/constants/genre.constants";
import { SORT_CONTROLS } from "src/constants/sort-control.constants";

export const searchParamsReducer = (state, action) => {
  switch (action.query) {
    case CommonConstants.QUERY.FILTER:
      return {
        ...state,
        genres: action.value
      }
    case CommonConstants.QUERY.SORT_BY: {
      return {
        ...state,
        sortControl: action.value
      }
    }
    case CommonConstants.QUERY.SEARCH: {
      return {
        ...state,
        searchQuery: action.value
      }
    }
    default: throw Error('Unknown query: ' + action.query);
  }
};

export const getInitialSearchParams = (searchParams) => {
  return {
    searchQuery: searchParams.get(CommonConstants.QUERY.SEARCH),
    sortControl: searchParams.get(CommonConstants.QUERY.SORT_BY) ?? SORT_CONTROLS[0].id,
    genres: searchParams.getAll(CommonConstants.QUERY.FILTER).length ? searchParams.getAll(CommonConstants.QUERY.FILTER) : [GENRE_ALL]
  }
}