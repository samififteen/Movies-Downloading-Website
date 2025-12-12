import { Link } from 'react-router-dom';

const Categories = () => {
  return (
    <div className="categories">
      <Link to="/category/collection" className="category-btn">Collection</Link>
      <Link to="/category/hollywood" className="category-btn">Hollywood</Link>
      <Link to="/category/bollywood" className="category-btn">Bollywood</Link>
      <Link to="/category/web-series" className="category-btn">Web Series</Link>
      <Link to="/category/tv-series" className="category-btn">TV Series</Link>
      <Link to="/category/tv-shows" className="category-btn">TV Shows</Link>
    </div>
  );
};

export default Categories;