import babel from "images/babel.jpg";

const Home = () => {
  return (
    <div>
      <h2>Home Component</h2>
      <img src={babel} alt="babelimg" className="img" />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae vel
        praesentium, maiores officiis repellat illum provident expedita tenetur
        commodi voluptate aliquid distinctio. Asperiores soluta quae veniam
        excepturi, quidem libero maiores?
      </p>
    </div>
  );
};

export default Home;
