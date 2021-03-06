const apiKey = 'a1jdCI70Xmry4SqQHJHuRccAFQT2cj67';

export const SET_QUERY = 'SET_QUERY';
export const SELECT_GIF = 'SELECT_GIF';
export const SEARCH = 'SEARCH';

export function setQuery(query) {
  return {
    type: SET_QUERY,
    payload: query,
  };
}


export function search(query) {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${query}&limit=10&offset=0&rating=G&lang=en`;
  const promise = fetch(url)
    .then(res => res.json())
    .then(res => res.data);
  return {
    type: SEARCH,
    payload: promise
  };
}


export function selectGif(id) {
  return {
    type: SELECT_GIF,
    payload: id,
  };
}
