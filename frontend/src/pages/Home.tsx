import Categories from '../components/Categories';
import MovieCard from '../components/MovieCard';

const Home = () => {
  // Sample movie data based on the image
  const movies = [
    {
      id: '1',
      title: 'Titanic',
      year: 1997,
      quality: 'REMASTERED',
      size: '720p • 900Mb',
      imageUrl: 'https://m.media-amazon.com/images/M/MV5BMDdmZGU3NDQtY2E5My00ZTliLWIzOTUtMTY4ZGI1YjdiNjk3XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_.jpg'
    },
    // Add more movies as needed
  ];

  return (
    <div className="container">
      <Categories />
      
      <div className="movie-grid">
        {movies.map(movie => (
          <MovieCard 
            key={movie.id}
            id={movie.id}
            title={movie.title}
            year={movie.year}
            quality={movie.quality}
            size={movie.size}
            imageUrl={movie.imageUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;