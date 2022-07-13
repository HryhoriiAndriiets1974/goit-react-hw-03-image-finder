import {BallTriangle} from "react-loader-spinner";
import css from './Loader.module.css';

const Loader = () => {
  return (
    <section className={css.loader}>
      <BallTriangle
        color="#00BFFF"
        height={300}
        width={300}
      />
    </section>
  )
};

export default Loader;
