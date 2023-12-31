import './style.scss'

const Dashboard = () => {

  const url = "https://accounts.spotify.com/authorize?client_id=1e339f88360b43a38d3434eef6bb69e7&redirect_uri=http%3A%2F%2Flocalhost%3A5173%2F&scope=user-read-private%20user-read-email%20playlist-modify-public&response_type=token&state=123";

  const onButtonClick = () => window.open(url, '_self');

  if (window.location.href.includes('access_token')) {
    window.location = 'user-input'; 
  }

  return (
    <div className="dashboard">
      <h1 className="dashboard__title">
        Hi There!
      </h1>
      <h2 className="dashboard__subtitle">
        Sign in to get that playlist you've been craving!
      </h2>
      <button
        className="dashboard__button"
        onClick={() => onButtonClick()}
      >
        Sign in to Spotify!
      </button>
    </div>
  );
};

export default Dashboard
