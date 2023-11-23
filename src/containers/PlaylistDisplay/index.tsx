import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Palette } from "color-thief-react";

interface CustomWindow extends Window {
  onSpotifyIframeApiReady?: (IFrameAPI: any) => void;
}

declare const window: CustomWindow;

import './style.scss';

const PlaylistDisplay = () => {
  const navigate = useNavigate();

  const { state } = useLocation();

  const [playlist, setPlaylist] = useState<string>('');
  const [movieTitle, setMovieTitle] = useState<string>('');
  const [playlistImage, setPlaylistImage] = useState<string[]>([]);

  useEffect(() => {
    if (state) {
      setPlaylist(state.playlist);
      setPlaylistImage(state.image);
      setMovieTitle(state.movie_name);
    } else {
      navigate('/user-input');
    }
  }, [state, navigate]);

  useEffect(() => {
    console.log('playlist', playlist);
    window.onSpotifyIframeApiReady = (IFrameAPI) => {
      const element = document.getElementById('embed-iframe');
      const options = {
        uri: playlist,
      };
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      const callback = () => { };
      IFrameAPI.createController(element, options, callback);
    };
  }, [playlist]);


  return (
    <Palette src={playlistImage} crossOrigin="anonymous" format="hex" colorCount={4}>
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
            <Link to="/user-input" className="playlist-display__back-button">
              <p>create another playlist!</p>
            </Link>
            <h1 className="playlist-display__title">
              We've finally created your {movieTitle} playlist!
            </h1>
            <h2 className="playlist-display__subtitle">
              Go ahead and take a look at it in your Spotify profile, or listen to it right here!
            </h2>
            <div className="playlist-display__container-song-list">
              <div id="embed-iframe"></div>
            </div>
          </div>
        )
      )}
    </Palette>
  );
};

export default PlaylistDisplay;
