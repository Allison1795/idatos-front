import HTTP from './HTTP';

export const createPlaylist = (movie_name: string) => {
  return HTTP.post('/spotify/create_playlist', {
      movie_name: movie_name,
      access_token: localStorage.getItem('token'),
  }).then(({ data }) => data);
};
