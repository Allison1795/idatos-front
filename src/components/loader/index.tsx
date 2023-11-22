import './index.scss';

const Loader = () => (
  <>
    <div className="remix" role="img" aria-label="Spinning CD made with CSS"></div>
    <svg width="0" height="0">
      <defs>
        <clipPath id="cd-clip-path" clipPathUnits="objectBoundingBox">
          <path clip-rule="evenodd" d="M0.5 1C0.776154 1 1 0.776146 1 0.5C1 0.223854 0.776154 0 0.5 0C0.223846 0 0 0.223854 0 0.5C0 0.776146 0.223846 1 0.5 1ZM0.5 0.589996C0.549713 0.589996 0.589996 0.549706 0.589996 0.5C0.589996 0.450294 0.549713 0.410004 0.5 0.410004C0.450287 0.410004 0.410004 0.450294 0.410004 0.5C0.410004 0.549706 0.450287 0.589996 0.5 0.589996Z" />
        </clipPath>
      </defs>
    </svg>

  </>


);

export default Loader;
