import './style.scss'

const CLIENT_ID = "1e339f88360b43a38d3434eef6bb69e7"
const REDIRECT_URI = "http://localhost:3000"
const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize"
const RESPONSE_TYPE = "token"


const Dashboard = () => {

  const onButtonClick = () => window.open(`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`, '_blank');

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
