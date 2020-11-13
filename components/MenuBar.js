import { Logo } from '../components';

const MenuBar = () => (
  <div className="menubar">
    <div className="menubar-container">
      <Logo width="20" height="20" />
      <button
        className="close-button"
        onClick={() => window.close()}
      >
          x
      </button>
    </div>
    <style jsx>
      {`
        .menubar {
          top: 0;
          position: fixed;
          width: 100%;
          height: 2rem;
          border: 1px solid var(--light-gray);
        }
        .menubar-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          height: 2rem;
          padding: 0 1rem;
        }
        .close-button {
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          color: var(--black);
        }
        .close-button:hover {
          color: var(--gray);
        }
      `}
    </style>
  </div>
);
export default MenuBar;
