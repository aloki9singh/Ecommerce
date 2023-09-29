const BASE_URL = `https://api.tvmaze.com`;
const apiGet = async (searchShow) => {
  let data = await fetch(`${BASE_URL}${searchShow}`);
  let res = await data.json();
  return res;
};

export const searchforShows = (searchinput) =>
  apiGet(`/search/shows?q=${searchinput}`);
export const searchforActors = (searchinput) =>
  apiGet(`/search/people?q=${searchinput}`);

export const getShowsById = (id) =>
  apiGet(`/shows/${id}?embed[]=seasons&embed[]=cast`);

export const getShowsByIds = async (ids) => {
  const apiRequestPromises = ids.map((showid) => apiGet(`/shows/${showid}`));
  const result = await Promise.all(apiRequestPromises);
  return result;
};
