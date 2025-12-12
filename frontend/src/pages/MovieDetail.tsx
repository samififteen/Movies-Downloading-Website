import { useParams } from 'react-router-dom';

const MovieDetail = () => {
  const { id } = useParams<{ id: string }>();

  // Example static data for Titanic
  const movie = {
    id: '1',
    title: 'Titanic',
    year: 1997,
    quality: 'REMASTERED',
    size: '720p • 900Mb',
    imageUrl: 'https://m.media-amazon.com/images/M/MV5BMDdmZGU3NDQtY2E5My00ZTliLWIzOTUtMTY4ZGI1YjdiNjk3XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_.jpg',
    description: 'A seventeen-year-old aristocrat falls in love with a kind but poor artist aboard the luxurious, ill-fated R.M.S. Titanic.',
    director: 'James Cameron',
    stars: 'Leonardo DiCaprio, Kate Winslet, Billy Zane',
    genre: 'Drama, Romance',
    runtime: '3h 14min',
    downloadLinks: [
      { quality: '720p', size: '900MB', link: '#' },
      { quality: '1080p', size: '1.5GB', link: '#' },
      { quality: '2160p', size: '10GB', link: '#' }
    ],
    trailerUrl: 'https://www.youtube.com/embed/kVrqfYjkTdQ' // Titanic official trailer
  };

  return (
    <div className="container">
      <div style={{ display: 'flex', gap: '30px', marginTop: '30px', flexWrap: 'wrap' }}>
        <div style={{ flex: '0 0 300px' }}>
          <img
            src={movie.imageUrl}
            alt={movie.title}
            style={{ width: '100%', borderRadius: '8px' }}
          />
        </div>

        <div style={{ flex: '1 1 500px' }}>
          <h1>{movie.title} ({movie.year})</h1>

          <div style={{ marginTop: '15px' }}>
            <span className="quality-tag">{movie.quality}</span>
            <span style={{ marginLeft: '10px', color: '#aaa' }}>{movie.size}</span>
          </div>

          <p style={{ marginTop: '20px' }}>{movie.description}</p>

          <div style={{ marginTop: '20px' }}>
            <p><strong>Director:</strong> {movie.director}</p>
            <p><strong>Stars:</strong> {movie.stars}</p>
            <p><strong>Genre:</strong> {movie.genre}</p>
            <p><strong>Runtime:</strong> {movie.runtime}</p>
          </div>

          {/* Trailer Section (Placed Below Movie Info) */}
          <div style={{ marginTop: '30px' }}>
            <h2>Watch Trailer</h2>
            <div style={{ width: '100%', maxWidth: '700px', height: '400px', borderRadius: '8px', overflow: 'hidden' }}>
              <iframe
                src={movie.trailerUrl}
                title={`${movie.title} Trailer`}
                style={{ width: '100%', height: '100%', border: '0' }}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          <div style={{ marginTop: '30px' }}>
            <h2>Download Links</h2>

            <div style={{ marginTop: '15px' }}>
              {movie.downloadLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.link}
                  style={{
                    display: 'block',
                    padding: '15px',
                    backgroundColor: '#1a2035',
                    borderRadius: '8px',
                    marginBottom: '10px',
                    color: 'white',
                    textDecoration: 'none',
                  }}
                >
                  Download {link.quality} ({link.size})
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;