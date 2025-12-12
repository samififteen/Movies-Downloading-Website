import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <div className="container header-content">
        <Link to="/" className="logo">Era<span>Movies</span></Link>
        
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/privacy-policy">Privacy Policy</Link>
          <Link to="/disclaimer">Disclaimer</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/dmca">DMCA</Link>
        </nav>
        
        <div className="search-bar">
          <input type="text" placeholder="Search..." />
          <button>🔍</button>
        </div>
      </div>
    </header>
  );
};

export default Header;