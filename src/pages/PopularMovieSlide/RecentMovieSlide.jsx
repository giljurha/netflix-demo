import React from 'react'
import { usePopularMoviesQuery } from '../../hooks/usePopularMovies'
import 'react-multi-carousel/lib/styles.css';
import { Spinner, Alert } from 'react-bootstrap';
import { responsive } from '../../common/constants/responsive';
import MovieSlider from "../../common/MovieSlider/MovieSlider";

const PopularMovieSlide = () => {
    const {data, isLoading, isError, error} = usePopularMoviesQuery();

    if (isLoading) {
        return(
        <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
        </Spinner>
        )
    }
    if (isError) {
        return <Alert variant='danger'>{error.message}</Alert>
    }
  return (
    <div>
      <MovieSlider 
        title="Popular Movies" 
        movies={data.results} 
        responsive={responsive} />   
    </div>
  )
}

export default PopularMovieSlide