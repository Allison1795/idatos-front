import HTTP from './HTTP';

const createPlaylist = (movie_name) => HTTP.get('/create_playlist', { params: movie_name }).then(({ data }) => data);

export default createPlaylist;