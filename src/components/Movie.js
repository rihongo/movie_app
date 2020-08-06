import React from "react";
import PropTypes from "prop-types";
import { ListGroup, Image, Col, Card, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

function Movie({id, year, title, summary, poster, genres}) {
    return (
        <Link to={{
            pathname: `movie/${id}`,
            state: {
                year, title, summary, poster, genres
            }
        }}
        >
        <Col md={4}>
            <Card>
                <ListGroup.Item><Image src={poster} alt={title} title={title} thumbnail/></ListGroup.Item>

                <ListGroup.Item className="movie_title">
                    <Col>{year}</Col>
                    <Col>{title}</Col>
                </ListGroup.Item>

                <ListGroup.Item>
                    <Row className={genres}>{genres.map((genre, index) => (
                        <Col key={index} className="genres_genre">{genre}</Col>
                    ))}
                    </Row>
                </ListGroup.Item>
                <ListGroup.Item className="movie_summary">{summary.slice(0, 140)}...</ListGroup.Item>
            </Card>
        </Col>
        </Link>
    )
};

Movie.propTypes = {
    year: PropTypes.number,
    title: PropTypes.string,
    summary: PropTypes.string,
    poster: PropTypes.string,
    genres: PropTypes.arrayOf(PropTypes.string)
}

export default Movie;