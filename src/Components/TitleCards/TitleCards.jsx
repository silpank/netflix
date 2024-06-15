import React, { useEffect, useRef, useState } from 'react'
import './TitleCards.css'
import { Link } from 'react-router-dom';

const TitleCards = ({ title, category }) => {

  const [apiData, SetApiData] = useState([]);
  const cardsRef = useRef();

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNDc0NTM2YzE5MmM5M2Q5MzQ4MWRlOGZlMGExNzNjMSIsInN1YiI6IjY2NWFjNTM2YTNmYTc3ZmE1NjUyZGMyMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.YJL8pcmjp4R3lm4wJUC-_NE6cqAuCjZvAgnHvUe39a8'
    }
  };

  const handleWheel = (event) => {
    event.preventDefault();
    cardsRef.current.scrollLeft += event.deltaX;
  }

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${category ? category : "now_playing"}?language=en-US&page=1`, options)
      .then(response => response.json())
      .then(response => SetApiData(response.results))
      .catch(err => console.error(err));

    const currentRef = cardsRef.current;
    currentRef.addEventListener('wheel', handleWheel);

    return () => {
      currentRef.removeEventListener('wheel', handleWheel);
    };
  });

  return (
    <div className='title-Cards'>
      <h2>{title ? title : "Popular on Netflix"}</h2>
      <div className="card-list" ref={cardsRef}>
        {apiData && apiData.map((card, index) => (
          <Link to={`/player/${card.id}`} className='card' key={index}>
            <img src={`https://image.tmdb.org/t/p/w500${card.backdrop_path}`} alt={card.original_title} />
            <p>{card.original_title}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default TitleCards;
