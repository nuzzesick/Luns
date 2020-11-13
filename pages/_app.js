import '../styles/luns.css';
import MenuBar from '../components/MenuBar';

const Luns = ({ Component, pageProps }) => {
  return (
    <>
      <MenuBar />
      <Component {...pageProps} />
    </>
  );
}

export default Luns
