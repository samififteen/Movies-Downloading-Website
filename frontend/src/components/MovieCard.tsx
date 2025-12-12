import { Link } from 'react-router-dom';

interface MovieCardProps {
  id: string;
  title: string;
  year: number;
  quality: string;
  size: string;
  imageUrl: string;
}

const MovieCard = ({ id, title, year, quality, size, imageUrl }: MovieCardProps) => {
  return (
    <div className="movie-card">
      <Link to={`/movie/${id}`}>
        <img src={imageUrl} alt={title} className="movie-poster" />
      </Link>
      <div className="movie-info">
        <Link to={`/movie/${id}`} className="movie-title">{title} ({year})</Link>
        <div className="movie-details">
          <span>{size} • {quality}</span>
        </div>
        <div className="quality-tag">{quality}</div>
      </div>
    </div>
  );
};

export default MovieCard;