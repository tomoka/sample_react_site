import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <h1>ホーム</h1>
      <div>
        <p>新規登録は<Link to={`/register/`}>こちら</Link></p>
        <p><Link to="/products">Link to Products</Link></p>
        <p><Link to="/about">Link to About</Link></p>
      </div>
    </>
  );
};

export default Home;