import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Palette } from "color-thief-react"; 
import Sebita from './../../assets/sebita.jpeg';

import './style.scss';

const PlaylistDisplay = () => {
  const navigate = useNavigate();

  const { state } = useLocation();

  const [playlistTitle, setPlaylistTitle] = useState<string>(''); 
  const [movieTitle, setMovieTitle] = useState<string>(''); 
  const [songs, setSongs] = useState<string[]>([]); 

  useEffect(() => {
    if (state) {
      setPlaylistTitle(state.playlist_name);
      setSongs(state.songs);
      setMovieTitle(state.movie_name);
    } else {
      navigate('/user-input');
    }
  }, [state, navigate]); 

  return (
    <Palette src={Sebita} crossOrigin="anonymous" format="hex" colorCount={4}>
      {({ data, loading }: { data: string[], loading: boolean }) => (
        loading ? (
          <>Loading..</>
        ) : (
          <div
            className="playlist-display"
            style={{
              background: `linear-gradient(to right, ${data?.join(', ')})`,
            }}
          >
            <h1 className="playlist-display__title">
              We've finally created your playlist!
            </h1>
            <h2 className="playlist-display__subtitle">
              Go ahead and take a look at it in your Spotify profile
            </h2>
            <div className="playlist-display__container">
              <h3 className="playlist-display__container-title">Your playlist {playlistTitle} was created using the soundtrack of {movieTitle}</h3>
              <div className="playlist-display__container-song-list">
                {songs.map((song: string) => (
                  <div className="playlist-display__container-song" key={song}>
                    <img src={Sebita} alt="Song" className="playlist-display__container-song-img" />
                    <span className="playlist-display__container-song-title">{song}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )
      )}
    </Palette>
  );
};

export default PlaylistDisplay;
