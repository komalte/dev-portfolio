import React, { useState, useEffect, useContext } from 'react';
import { Container, Row, Button, Col } from 'react-bootstrap';
import { ThemeContext } from 'styled-components';
import PropTypes from 'prop-types';
import Header from './Header';
import endpoints from '../constants/endpoints';
import MovieCard from './movies/MovieCard';
import FallbackSpinner from './FallbackSpinner';
import ReactMarkdown from 'react-markdown';
import { Link } from 'react-router-dom';

const styles = {
  containerStyle: {
    marginBottom: 25,
  },
  showMoreStyle: {
    margin: 25,
  },
};

const parseIntro = (text) => (
  <ReactMarkdown
    children={text}
  />
);

const Movies = (props) => {
  const theme = useContext(ThemeContext);
  const { header } = props;
  const [data, setData] = useState(null);
  const [showMore, setShowMore] = useState(false);

  useEffect(() => {
    fetch(endpoints.movies, {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((res) => setData(res))
      .catch((err) => err);
  }, []);
  const numberOfItems = showMore && data ? data.movies.length : 6;
  return (
    <>
      <Header title={header}/>

      <div className="section-content-container">
        <Container>
          <Row style={styles.containerStyle}>
            Here are my recently watched movies, which i rated on letterboxd. Please check my
            profile below 👇
          </Row>
          <Row style={styles.containerStyle}>
            <a href="https://letterboxd.com/komalte/" target="_blank">Profile</a>
          </Row>
        </Container>
      </div>

      {data
        ? (
          <div className="section-content-container">
            <Container style={styles.containerStyle}>
              <Row xs={1} sm={1} md={2} lg={3} className="g-4">
                {data.movies?.slice(0, numberOfItems)
                  .map((movie) => (
                    <MovieCard movie={movie}/>
                  ))}
              </Row>

              {!showMore
                && (
                  <Button
                    style={styles.showMoreStyle}
                    variant={theme.bsSecondaryVariant}
                    onClick={() => setShowMore(true)}
                  >
                    show all {data.reviewCount} movies
                  </Button>
                )}
            </Container>
          </div>
        ) : <FallbackSpinner/>}

      <div style={styles.mainContainer}>
        <Container>
          <Row>
            If you wanna know more about where this data comes from, please check below: <Link to="/projects">Projects</Link>
          </Row>
        </Container>
      </div>
    </>
  );
};

Movies.propTypes = {
  header: PropTypes.string.isRequired,
};

export default Movies;
