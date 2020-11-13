import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

const GetStarted = () => {
  const Router = useRouter();
  const { name } = Router.query;
  const [fadeOut, setFadeOut] = useState(false);
  const saveUsername = (e) => {
    e.preventDefault();
    if (e.target.username.value.length >= 1) {
      localStorage.setItem('username', e.target.username.value);
      Router.push(`/get-started?name=${e.target.username.value}`);
    }
  };
  useEffect(() => {
    if (name) {
      setTimeout(() => {
        setFadeOut(true);
        setTimeout(() => {
          Router.push('/');
        }, 3000);
      }, 3000);
    }
  }, [name]);
  return (
    <div className="get-started-container">
      {
        name ? (
          <div className={`${fadeOut ? 'fade-out' : 'fade-in'} name-saved`}>
            <h1>Awesome,</h1>
            <h1 className="name">&nbsp;{name}</h1>
            <h1>!</h1>
          </div>
        ) : (
          <>
            <h1 className="get-started-username">
              What's your name?
            </h1>
            <span className="get-started-username-description">
              We want to know your name to improve your user experience in Luns
            </span>
            <form
              className="username-form"
              onSubmit={(e) => saveUsername(e)}
            >
              <input
                name="username"
                type="text"
                className="username-input"
                placeholder="Type your name"
              />
              <input
                type="submit"
                className="username-button"
                value="Save"
              />
            </form>
          </>
        )
      }
      <style jsx>
        {`
          .get-started-container {
            margin-top: 3rem;
            padding: 4rem;
          }
          .get-started-username {
            font-weight: 800;
            color: var(--black);
            margin-bottom: 0.4rem;
          }
          .get-started-username-description {
            color: var(--gray);
          }
          .username-form {
            display: flex;
            align-items: center;
            margin-top: 2rem;
          }
          .username-input {
            width: 20rem;
            padding: 0.6rem;
            background: var(--light-gray);
            border-radius: 5px;
            color: var(--black);
            font-weight: 700;
            font-size: 1rem;
          }
          .username-button {
            margin-left: 0.6rem;
            padding: 0.5rem 4rem;
            background-color: var(--primary);
            color: var(--white);
            font-weight: 500;
            border-radius: 5px;
            cursor: pointer;
            transition: 0.3s;
            font-size: 1rem;
          }
          .username-button:hover {
            background-color: var(--secondary);
          }
          .name-saved {
            margin-top: 3rem;
            display: flex;
            width: fit-content;
            margin: auto;
            text-align: center;
            color: var(--black);
          }
          .fade-in {
            opacity: 1;
            animation-name: fadeIn;
            animation-iteration-count: 1;
            animation-timing-function: ease-in;
            animation-duration: 1.5s;
            transition: 1.5s;
          }
          @keyframes fadeIn {
            0% {
              opacity: 0;
            }
            100% {
              opacity: 1;
            }
          }
          .fade-out {
            opacity: 0;
            animation-name: fadeOut;
            animation-iteration-count: 1;
            animation-timing-function: ease-in;
            animation-duration: 1.5s;
            transition: 1.5s;
          }
          @keyframes fadeOut {
            0% {
              opacity: 1;
            }
            100% {
              opacity: 0;
            }
          }
          .name {
            color: var(--primary);
          }
        `}
      </style>
    </div>
  );
};
export default GetStarted;
