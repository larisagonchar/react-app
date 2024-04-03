import { movieListMock, movieTileMock } from '../../src/__mocks__/movie-tile';

describe('MovieListPage component', () => {
  it('should highlight genre from url queries', () => {
    cy.intercept('GET', 'http://localhost:4000/movies?sortBy=title&filter=Comedy&searchBy=title&sortOrder=asc', { data: movieListMock });
    cy.visit('http://localhost:3000/?filter=Comedy');
    cy.get('.genre-select__item_selected').contains('Comedy');
  });

  it('should select sort control from url queries', () => {
    cy.intercept('GET', 'http://localhost:4000/movies?sortBy=release_date&searchBy=title&sortOrder=asc', { data: movieListMock });
    cy.visit('http://localhost:3000/?sortBy=release_date');
    cy.get('.css-1c3u634-singleValue').contains('Release Date');
  });

  it('should show movie details if movieId in url queries', () => {
    cy.intercept('GET', 'http://localhost:4000/movies/455656', movieTileMock);
    cy.visit('http://localhost:3000/455656');
    cy.get('.title').contains(movieTileMock.title);
  });

  it('should show search section if NO movieId in url queries', () => {
    cy.intercept('http://localhost:4000/movies?sortBy=title&searchBy=title&sortOrder=asc', { data: movieListMock });
    cy.visit('http://localhost:3000');
    cy.get('.search__title').contains('find your movie');
  });
});