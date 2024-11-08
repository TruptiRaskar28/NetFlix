import React, { useState } from "react";
import "./MovieGallery.css";
import H1 from '../h1.jpg';
import H2 from '../h2.jpeg';
import H3 from '../h3.jpeg';
import H4 from '../h4.jpg';
import H5 from '../h5.jpeg';

function MovieGallery() {
  const movies = [
    {
      id: 1,
      title: "Movie 1 Title",
      description: "A brief description of Movie 1 goes here. It could be a short plot summary or highlight.",
      fullDescription: "Full details about Movie 1, including plot, cast, and other relevant information.",
      image: H1,
    },
    {
      id: 2,
      title: "Movie 2 Title",
      description: "A brief description of Movie 2 goes here. It could be a short plot summary or highlight.",
      fullDescription: "Full details about Movie 2, including plot, cast, and other relevant information.",
      image: H2,
    },
    {
      id: 3,
      title: "Movie 3 Title",
      description: "A brief description of Movie 3 goes here. It could be a short plot summary or highlight.",
      fullDescription: "Full details about Movie 3, including plot, cast, and other relevant information.",
      image: H3,
    },
    {
      id: 4,
      title: "Movie 4 Title",
      description: "A brief description of Movie 4 goes here. It could be a short plot summary or highlight.",
      fullDescription: "Full details about Movie 4, including plot, cast, and other relevant information.",
      image: H4,
    },
    {
      id: 5,
      title: "Movie 5 Title",
      description: "A brief description of Movie 5 goes here. It could be a short plot summary or highlight.",
      fullDescription: "Full details about Movie 5, including plot, cast, and other relevant information.",
      image: H5,
    }
  ];

  const [selectedMovie, setSelectedMovie] = useState(null);

  const handleMovieClick = (movie) => {
    setSelectedMovie(movie);
  };

  const closeModal = () => {
    setSelectedMovie(null);
  };

  return (
    <section className="gallery">
      <h2>Popular on Netflix</h2>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search Movies"
          className="search-bar"
        />
        <button className="search-button">Search</button>
      </div>
      <div className="movie-row">
        {movies.map((movie) => (
          <div key={movie.id} className="movie-card" onClick={() => handleMovieClick(movie)}>
            <img src={movie.image} alt={movie.title} className="movie-image" />
            <div className="movie-info">
              <h3 className="movie-title">{movie.title}</h3>
              <p className="movie-description">{movie.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal for Movie Details */}
      {selectedMovie && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="close-button" onClick={closeModal}>X</button>
            <h2>{selectedMovie.title}</h2>
            <img src={selectedMovie.image} alt={selectedMovie.title} className="movie-image-large" />
            <p>{selectedMovie.fullDescription}</p>
          </div>
        </div>
      )}
    </section>
  );
}

export default MovieGallery;
