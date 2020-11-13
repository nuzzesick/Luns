import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Home() {
  const [userName, setUserName] = useState(null);
  useEffect(() => {
    if (process.browser) {
      if (localStorage.getItem('username')) setUserName(localStorage.getItem('username'));
    }
  }, []);
  return (
    <>
      {
        userName ? (
          <h1 style={{ marginTop: '4rem' }}>Welcome {userName}</h1>
        ) : (
          <div className="username-container">
            <h1 className="welcome-message">
              Store your passwords in a secure way
            </h1>
            <span className="welcome-message-description">
              Luns allows you to encrypt and save your passwords so you don't have to remember them.
            </span>
            <div className="get-started-container">
              <Link href="/get-started">
                <button
                  type="button"
                  className="get-started-button"
                >
                  Get started
                </button>
              </Link>
            </div>
          </div>
        )
      }
      <style jsx>
        {`
          .username-container {
            width: fit-content;
            margin: auto;
            margin-top: 6rem;
            text-align: center;
            padding: 3rem;
          }
          .welcome-message {
            color: var(--black);
            margin-bottom: 0.4rem;
          }
          .welcome-message-description {
            color: var(--gray);
          }
          .get-started-container {
            margin: auto;
            width: fit-content;
            margin-top: 2rem;
          }
          .get-started-button {
            display: block;
            padding: 1rem 4rem;
            background-color: var(--primary);
            color: var(--white);
            font-weight: 500;
            border-radius: 5px;
            cursor: pointer;
            transition: 0.3s;
          }
          .get-started-button:hover {
            background-color: var(--secondary);
          }
        `}
      </style>
    </>
  );
};
