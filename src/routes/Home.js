import React from 'react';
import axios from 'axios';
import Movie from '../components/Movie';
import { Container, Row } from "react-bootstrap";
import './Home.css';

class Home extends React.Component {
    state = {
        isLoading: true,
        movies: []
    };

    getMovies = async () => {
        const {
            data: {
                data: { movies }
            }
        } = await axios.get("https://yts-proxy.now.sh/list_movies.json");
        this.setState({movies, isLoading: false});
    }

    componentDidMount() {
        this.getMovies();
    }

    render() {
        const { isLoading, movies } = this.state;
        return (
            <Container className="p-3">
                { isLoading
                    ? (<div className="loader">
                        <span>Loading...</span>
                    </div>)
                    : (
                        <Row lg={2} md={4}>
                            {movies.map(movie => (
                                <Movie
                                    key={movie.id}
                                    id={movie.id}
                                    year={movie.year}
                                    title={movie.title}
                                    summary={movie.summary}
                                    poster={movie.medium_cover_image}
                                    genres={movie.genres}
                                />))}
                        </Row>
                    )
                }
            </Container>
        )
    };
}

export default Home;
