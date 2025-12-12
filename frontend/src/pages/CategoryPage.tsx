import { useParams } from 'react-router-dom';
import Categories from '../components/Categories';
import MovieCard from '../components/MovieCard';

const CategoryPage = () => {
  const { category } = useParams<{ category: string }>();
  
  // In a real app, you would fetch movies based on the category
  // For now, we'll use static data
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

  // Format the category name for display
  const formatCategoryName = (cat: string) => {
    return cat.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  };

  return (
    <div className="container">
      <Categories />
      
      <h1 style={{ marginTop: '30px' }}>{formatCategoryName(category || '')}</h1>
      
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

export default CategoryPage;